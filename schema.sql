-- Medora personal health management schema
-- PostgreSQL-oriented SQL. Add application-level encryption and audit policies before production use.

CREATE TABLE users (
  user_id BIGSERIAL PRIMARY KEY,
  email VARCHAR(320) NOT NULL UNIQUE,
  display_name VARCHAR(160) NOT NULL,
  date_of_birth DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE medications (
  medication_id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  name VARCHAR(160) NOT NULL,
  dosage VARCHAR(80),
  instructions TEXT,
  frequency VARCHAR(80),
  start_date DATE,
  end_date DATE,
  prescribing_provider VARCHAR(160),
  active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE medication_logs (
  medication_log_id BIGSERIAL PRIMARY KEY,
  medication_id BIGINT NOT NULL REFERENCES medications(medication_id) ON DELETE CASCADE,
  scheduled_for TIMESTAMPTZ NOT NULL,
  taken_at TIMESTAMPTZ,
  status VARCHAR(24) NOT NULL DEFAULT 'scheduled' CHECK (status IN ('scheduled','taken','skipped','snoozed')),
  note TEXT,
  UNIQUE (medication_id, scheduled_for)
);

CREATE TABLE appointments (
  appointment_id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  provider_name VARCHAR(160) NOT NULL,
  specialty VARCHAR(120),
  facility VARCHAR(200),
  starts_at TIMESTAMPTZ NOT NULL,
  ends_at TIMESTAMPTZ,
  status VARCHAR(24) NOT NULL DEFAULT 'scheduled' CHECK (status IN ('scheduled','completed','cancelled')),
  notes TEXT
);

CREATE TABLE allergies (
  allergy_id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  allergen VARCHAR(160) NOT NULL,
  reaction VARCHAR(160),
  severity VARCHAR(24) CHECK (severity IN ('mild','moderate','severe','unknown')),
  verified BOOLEAN NOT NULL DEFAULT FALSE,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE vaccinations (
  vaccination_id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  vaccine_name VARCHAR(160) NOT NULL,
  dose_number INTEGER,
  administered_on DATE NOT NULL,
  provider_name VARCHAR(160),
  lot_number VARCHAR(80),
  notes TEXT
);

CREATE TABLE health_records (
  record_id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  record_type VARCHAR(48) NOT NULL CHECK (record_type IN ('lab_result','visit','imaging','document','other')),
  title VARCHAR(200) NOT NULL,
  summary TEXT,
  recorded_on DATE NOT NULL,
  provider_name VARCHAR(160),
  file_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE lab_results (
  lab_result_id BIGSERIAL PRIMARY KEY,
  record_id BIGINT NOT NULL UNIQUE REFERENCES health_records(record_id) ON DELETE CASCADE,
  test_name VARCHAR(160) NOT NULL,
  result_value VARCHAR(80),
  unit VARCHAR(40),
  reference_range VARCHAR(80),
  status VARCHAR(24) CHECK (status IN ('normal','low','high','critical','pending'))
);

CREATE TABLE health_measurements (
  measurement_id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  measurement_type VARCHAR(48) NOT NULL CHECK (measurement_type IN ('weight','blood_pressure','heart_rate','sleep','temperature','mood','steps','other')),
  value_numeric NUMERIC(10,2),
  value_text VARCHAR(80),
  unit VARCHAR(32),
  measured_at TIMESTAMPTZ NOT NULL,
  source VARCHAR(80) DEFAULT 'manual',
  note TEXT
);

CREATE INDEX idx_medications_user_active ON medications(user_id, active);
CREATE INDEX idx_appointments_user_starts ON appointments(user_id, starts_at);
CREATE INDEX idx_records_user_date ON health_records(user_id, recorded_on DESC);
CREATE INDEX idx_measurements_user_type_date ON health_measurements(user_id, measurement_type, measured_at DESC);
