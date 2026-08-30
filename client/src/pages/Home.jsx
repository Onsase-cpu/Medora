/* Soft Clinic Clay: asymmetric care-rhythm layout, tactile surfaces, warm precision, reassuring microcopy. */
import { useMemo, useState } from 'react';
import {
  Activity, AlertCircle, ArrowUpRight, Bell, CalendarDays, ChevronRight, ClipboardList,
  Clock3, FileText, HeartPulse, LayoutDashboard, Menu, Pill, Plus, Search, ShieldCheck,
  Sparkles, Stethoscope, Syringe, Thermometer, UserRound, X, Check, MoreHorizontal
} from 'lucide-react';

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Medications', icon: Pill, count: '3' },
  { label: 'Appointments', icon: CalendarDays },
  { label: 'Health records', icon: FileText },
  { label: 'Measurements', icon: Activity },
];

const records = [
  { title: 'Blood panel', detail: 'Complete blood count', date: 'Aug 18, 2026', icon: Syringe, tone: 'coral' },
  { title: 'Annual physical', detail: 'Dr. Maya Chen · Northside Clinic', date: 'Jul 29, 2026', icon: Stethoscope, tone: 'teal' },
  { title: 'Vaccination record', detail: 'Influenza · COVID-19', date: 'Oct 12, 2025', icon: ShieldCheck, tone: 'butter' },
];

function SideNav({ activeView, onNavigate, mobileOpen, setMobileOpen }) {
  return <>
    {mobileOpen && <button className="scrim" aria-label="Close navigation" onClick={() => setMobileOpen(false)} />}
    <aside className={`side-nav ${mobileOpen ? 'is-open' : ''}`}>
      <div className="brand-lockup"><span className="brand-symbol" aria-hidden="true"><span /></span><img src="/manus-storage/medora-logo_6a1bbac9.png" alt="" onError={e => { e.currentTarget.style.display = 'none'; }} /><div><strong>medora</strong><span>personal health</span></div></div>
      <div className="workspace-chip"><span className="avatar-dot">AM</span><span><b>Alex Morgan</b><small>Personal space</small></span><ChevronRight size={15} /></div>
      <div className="nav-label">Your health</div>
      <nav aria-label="Primary navigation">
        {navItems.map(({ label, icon: Icon, count }) => <button key={label} className={`nav-item ${activeView === label ? 'active' : ''}`} onClick={() => { onNavigate(label); setMobileOpen(false); }}><Icon size={18} strokeWidth={1.8} /><span>{label}</span>{count && <em>{count}</em>}</button>)}
      </nav>
      <div className="nav-spacer" />
      <div className="nav-label">Stay well</div>
      <button className="nav-item" onClick={() => onNavigate('Care team')}><HeartPulse size={18} /><span>Care team</span></button>
      <button className="nav-item" onClick={() => onNavigate('Settings')}><UserRound size={18} /><span>Profile & settings</span></button>
      <div className="sidebar-footer"><div className="footer-mark"><Sparkles size={15} /></div><p><b>Small steps count.</b><br />Your health story, in one place.</p></div>
    </aside>
  </>;
}

function Header({ activeView, onMenu, onAdd }) {
  const [searching, setSearching] = useState(false);
  return <header className="topbar"><button className="mobile-menu" onClick={onMenu} aria-label="Open navigation"><Menu size={21} /></button><div className="crumb"><span>My health</span><ChevronRight size={14} /><b>{activeView}</b></div><div className="top-actions">{searching ? <div className="search-box"><Search size={16} /><input autoFocus placeholder="Search records..." /><button onClick={() => setSearching(false)} aria-label="Close search"><X size={15} /></button></div> : <button className="icon-btn" onClick={() => setSearching(true)} aria-label="Search"><Search size={19} /></button>}<button className="icon-btn notice" aria-label="Notifications"><Bell size={19} /><i /></button><button className="quick-add" onClick={onAdd}><Plus size={17} /><span>Add health item</span></button></div></header>;
}

function MetricCard({ label, value, unit, note, icon: Icon, tone, children }) {
  return <article className={`metric-card ${tone}`}><div className="metric-top"><span>{label}</span><div className="metric-icon"><Icon size={17} /></div></div><div className="metric-value">{value}<small>{unit}</small></div>{children || <p className="metric-note">{note}</p>}</article>;
}

function AddModal({ onClose, onSave }) {
  const [kind, setKind] = useState('Medication'); const [name, setName] = useState('');
  return <div className="modal-wrap" role="dialog" aria-modal="true"><button className="scrim" onClick={onClose} aria-label="Close dialog" /><div className="modal"><div className="modal-head"><div><span className="eyebrow">Add to your story</span><h2>New health item</h2></div><button className="close-btn" onClick={onClose}><X size={18} /></button></div><label>What would you like to add?<select value={kind} onChange={e => setKind(e.target.value)}><option>Medication</option><option>Appointment</option><option>Health record</option><option>Measurement</option></select></label><label>Name or title<input value={name} onChange={e => setName(e.target.value)} placeholder={kind === 'Medication' ? 'e.g. Vitamin D' : 'e.g. Blood pressure'} /></label><div className="modal-actions"><button className="secondary-btn" onClick={onClose}>Cancel</button><button className="primary-btn" onClick={() => { if (name.trim()) { onSave(kind, name.trim()); onClose(); } }}>Save item <ArrowUpRight size={16} /></button></div></div></div>;
}

function Overview({ onAdd }) {
  const [done, setDone] = useState([true, false, false]);
  const toggle = i => setDone(v => v.map((x, idx) => idx === i ? !x : x));
  return <>
    <section className="welcome-row"><div><span className="eyebrow">Wednesday, August 30, 2026</span><h1>A little more clarity<br /><em>for your everyday health.</em></h1><p className="lead">Good morning, Alex. Here’s your health rhythm at a glance.</p></div><div className="wellbeing-visual"><img src="/manus-storage/medora-wellbeing_158b9520.png" alt="Abstract clay wellbeing forms" onError={e => { e.currentTarget.style.display = 'none'; }} /><div className="visual-caption"><span>Today’s rhythm</span><b>Feeling steady</b></div></div></section>
    <section className="overview-grid"><article className="care-card"><div className="card-heading"><div><span className="eyebrow">Your care snapshot</span><h2>Steady progress</h2></div><span className="status-pill"><span /> On track</span></div><div className="progress-row"><div className="score-ring"><strong>82</strong><span>/100</span></div><div><p className="big-note">Your care rhythm is looking good.</p><p className="muted">Three gentle actions keep your week moving in the right direction.</p></div></div><div className="progress-bar"><span style={{ width: '82%' }} /></div><div className="pulse-line" aria-hidden="true"><span /></div><div className="care-footer"><span><b>+6</b> from last week</span><button onClick={() => onAdd('measurement')}>View details <ArrowUpRight size={15} /></button></div></article><article className="next-card"><div className="card-heading"><div><span className="eyebrow">Next up</span><h2>Care list</h2></div><button className="more-btn" aria-label="More options"><MoreHorizontal size={18} /></button></div><div className="care-list"><div className="care-task"><button className={`check ${done[0] ? 'checked' : ''}`} onClick={() => toggle(0)}>{done[0] && <Check size={13} />}</button><div><b>Take morning vitamins</b><span>Daily · 8:00 AM</span></div><Pill size={18} /></div><div className="care-task"><button className={`check ${done[1] ? 'checked' : ''}`} onClick={() => toggle(1)}>{done[1] && <Check size={13} />}</button><div><b>Book annual physical</b><span>Due this week</span></div><CalendarDays size={18} /></div><div className="care-task"><button className={`check ${done[2] ? 'checked' : ''}`} onClick={() => toggle(2)}>{done[2] && <Check size={13} />}</button><div><b>Log how you’re feeling</b><span>Anytime today</span></div><HeartPulse size={18} /></div></div><button className="text-btn">See full care list <ArrowUpRight size={15} /></button></article></section>
    <section className="section-block"><div className="section-title"><div><span className="eyebrow">At a glance</span><h2>Your health signals</h2></div><button className="date-filter">Last 30 days <ChevronRight size={15} /></button></div><div className="metrics-grid"><MetricCard label="Sleep average" value="7.4" unit="hrs" note="Within your usual range" icon={Clock3} tone="lilac"><div className="sparkline sleep"><span /><span /><span /><span /><span /><span /><span /></div><p className="metric-note">Within your usual range</p></MetricCard><MetricCard label="Resting heart rate" value="64" unit="bpm" note="3 bpm lower than usual" icon={HeartPulse} tone="mint"><div className="sparkline heart"><span /><span /><span /><span /><span /><span /><span /></div><p className="metric-note">3 bpm lower than usual</p></MetricCard><MetricCard label="Mood check-in" value="Good" unit="" note="A calm week so far" icon={Sparkles} tone="peach"><div className="mood-dots"><i /><i /><i className="selected" /><i /><i /></div><p className="metric-note">A calm week so far</p></MetricCard></div></section>
    <section className="lower-grid"><article className="records-card"><div className="section-title"><div><span className="eyebrow">Recent activity</span><h2>Health records</h2></div><button className="text-btn">View all <ArrowUpRight size={15} /></button></div>{records.map(({ title, detail, date, icon: Icon, tone }) => <div className="record-row" key={title}><div className={`record-icon ${tone}`}><Icon size={18} /></div><div className="record-copy"><b>{title}</b><span>{detail}</span></div><time>{date}</time><ChevronRight size={16} className="row-arrow" /></div>)}</article><article className="appointment-card"><div className="section-title"><div><span className="eyebrow">Coming up</span><h2>Appointments</h2></div><button className="more-btn"><MoreHorizontal size={18} /></button></div><div className="appointment-date"><div><b>12</b><span>SEP</span></div><div><b>Annual physical</b><span>Dr. Maya Chen · 10:30 AM</span></div></div><div className="appointment-meta"><span><CalendarDays size={15} /> Northside Clinic</span><button className="round-arrow"><ArrowUpRight size={16} /></button></div></article></section>
  </>;
}

export default function Home({ activeView, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false); const [modal, setModal] = useState(false); const [toast, setToast] = useState('');
  const viewTitle = useMemo(() => activeView === 'Overview' ? null : activeView, [activeView]);
  const save = (kind, name) => { setToast(`${kind} “${name}” added to your health story.`); setTimeout(() => setToast(''), 3200); };
  return <div className="app-shell"><SideNav activeView={activeView} onNavigate={onNavigate} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} /><main className="main-area"><Header activeView={activeView} onMenu={() => setMobileOpen(true)} onAdd={() => setModal(true)} /><div className="page-content">{viewTitle ? <section className="placeholder-view"><span className="eyebrow">Your health</span><h1>{viewTitle}<em> is coming into focus.</em></h1><p>This area is ready for your {viewTitle.toLowerCase()} workflow. Use “Add health item” to start building it out.</p><button className="primary-btn" onClick={() => setModal(true)}><Plus size={16} /> Add health item</button></section> : <Overview onAdd={() => setModal(true)} />}</div></main>{modal && <AddModal onClose={() => setModal(false)} onSave={save} />}{toast && <div className="toast"><div className="toast-icon"><Check size={15} /></div>{toast}</div>}</div>;
}
