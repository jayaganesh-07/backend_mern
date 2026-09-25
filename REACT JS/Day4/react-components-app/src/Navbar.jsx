import React from 'react';
import { Compass, Home as HomeIcon, Info, Code2, Layers } from 'lucide-react';

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-wrapper">
        <a href="#home" className="nav-brand">
          <Compass className="gradient-icon" color="#6366f1" size={26} />
          <span>React<span style={{ color: '#6366f1' }}>Core</span></span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#navbar" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Layers size={16} /> Navbar
            </a>
          </li>
          <li>
            <a href="#home-section" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <HomeIcon size={16} /> Home
            </a>
          </li>
          <li>
            <a href="#about-section" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Info size={16} /> About
            </a>
          </li>
          <li>
            <a href="#tree-section" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Code2 size={16} /> Structure
            </a>
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ 
            fontSize: '0.8rem', 
            padding: '4px 10px', 
            borderRadius: '20px', 
            background: 'rgba(16, 185, 129, 0.15)', 
            color: '#34d399', 
            border: '1px solid rgba(16, 185, 129, 0.3)' 
          }}>
            Navbar.jsx Loaded
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
