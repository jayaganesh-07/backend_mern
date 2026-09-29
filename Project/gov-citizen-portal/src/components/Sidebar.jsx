import React from 'react';
import { 
  Home, 
  PlusCircle, 
  FileText, 
  Search, 
  PhoneCall, 
  Building2, 
  MessageSquareHeart, 
  HelpCircle,
  BarChart3,
  ShieldCheck,
  ChevronRight,
  RefreshCw,
  FolderOpen
} from 'lucide-react';

export default function Sidebar({ 
  sidebarOpen, 
  activeTab, 
  setActiveTab, 
  onOpenReportModal,
  onResetData
}) {
  const navItems = [
    { id: 'home', label: 'Home / Overview', icon: Home, badge: null },
    { id: 'report', label: 'Report a Problem', icon: PlusCircle, highlight: true },
    { id: 'table', label: 'Submitted Grievances', icon: FileText, badge: 'Live Table' },
    { id: 'services', label: 'Civic Services & Welfare', icon: Building2, badge: '24 Services' },
    { id: 'emergency', label: 'Emergency Helplines', icon: PhoneCall, badge: '112 Hotline', alert: true },
    { id: 'departments', label: 'Department Directory', icon: FolderOpen, badge: null },
    { id: 'feedback', label: 'Citizen Feedback', icon: MessageSquareHeart, badge: null },
  ];

  return (
    <>
      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div 
          onClick={() => {}}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-30 lg:hidden"
        />
      )}

      {/* Sidebar Panel */}
      <aside 
        className={`fixed top-28 bottom-0 left-0 z-30 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 ease-in-out shadow-xl flex flex-col justify-between ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-4 overflow-y-auto space-y-6">
          
          {/* Main Navigation Section */}
          <div>
            <div className="px-3 mb-2 flex items-center justify-between">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                CITIZEN NAVIGATION
              </span>
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>

            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'report') {
                        onOpenReportModal();
                      } else {
                        setActiveTab(item.id);
                      }
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl font-medium text-sm transition-all duration-150 ${
                      item.highlight
                        ? 'bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 shadow-md shadow-amber-500/20 my-2'
                        : isActive
                        ? 'bg-slate-900 text-white dark:bg-amber-500/10 dark:text-amber-400 dark:border-l-4 dark:border-amber-400 font-semibold shadow-sm'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-5 h-5 ${item.highlight ? 'text-slate-950' : isActive ? 'text-amber-500 dark:text-amber-400' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </div>

                    {item.badge && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.alert 
                          ? 'bg-red-500 text-white animate-pulse' 
                          : item.highlight
                          ? 'bg-slate-950 text-amber-400'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        {item.badge}
                      </span>
                    )}

                    {!item.badge && !item.highlight && (
                      <ChevronRight className={`w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 ${isActive ? 'opacity-100 text-amber-500' : ''}`} />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Quick Helpline Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-4 shadow-lg border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 opacity-10">
              <PhoneCall className="w-24 h-24 text-white" />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider bg-amber-950/80 border border-amber-800/60 px-2 py-0.5 rounded">
                24x7 EMERGENCY HOTLINE
              </span>
              <h4 className="text-lg font-extrabold mt-2 text-white">Need Immediate Help?</h4>
              <p className="text-xs text-slate-300 mt-1">Dial National Toll-Free Emergency Response</p>
              
              <div className="mt-3 flex items-center justify-between bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                <span className="text-xl font-black text-amber-400 tracking-wider">112</span>
                <a 
                  href="tel:112"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-lg transition"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom LocalStorage Reset / System Admin */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
          <button
            onClick={onResetData}
            className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 rounded-lg transition"
            title="Reset LocalStorage data to default sample tickets"
          >
            <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
            <span>Reset Demo LocalStorage</span>
          </button>
        </div>
      </aside>
    </>
  );
}
