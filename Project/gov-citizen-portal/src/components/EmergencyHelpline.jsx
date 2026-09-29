import React from 'react';
import { 
  PhoneCall, 
  ShieldAlert, 
  Flame, 
  Ambulance, 
  HeartHandshake, 
  Lock, 
  Zap, 
  LifeBuoy
} from 'lucide-react';

export default function EmergencyHelpline() {
  const helplines = [
    { name: 'National Emergency Response System', number: '112', icon: ShieldAlert, color: 'from-red-600 to-red-700', desc: 'All-in-one Emergency Response Hotline' },
    { name: 'Police Control Room', number: '100', icon: PhoneCall, color: 'from-amber-600 to-amber-700', desc: 'Crime, Theft, & Immediate Security' },
    { name: 'Fire & Rescue Services', number: '101', icon: Flame, color: 'from-orange-600 to-orange-700', desc: 'Fire Outbreaks & Rescue Dispatches' },
    { name: 'Ambulance & Medical Emergency', number: '102 / 108', icon: Ambulance, color: 'from-emerald-600 to-emerald-700', desc: 'Free Hospital Transport Service' },
    { name: 'Women Safety Helpline', number: '1091', icon: HeartHandshake, color: 'from-purple-600 to-purple-700', desc: '24/7 Women Protection Cell' },
    { name: 'National Cyber Crime Portal', number: '1930', icon: Lock, color: 'from-blue-600 to-blue-700', desc: 'Financial Fraud & Online Crime' },
  ];

  return (
    <div id="emergency-section" className="my-10 space-y-6">
      
      <div>
        <div className="flex items-center space-x-2">
          <span className="bg-red-500 text-white text-[10px] uppercase font-black px-2 py-0.5 rounded tracking-wider animate-pulse">
            24x7 EMERGENCY DISPATCH
          </span>
          <span className="text-xs text-slate-400 font-bold">Toll-Free Immediate Action</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
          Government Emergency Contacts & Helplines
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Dial any of the toll-free emergency numbers directly for immediate response from municipal authorities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {helplines.map((h, i) => {
          const Icon = h.icon;

          return (
            <div 
              key={i}
              className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-md flex items-center justify-between hover:shadow-xl transition"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${h.color} flex items-center justify-center text-white shadow-md`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">{h.name}</h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{h.desc}</p>
                </div>
              </div>

              <div className="shrink-0 text-right">
                <span className="text-xl font-black text-amber-600 dark:text-amber-400 block font-mono">
                  {h.number}
                </span>
                <a
                  href={`tel:${h.number.split(' ')[0]}`}
                  className="inline-block mt-1 bg-slate-900 hover:bg-slate-800 text-amber-400 text-[10px] font-bold px-3 py-1 rounded-lg transition"
                >
                  Call
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
