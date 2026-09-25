import React, { useState } from 'react';
import { Home as HomeIcon, Zap, ShieldCheck, Box, PlusCircle, RotateCcw } from 'lucide-react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <section id="home-section" className="home-section">
      <div className="comp-tag">
        <HomeIcon size={14} /> Task 2 Component: Home.jsx
      </div>

      <div className="glass-card" style={{ padding: '32px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>
          Welcome to the <span className="gradient-text">Home Component</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWdith: '700px', marginBottom: '20px' }}>
          This component represents the main landing content of our React application tree. 
          Each feature below highlights core React concepts implemented cleanly in isolated files.
        </p>

        {/* Interactive Feature Counter */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '16px 20px',
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-color)',
          width: 'fit-content'
        }}>
          <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Interactive Demo State:</span>
          <span style={{ 
            fontSize: '1.2rem', 
            fontWeight: 700, 
            color: '#a855f7',
            minWidth: '40px',
            textAlign: 'center' 
          }}>
            {count}
          </span>
          <button className="btn btn-primary" onClick={() => setCount(c => c + 1)} style={{ padding: '6px 14px', fontSize: '0.85rem' }}>
            <PlusCircle size={14} /> Increment
          </button>
          <button className="btn btn-secondary" onClick={() => setCount(0)} style={{ padding: '6px 14px', fontSize: '0.85rem' }}>
            <RotateCcw size={14} /> Reset
          </button>
        </div>
      </div>

      <div className="grid-cards">
        <div className="glass-card feature-card">
          <div className="feature-icon-box">
            <Zap size={24} />
          </div>
          <h3>Vite Speed</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            Lightning-fast Hot Module Replacement (HMR) and optimized build speeds for instant UI updates.
          </p>
        </div>

        <div className="glass-card feature-card">
          <div className="feature-icon-box" style={{ background: 'rgba(168, 85, 247, 0.12)', borderColor: 'rgba(168, 85, 247, 0.3)', color: '#c084fc' }}>
            <Box size={24} />
          </div>
          <h3>Component Modularization</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            Encapsulated, reusable components residing in separate JSX files for high maintainability.
          </p>
        </div>

        <div className="glass-card feature-card">
          <div className="feature-icon-box" style={{ background: 'rgba(16, 185, 129, 0.12)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34d399' }}>
            <ShieldCheck size={24} />
          </div>
          <h3>Clean Imports & Exports</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            Demonstrates explicit ES6 default export and import syntax across the component hierarchy.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
