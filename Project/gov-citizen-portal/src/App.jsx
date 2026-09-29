import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HeroBanner from './components/HeroBanner';
import ServicesGrid from './components/ServicesGrid';
import EmergencyHelpline from './components/EmergencyHelpline';
import DataTable from './components/DataTable';
import ReportModal from './components/ReportModal';
import TicketDetailModal from './components/TicketDetailModal';
import Footer from './components/Footer';

import { 
  getStoredTickets, 
  updateTicketStatus, 
  deleteTicket, 
  resetToDefaultTickets 
} from './utils/storage';

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState('normal');

  // Load stored tickets on initial mount
  useEffect(() => {
    const loaded = getStoredTickets();
    setTickets(loaded);
  }, []);

  // Handle dark mode class on <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Handle font size class
  const getFontSizeClass = () => {
    if (fontSize === 'sm') return 'text-[14px]';
    if (fontSize === 'lg') return 'text-[18px]';
    return 'text-[16px]';
  };

  // Handlers for storage operations
  const handleTicketCreated = (newTicket) => {
    setTickets(getStoredTickets());
    // Auto switch to table or scroll to table
    setActiveTab('table');
    setTimeout(() => {
      const el = document.getElementById('grievance-table-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const handleUpdateStatus = (ticketId, newStatus) => {
    const updated = updateTicketStatus(ticketId, newStatus);
    setTickets(updated);
    if (selectedTicket && selectedTicket.id === ticketId) {
      setSelectedTicket({ ...selectedTicket, status: newStatus });
    }
  };

  const handleDeleteTicket = (ticketId) => {
    const updated = deleteTicket(ticketId);
    setTickets(updated);
  };

  const handleResetData = () => {
    if (confirm('Reset all grievance records to initial sample government dataset?')) {
      const reset = resetToDefaultTickets();
      setTickets(reset);
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 ${getFontSizeClass()}`}>
      
      {/* Top Navbar */}
      <Navbar
        onOpenReportModal={() => setReportModalOpen(true)}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        fontSize={fontSize}
        setFontSize={setFontSize}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="flex">
        
        {/* Side Nav Bar */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenReportModal={() => setReportModalOpen(true)}
          onResetData={handleResetData}
        />

        {/* Main Workspace Content Area */}
        <main 
          className={`flex-1 transition-all duration-300 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full ${
            sidebarOpen ? 'lg:ml-72' : 'ml-0'
          }`}
        >
          {/* HOME / OVERVIEW TAB */}
          {activeTab === 'home' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <HeroBanner
                onOpenReportModal={() => setReportModalOpen(true)}
                onNavigateToTable={() => setActiveTab('table')}
                onNavigateToServices={() => setActiveTab('services')}
              />
              
              <ServicesGrid 
                onOpenReportModal={() => setReportModalOpen(true)}
              />

              <DataTable
                tickets={tickets}
                onUpdateStatus={handleUpdateStatus}
                onDeleteTicket={handleDeleteTicket}
                onViewTicket={(t) => setSelectedTicket(t)}
                onOpenReportModal={() => setReportModalOpen(true)}
                onResetData={handleResetData}
              />

              <EmergencyHelpline />
            </div>
          )}

          {/* SUBMITTED GRIEVANCES TABLE TAB */}
          {activeTab === 'table' && (
            <div className="animate-in fade-in duration-200">
              <DataTable
                tickets={tickets}
                onUpdateStatus={handleUpdateStatus}
                onDeleteTicket={handleDeleteTicket}
                onViewTicket={(t) => setSelectedTicket(t)}
                onOpenReportModal={() => setReportModalOpen(true)}
                onResetData={handleResetData}
              />
            </div>
          )}

          {/* CIVIC SERVICES TAB */}
          {activeTab === 'services' && (
            <div className="animate-in fade-in duration-200">
              <ServicesGrid 
                onOpenReportModal={() => setReportModalOpen(true)}
              />
            </div>
          )}

          {/* EMERGENCY HELPLINE TAB */}
          {activeTab === 'emergency' && (
            <div className="animate-in fade-in duration-200">
              <EmergencyHelpline />
            </div>
          )}

          {/* DEPARTMENT DIRECTORY TAB */}
          {activeTab === 'departments' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 animate-in fade-in duration-200">
              <div>
                <span className="bg-amber-500 text-slate-950 text-[10px] uppercase font-black px-2 py-0.5 rounded tracking-wider">
                  MUNICIPAL DIRECTORY
                </span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  Department Officer Contacts & Ward Jurisdictions
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Directory of zonal chief engineers, public health inspectors, and grievance resolution officers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {[
                  { name: 'Public Works Department (PWD)', engineer: 'Er. Anand V. Kulkarni', email: 'pwd.chief@gov.in', phone: '080-2299-1001', ward: 'North & Central Wards' },
                  { name: 'Water Supply & Sanitation Board', engineer: 'Er. Meenakshi S.', email: 'water.grievances@gov.in', phone: '080-2299-1002', ward: 'East & West Wards' },
                  { name: 'Electricity Distribution Corp', engineer: 'Er. Sandeep Rao', email: 'power.discom@gov.in', phone: '080-2299-1003', ward: 'All Municipal Zones' },
                  { name: 'Health & Municipal Hygiene Wing', engineer: 'Dr. Sunita Patel (CMO)', email: 'health.officer@gov.in', phone: '080-2299-1004', ward: 'South & Industrial Wards' },
                ].map((d, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                    <h3 className="font-extrabold text-amber-600 dark:text-amber-400 text-sm">{d.name}</h3>
                    <p className="font-bold text-slate-800 dark:text-slate-200">Zonal Officer: {d.engineer}</p>
                    <p className="text-slate-500 dark:text-slate-400">Jurisdiction: {d.ward}</p>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-mono border-t border-slate-200 dark:border-slate-700">
                      <span>{d.phone}</span>
                      <span className="text-slate-400">{d.email}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FEEDBACK TAB */}
          {activeTab === 'feedback' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl max-w-2xl mx-auto space-y-6 animate-in fade-in duration-200">
              <div className="text-center space-y-2">
                <span className="bg-amber-500 text-slate-950 text-[10px] uppercase font-black px-2.5 py-0.5 rounded tracking-wider">
                  CITIZEN FEEDBACK
                </span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                  Rate Public Grievance Resolution
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Your rating helps improve municipal worker efficiency and response SLAs.
                </p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for submitting citizen feedback!'); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Ticket Reference ID</label>
                  <input type="text" placeholder="e.g. GOV-2026-1042" className="w-full p-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Satisfaction Rating</label>
                  <select className="w-full p-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
                    <option>⭐⭐⭐⭐⭐ - Highly Satisfied (Resolved within SLA)</option>
                    <option>⭐⭐⭐⭐ - Satisfied with Service</option>
                    <option>⭐⭐⭐ - Neutral / Average Response</option>
                    <option>⭐⭐ - Dissatisfied (Delayed Resolution)</option>
                    <option>⭐ - Unsatisfied (Work Incomplete)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Feedback Comments</label>
                  <textarea rows={3} placeholder="Share your experience..." className="w-full p-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"></textarea>
                </div>
                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3 rounded-xl text-xs shadow-lg transition">
                  Submit Feedback Rating
                </button>
              </form>
            </div>
          )}

          {/* Footer */}
          <Footer />

        </main>
      </div>

      {/* MODALS */}
      <ReportModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        onTicketCreated={handleTicketCreated}
      />

      <TicketDetailModal
        ticket={selectedTicket}
        onClose={() => setSelectedTicket(null)}
        onUpdateStatus={handleUpdateStatus}
        onDelete={handleDeleteTicket}
      />

    </div>
  );
}
