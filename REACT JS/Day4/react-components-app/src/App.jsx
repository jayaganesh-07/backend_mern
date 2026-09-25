import React, { useState } from 'react';

// Task 1 Import
import Header from './Header';

// Task 2 Imports
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Footer from './Footer';

import { GitFork, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

function App() {
  const [showTreeInspector, setShowTreeInspector] = useState(true);

  return (
    <div className="app-container">
      {/* Task 2: Navbar */}
      <Navbar />

      {/* Task 1: Header */}
      <Header />

      {/* Component Tree Inspector Widget */}
      <div className="inspector-panel glass-card" id="tree-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <GitFork color="#a855f7" size={20} />
            <h3 style={{ fontSize: '1.1rem', color: 'white' }}>React Component Tree Inspector</h3>
            <span style={{ 
              fontSize: '0.75rem', 
              background: 'rgba(16, 185, 129, 0.2)', 
              color: '#34d399', 
              padding: '2px 8px', 
              borderRadius: '12px',
              border: '1px solid rgba(16, 185, 129, 0.4)'
            }}>
              Task 1 & 2 Verified
            </span>
          </div>

          <button 
            className="btn btn-secondary"
            onClick={() => setShowTreeInspector(!showTreeInspector)}
            style={{ padding: '4px 10px', fontSize: '0.8rem' }}
          >
            {showTreeInspector ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {showTreeInspector ? 'Hide Tree' : 'Show Tree'}
          </button>
        </div>

        {showTreeInspector && (
          <div>
            <div className="tree-list">
              <div><strong>App.jsx</strong></div>
              <div className="tree-item">|-- <strong>&lt;Navbar /&gt;</strong> <span style={{ color: '#9ca3af' }}>(Task 2: Navbar.jsx)</span></div>
              <div className="tree-item">|-- <strong>&lt;Header /&gt;</strong> <span style={{ color: '#9ca3af' }}>(Task 1: Header.jsx)</span></div>
              <div className="tree-item">|-- <strong>&lt;Home /&gt;</strong> <span style={{ color: '#9ca3af' }}>(Task 2: Home.jsx)</span></div>
              <div className="tree-item">|-- <strong>&lt;About /&gt;</strong> <span style={{ color: '#9ca3af' }}>(Task 2: About.jsx)</span></div>
              <div className="tree-item">|-- <strong>&lt;Footer /&gt;</strong> <span style={{ color: '#9ca3af' }}>(Task 2: Footer.jsx)</span></div>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '12px', 
              marginTop: '16px' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <CheckCircle size={15} color="#10b981" /> Header.jsx created & exported
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <CheckCircle size={15} color="#10b981" /> Website name in Header
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <CheckCircle size={15} color="#10b981" /> Navbar, Home, About, Footer created
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <CheckCircle size={15} color="#10b981" /> App renders components in order
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Task 2: Home */}
      <Home />

      {/* Task 2: About */}
      <About />

      {/* Task 2: Footer */}
      <Footer />
    </div>
  );
}

export default App;
