import React from 'react';
import { 
  Building2, 
  FileCheck, 
  Droplet, 
  Zap, 
  Trash2, 
  Truck, 
  ShieldAlert, 
  ArrowUpRight,
  ClipboardList,
  Sparkles
} from 'lucide-react';

export default function ServicesGrid({ onOpenReportModal }) {
  const services = [
    {
      title: 'Roads & Pothole Repair',
      desc: 'Submit grievances for potholes, damaged footpaths, or waterlogged road stretches.',
      icon: Truck,
      dept: 'Public Works Department',
      urgency: '24h SLA',
      badgeColor: 'bg-amber-500 text-slate-950'
    },
    {
      title: 'Water Supply & Pipeline Leakage',
      desc: 'Report water supply interruptions, main line pipe bursts, or water contamination.',
      icon: Droplet,
      dept: 'Water Supply Board',
      urgency: 'Immediate',
      badgeColor: 'bg-blue-500 text-white'
    },
    {
      title: 'Streetlight & Electrical Safety',
      desc: 'Report dark stretches, broken solar streetlights, or loose hanging power cables.',
      icon: Zap,
      dept: 'Electricity Distribution Co.',
      urgency: '48h SLA',
      badgeColor: 'bg-amber-400 text-slate-950'
    },
    {
      title: 'Community Sanitation & Garbage',
      desc: 'Schedule garbage dump clearance, disinfectant spraying, or stray animal management.',
      icon: Trash2,
      dept: 'Municipal Sanitation Wing',
      urgency: 'Same Day',
      badgeColor: 'bg-emerald-500 text-white'
    },
    {
      title: 'Birth & Death Registration',
      desc: 'Apply online for official birth/death certificates with instant QR verification.',
      icon: FileCheck,
      dept: 'Civil Registration Dept',
      urgency: 'Online Service',
      badgeColor: 'bg-indigo-500 text-white'
    },
    {
      title: 'Property Tax & Trade License',
      desc: 'Pay municipal property tax, renew commercial trade permits, and view assessment.',
      icon: Building2,
      dept: 'Revenue & Finance Division',
      urgency: 'Self-Service',
      badgeColor: 'bg-slate-700 text-white'
    }
  ];

  return (
    <div id="services-section" className="my-10 space-y-6">
      
      <div>
        <div className="flex items-center space-x-2">
          <span className="bg-emerald-500 text-white text-[10px] uppercase font-black px-2 py-0.5 rounded tracking-wider">
            CITIZEN WELFARE SERVICES
          </span>
          <span className="text-xs text-slate-400">Direct Municipal Assistance</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
          Key Civic Services & Issue Reporting Categories
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Select a category below to submit a grievance or apply for municipal permits online.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 relative flex flex-col justify-between overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${service.badgeColor}`}>
                    {service.urgency}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    {service.dept}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400">Public Portal Access</span>
                <button
                  onClick={onOpenReportModal}
                  className="flex items-center space-x-1 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition"
                >
                  <span>Report Issue</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
