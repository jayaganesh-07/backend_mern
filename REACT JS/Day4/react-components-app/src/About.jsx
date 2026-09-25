import React from 'react';
import { Info, CheckCircle2, Code, FileCode, Workflow } from 'lucide-react';

function About() {
  const requirements = [
    { title: "Task 1: Single Component", detail: "Created Header.jsx with website title, exported & rendered in App.jsx." },
    { title: "Task 2: Multiple Components", detail: "Created Navbar.jsx, Home.jsx, About.jsx, Footer.jsx." },
    { title: "Component Order", detail: "Navbar -> Home -> About -> Footer hierarchy established." },
    { title: "ES6 Modules", detail: "Utilizes export default and clean import declarations." }
  ];

  return (
    <section id="about-section" className="about-section">
      <div className="comp-tag">
        <Info size={14} /> Task 2 Component: About.jsx
      </div>

      <div className="glass-card" style={{ padding: '32px' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
          About This <span className="gradient-text">React Application</span>
        </h2>

        <div className="about-grid">
          <div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
              This project demonstrates key fundamental concepts of modern React development:
              splitting user interfaces into isolated, single-responsibility component files.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
              <span className="tech-chip"><FileCode size={14} color="#6366f1" /> Header.jsx</span>
              <span className="tech-chip"><FileCode size={14} color="#06b6d4" /> Navbar.jsx</span>
              <span className="tech-chip"><FileCode size={14} color="#a855f7" /> Home.jsx</span>
              <span className="tech-chip"><FileCode size={14} color="#10b981" /> About.jsx</span>
              <span className="tech-chip"><FileCode size={14} color="#f59e0b" /> Footer.jsx</span>
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            padding: '20px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)'
          }}>
            <h4 style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Workflow size={18} color="#a855f7" /> Task Verification Checklist
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {requirements.map((req, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="#10b981" style={{ marginTop: '3px', shrink: 0 }} />
                  <div>
                    <strong style={{ color: 'white' }}>{req.title}</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{req.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
