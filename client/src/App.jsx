/* Soft Clinic Clay: the app shell keeps navigation persistent, tactile, and calm. */
import { useState } from 'react';
import Home from './pages/Home.jsx';

export default function App() {
  const [activeView, setActiveView] = useState('Overview');
  return <Home activeView={activeView} onNavigate={setActiveView} />;
}
