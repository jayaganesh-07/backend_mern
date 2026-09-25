import React from 'react';
import { Heart, Globe, Share2, Layers, ArrowUp } from 'lucide-react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div>
          <div className="comp-tag" style={{ marginBottom: '8px' }}>
            <Layers size={14} /> Task 2 Component: Footer.jsx
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'white' }}>
            React Components Project
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '350px' }}>
            Created with Vite + React to fulfill Task 1 (Single Component) and Task 2 (Multiple Components).
          </p>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '12px', fontSize: '0.95rem' }}>Components Tree</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            <li>• Navbar.jsx</li>
            <li>• Header.jsx</li>
            <li>• Home.jsx</li>
            <li>• About.jsx</li>
            <li>• Footer.jsx</li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'white', marginBottom: '12px', fontSize: '0.95rem' }}>Quick Actions</h4>
          <button 
            className="btn btn-secondary" 
            onClick={scrollToTop} 
            style={{ padding: '8px 14px', fontSize: '0.85rem' }}
          >
            <ArrowUp size={14} /> Back to Top
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          &copy; {new Date().getFullYear()} NexusCraft Studio. Built with <Heart size={14} color="#ec4899" inline /> using React & Vite.
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="#globe" style={{ color: 'var(--text-dim)' }} aria-label="Web"><Globe size={18} /></a>
          <a href="#share" style={{ color: 'var(--text-dim)' }} aria-label="Share"><Share2 size={18} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
