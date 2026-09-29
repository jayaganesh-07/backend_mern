import React, { useState } from 'react';
import { 
  Building2, 
  Menu, 
  X, 
  Search, 
  Bell, 
  PhoneCall, 
  Globe, 
  Sun, 
  Moon, 
  PlusCircle, 
  ShieldAlert,
  FileText
} from 'lucide-react';

export default function Navbar({ 
  onOpenReportModal, 
  sidebarOpen, 
  setSidebarOpen, 
  darkMode, 
  setDarkMode, 
  fontSize, 
  setFontSize,
  activeTab,
  setActiveTab
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [lang, setLang] = useState('English');

  return (
    <header className="sticky top-0 z-40 w-full shadow-md bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      {/* Top Tricolor Accessibility Strip */}
      <div className="bg-gradient-to-r from-orange-500 via-white dark:via-slate-800 to-emerald-600 h-1.5 w-full"></div>
      
      {/* Top Official Info Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs px-4 py-1.5 flex flex-wrap justify-between items-center border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <span className="flex items-center text-amber-400 font-semibold">
            <ShieldAlert className="w-3.5 h-3.5 mr-1" />
            Official Portal of the National Public Grievance Administration
          </span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:inline text-slate-400">
            Emergency Helpline: <a href="tel:112" className="text-amber-400 font-bold hover:underline">112</a> / <a href="tel:18001112026" className="text-amber-400 font-bold hover:underline">1800-111-2026</a>
          </span>
        </div>

        {/* Accessibility & Options */}
        <div className="flex items-center space-x-3 text-xs">
          {/* Language Picker */}
          <div className="flex items-center space-x-1 cursor-pointer hover:text-white transition">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent border-none focus:outline-none text-slate-300 text-xs cursor-pointer"
            >
              <option value="English" className="bg-slate-800 text-white">English</option>
              <option value="Hindi" className="bg-slate-800 text-white">हिंदी (Hindi)</option>
              <option value="Regional" className="bg-slate-800 text-white">Regional</option>
            </select>
          </div>

          <span className="text-slate-600">|</span>

          {/* Font Resizer */}
          <div className="flex items-center space-x-1 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
            <span className="text-slate-400 text-[10px]">Font:</span>
            <button 
              onClick={() => setFontSize('sm')} 
              className={`px-1 text-[10px] font-bold rounded ${fontSize === 'sm' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              title="Small Text"
            >
              A-
            </button>
            <button 
              onClick={() => setFontSize('normal')} 
              className={`px-1 text-xs font-bold rounded ${fontSize === 'normal' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              title="Normal Text"
            >
              A
            </button>
            <button 
              onClick={() => setFontSize('lg')} 
              className={`px-1 text-sm font-bold rounded ${fontSize === 'lg' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              title="Large Text"
            >
              A+
            </button>
          </div>

          <span className="text-slate-600">|</span>

          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center space-x-1 hover:text-amber-400 transition"
            title="Toggle Theme"
          >
            {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-300" />}
            <span className="hidden sm:inline">{darkMode ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Mobile Toggle & Brand Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle Sidebar"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Official Logo Brand */}
            <div 
              onClick={() => setActiveTab('home')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500 p-0.5 bg-slate-900 shadow-md group-hover:scale-105 transition-transform duration-200">
                <img 
                  src="/gov_seal.jpg" 
                  alt="Government Seal Emblem" 
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=100&q=80';
                  }}
                />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/80 px-2 py-0.5 rounded border border-amber-300 dark:border-amber-800">
                    GOVT OF INDIA / CIVIC PORTAL
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none mt-0.5">
                  Civic<span className="text-amber-600 dark:text-amber-400">Pulse</span>
                </h1>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                  Integrated Citizen Services & Grievance Redressal System
                </p>
              </div>
            </div>
          </div>

          {/* Center/Right Actions & Quick Search */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search services, schemes, ticket ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm rounded-full border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-2.5" />
            </div>
          </div>

          {/* Right CTA Buttons & Notification */}
          <div className="flex items-center space-x-3">
            
            {/* Report Problem Main Button */}
            <button
              onClick={onOpenReportModal}
              className="flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold px-4 py-2.5 rounded-lg shadow-lg hover:shadow-amber-500/25 transition-all duration-200 transform active:scale-95 text-sm"
            >
              <PlusCircle className="w-4 h-4 text-amber-200 animate-pulse" />
              <span>Report Issue / Problem</span>
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition relative"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-900"></span>
              </button>

              {/* Notification Popup Menu */}
              {showNotifications && (
                <div className="absolute right-0 mt-3 w-80 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">Portal Updates</h4>
                    <span className="text-[10px] bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-semibold px-2 py-0.5 rounded">3 New</span>
                  </div>
                  <div className="mt-2 space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Monsoon Grievance Drive Active</p>
                      <p className="text-slate-500 dark:text-slate-400 mt-0.5">Water supply & pothole tickets prioritized within 24 hours.</p>
                      <span className="text-[10px] text-slate-400 mt-1 block">10 mins ago</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                      <p className="font-semibold text-slate-800 dark:text-slate-200">Digital Certificate Verification</p>
                      <p className="text-slate-500 dark:text-slate-400 mt-0.5">Birth & Property tax portals updated with instant QR verification.</p>
                      <span className="text-[10px] text-slate-400 mt-1 block">2 hours ago</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}
