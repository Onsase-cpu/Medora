# Medora — Personal Health Management Portal

Medora is a responsive, app-like personal health management portal for keeping medications, appointments, health records, allergies, vaccinations, lab results, and everyday health measurements in one calm space. The interface uses the **Soft Clinic Clay** visual direction: warm oat surfaces, tactile relief shadows, Medora Teal, and focused coral attention states.

## What is included

The current frontend is a working, JavaScript-only React + Vite experience. The overview route includes a persistent desktop rail, mobile navigation drawer, health snapshot, care checklist with working toggles, health signals, recent records, upcoming appointment card, search control, add-item modal, toast confirmation, responsive layout, accessible focus states, reduced-motion support, and an installable PWA manifest. The visual assets are referenced from the project’s managed asset URLs.

The repository also includes `schema.sql`, a normalized SQL starting point for the full health domain. The static frontend uses local interaction state so it can be previewed immediately; the schema and integration notes provide the next step for wiring a Java, C#, or C++ service to persistent data.

## Run locally

```bash
pnpm install
pnpm dev
```

Then open the local Vite URL shown in the terminal. To create a production build:

```bash
pnpm build
pnpm preview
```

## Project layout

```text
client/
  index.html
  public/manifest.json
  src/App.jsx
  src/index.css
  src/main.jsx
  src/pages/Home.jsx
ideas.md
schema.sql
README.md
package.json
```

There are **no TypeScript source files** in this project. The source uses JavaScript, JSX, HTML, CSS, and SQL only, with no backend server bundled into the static build.

## Suggested service integrations

| Language | Recommended responsibility |
| --- | --- |
| Java | Spring Boot REST API, authentication, validation, and JDBC/JPA persistence against `schema.sql`. |
| C# | ASP.NET Core Web API, identity, background medication reminders, and EF Core migrations based on the SQL model. |
| C++ | Optional native health-device connector or desktop companion service that publishes normalized measurements to the API. |
| JavaScript | React/Vite frontend, client-side interactions, PWA shell, and API consumption through `fetch`. |
| HTML | Semantic application document structure in `client/index.html` and JSX-rendered UI markup. |
| CSS | Claymorphic design tokens, responsive breakpoints, tactile elevation, focus states, and motion rules in `client/src/index.css`. |
| SQL | Persistent relational data model in `schema.sql`, suitable for PostgreSQL with small syntax adjustments for another database. |

## Data and privacy note

Health information is sensitive. Before using real patient data, add authentication, authorization, encryption in transit and at rest, audit logging, consent handling, backups, retention rules, and a compliance review appropriate to the deployment region. The included UI is a frontend experience and should not be treated as a clinical device or as a substitute for medical advice.

## License

MIT. Replace this with your organization’s license before publishing.
