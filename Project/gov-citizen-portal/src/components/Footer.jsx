import React from 'react';
import { ShieldCheck, PhoneCall, Globe, Heart, Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 mt-20">
      
      {/* Top Footer Strip */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-600 h-1 w-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-amber-500 overflow-hidden bg-slate-900 p-0.5">
                <img src="/gov_seal.jpg" alt="Gov Crest" className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">Civic<span className="text-amber-400">Pulse</span></h3>
                <p className="text-[10px] text-amber-500 uppercase tracking-widest font-bold">National Citizen Portal</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Official Digital Grievance Redressal & Public Services Management System. Designed for transparent citizen-government collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-3 text-amber-400">
              Citizen Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#report" className="hover:text-white transition">Report New Grievance</a></li>
              <li><a href="#table" className="hover:text-white transition">Track Ticket Status</a></li>
              <li><a href="#services" className="hover:text-white transition">Apply for Civic Services</a></li>
              <li><a href="#emergency" className="hover:text-white transition">24x7 Emergency Helplines</a></li>
              <li><a href="#" className="hover:text-white transition">Municipal Ward Map & Directory</a></li>
            </ul>
          </div>

          {/* Government Wings */}
          <div>
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-3 text-amber-400">
              Department Wings
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition">Public Works & Highways (PWD)</a></li>
              <li><a href="#" className="hover:text-white transition">Water Supply & Sewerage Board</a></li>
              <li><a href="#" className="hover:text-white transition">Electricity Distribution Corp (DISCOM)</a></li>
              <li><a href="#" className="hover:text-white transition">Public Health & Municipal Hygiene</a></li>
              <li><a href="#" className="hover:text-white transition">Traffic Police & Transport Authority</a></li>
            </ul>
          </div>

          {/* Compliance & Security */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-3 text-amber-400">
              Security & Accessibility
            </h4>
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-[11px]">
                <ShieldCheck className="w-4 h-4" />
                <span>SSL Encrypted & Verified</span>
              </div>
              <p className="text-[11px] text-slate-400">
                All data submitted is securely stored in your local browser storage and processed under Public Records Policy.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© 2026 Government Public Grievance Administration. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-slate-300 transition">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300 transition">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300 transition">Accessibility Guidelines (WCAG 2.1)</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
