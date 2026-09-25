import React from 'react';
import { Sparkles, Terminal, Cpu, Layers } from 'lucide-react';

function Header() {
  // Website name inside Header component
  const websiteName = "NexusCraft React Studio";

  return (
    <header className="header-hero glass-card">
      <div className="comp-tag">
        <Layers size={14} /> Task 1 Component: Header.jsx
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
        <Sparkles color="#a855f7" size={28} />
        <h1 className="header-title gradient-text">{websiteName}</h1>
      </div>

      <p className="header-subtitle">
        Welcome to {websiteName} — Built with React & Vite. Demonstrating single component exports, 
        JSX composition, and modular frontend engineering architecture.
      </p>

      <div className="header-stats">
        <div className="stat-pill">
          <Terminal size={16} color="#6366f1" />
          <span>Framework: <strong>React 19 + Vite</strong></span>
        </div>
        <div className="stat-pill">
          <Cpu size={16} color="#06b6d4" />
          <span>Status: <strong>Task 1 Complete</strong></span>
        </div>
        <div className="stat-pill">
          <Layers size={16} color="#10b981" />
          <span>Component: <strong>&lt;Header /&gt;</strong></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
