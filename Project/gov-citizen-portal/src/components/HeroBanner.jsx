import React from 'react';
import { 
  PlusCircle, 
  Search, 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  Building2, 
  ArrowRight,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

export default function HeroBanner({ onOpenReportModal, onNavigateToTable, onNavigateToServices }) {
  return (
    <div className="relative mb-8 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-white">
      
      {/* Background Graphic Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_banner.jpg" 
          alt="Smart City Digital Governance Hero Banner" 
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transform hover:scale-100 transition-transform duration-700"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/70"></div>
      </div>

      {/* Live Announcement Ticker Top Bar */}
      <div className="relative z-10 bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 flex items-center justify-between text-xs backdrop-blur-md">
        <div className="flex items-center space-x-2 text-amber-300 font-semibold overflow-hidden">
          <span className="bg-amber-500 text-slate-950 text-[10px] uppercase font-black px-2 py-0.5 rounded tracking-wider shrink-0">
            LIVE ANNOUNCEMENT
          </span>
          <p className="truncate text-slate-200">
            🚨 <span className="font-bold text-amber-300">Monsoon Relief Cell Active:</span> Report waterlogging, fallen trees, & broken streetlights for expedited 12-hour resolution.
          </p>
        </div>
        <span className="hidden sm:inline text-slate-400 text-[11px] shrink-0 ml-4">Updated 5 mins ago</span>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-4xl">
        <div className="inline-flex items-center space-x-2 bg-slate-800/80 border border-slate-700 rounded-full px-3 py-1 mb-4 text-xs font-semibold text-amber-400 backdrop-blur-md">
          <ShieldAlert className="w-4 h-4 text-amber-400" />
          <span>Transparent Governance & Public Redressal Portal</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Your Voice for a <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-emerald-400 bg-clip-text text-transparent">
            Cleaner, Safer City.
          </span>
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          Report civic problems, track your grievance tickets in real-time, access public services, and connect directly with municipal department authorities.
        </p>

        {/* Hero CTA Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <button
            onClick={onOpenReportModal}
            className="flex items-center space-x-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl shadow-xl shadow-amber-500/25 transition-all duration-200 transform active:scale-95 text-sm sm:text-base cursor-pointer"
          >
            <PlusCircle className="w-5 h-5 text-slate-950" />
            <span>Report a Problem / Issue</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={onNavigateToTable}
            className="flex items-center space-x-2 bg-slate-800/90 hover:bg-slate-700 text-white font-bold px-5 py-3.5 rounded-xl border border-slate-700 transition backdrop-blur-md text-sm sm:text-base cursor-pointer"
          >
            <Search className="w-4 h-4 text-amber-400" />
            <span>View All Submitted Tickets</span>
          </button>

          <button
            onClick={onNavigateToServices}
            className="flex items-center space-x-2 text-slate-300 hover:text-amber-300 font-semibold px-4 py-3.5 text-sm transition cursor-pointer"
          >
            <Building2 className="w-4 h-4" />
            <span>Browse Municipal Services</span>
          </button>
        </div>

        {/* Live Governance Metrics Row */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-slate-800/40 border border-slate-800 p-3.5 rounded-2xl backdrop-blur-xs">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Grievances Resolved</span>
            </div>
            <p className="text-2xl font-black text-white mt-1">15,480+</p>
            <span className="text-[10px] text-slate-400">Verified by Municipal Inspection</span>
          </div>

          <div className="bg-slate-800/40 border border-slate-800 p-3.5 rounded-2xl backdrop-blur-xs">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold">
              <TrendingUp className="w-4 h-4" />
              <span>Resolution SLA</span>
            </div>
            <p className="text-2xl font-black text-white mt-1">98.4%</p>
            <span className="text-[10px] text-slate-400">Average 48-Hour Resolution</span>
          </div>

          <div className="bg-slate-800/40 border border-slate-800 p-3.5 rounded-2xl backdrop-blur-xs">
            <div className="flex items-center space-x-2 text-sky-400 text-xs font-bold">
              <Clock className="w-4 h-4" />
              <span>Active Response</span>
            </div>
            <p className="text-2xl font-black text-white mt-1">24 / 7</p>
            <span className="text-[10px] text-slate-400">Automated Dispatch System</span>
          </div>

          <div className="bg-slate-800/40 border border-slate-800 p-3.5 rounded-2xl backdrop-blur-xs">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold">
              <Building2 className="w-4 h-4" />
              <span>Wards Covered</span>
            </div>
            <p className="text-2xl font-black text-white mt-1">54 Wards</p>
            <span className="text-[10px] text-slate-400">Metropolitan Jurisdiction</span>
          </div>
        </div>

      </div>
    </div>
  );
}
