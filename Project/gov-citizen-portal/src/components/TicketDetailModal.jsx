import React from 'react';
import { 
  X, 
  Printer, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  AlertTriangle, 
  Building2, 
  Calendar,
  FileCheck2,
  Trash2
} from 'lucide-react';

export default function TicketDetailModal({ 
  ticket, 
  onClose, 
  onUpdateStatus, 
  onDelete 
}) {
  if (!ticket) return null;

  const getUrgencyBadge = (urgency) => {
    switch (urgency) {
      case 'Emergency':
        return 'bg-red-500 text-white font-bold animate-pulse';
      case 'High':
        return 'bg-amber-500 text-slate-950 font-bold';
      case 'Medium':
        return 'bg-blue-500 text-white font-bold';
      default:
        return 'bg-slate-500 text-white font-bold';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Resolved':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300';
      case 'In Progress':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300';
      case 'Rejected':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-300';
      default:
        return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-300';
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8">
        
        {/* Top Header Strip */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-500 shrink-0">
              <img src="/gov_seal.jpg" alt="Gov Seal" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">
                OFFICIAL GRIEVANCE RECEIPT
              </span>
              <h3 className="text-xl font-black text-white">
                Ticket #{ticket.id}
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
              title="Print Receipt"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Status Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <div>
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Current Status</span>
              <span className={`inline-block mt-1 px-3 py-1 text-xs rounded-full font-bold border ${getStatusBadge(ticket.status)}`}>
                {ticket.status}
              </span>
            </div>

            <div>
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Urgency</span>
              <span className={`inline-block mt-1 px-3 py-1 text-xs rounded-full ${getUrgencyBadge(ticket.urgency)}`}>
                {ticket.urgency}
              </span>
            </div>

            <div>
              <span className="text-xs text-slate-500 dark:text-slate-400 block">Submitted On</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                {new Date(ticket.createdAt).toLocaleDateString()} at {new Date(ticket.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>

          {/* Citizen Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>Complainant Details</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-slate-400">Full Name:</span>
                <p className="font-bold text-slate-900 dark:text-white mt-0.5">{ticket.fullName}</p>
              </div>
              <div>
                <span className="text-slate-400">Phone Number:</span>
                <p className="font-bold text-slate-900 dark:text-white mt-0.5">{ticket.phone}</p>
              </div>
              <div>
                <span className="text-slate-400">Email Address:</span>
                <p className="font-bold text-slate-900 dark:text-white mt-0.5">{ticket.email}</p>
              </div>
              <div>
                <span className="text-slate-400">Govt ID / Aadhaar:</span>
                <p className="font-bold text-slate-900 dark:text-white mt-0.5">{ticket.idProof || 'Verified Citizen'}</p>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-400">Ward Jurisdiction:</span>
                <p className="font-bold text-slate-900 dark:text-white mt-0.5">{ticket.ward}</p>
              </div>
            </div>
          </div>

          {/* Issue & Location Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center space-x-1">
              <Building2 className="w-4 h-4" />
              <span>Issue & Location Details</span>
            </h4>

            <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <span className="text-slate-400">Assigned Department:</span>
                  <p className="font-extrabold text-amber-600 dark:text-amber-400 mt-0.5">{ticket.department}</p>
                </div>
                <div>
                  <span className="text-slate-400">Issue Sub-Category:</span>
                  <p className="font-bold text-slate-900 dark:text-white mt-0.5">{ticket.subCategory}</p>
                </div>
              </div>

              <div>
                <span className="text-slate-400">Exact Location Address:</span>
                <p className="font-bold text-slate-900 dark:text-white mt-0.5 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 inline mr-1" />
                  {ticket.location} {ticket.landmark && `(Near ${ticket.landmark})`}
                </p>
              </div>

              <div>
                <span className="text-slate-400">Full Description:</span>
                <p className="mt-1 text-slate-800 dark:text-slate-200 leading-relaxed bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                  {ticket.description}
                </p>
              </div>

              {ticket.attachmentName && (
                <div>
                  <span className="text-slate-400">Attached Attachment:</span>
                  <div className="mt-1 flex items-center space-x-2 text-amber-600 dark:text-amber-400 font-bold bg-amber-50 dark:bg-amber-950/50 p-2.5 rounded-lg border border-amber-200 dark:border-amber-800">
                    <FileCheck2 className="w-4 h-4" />
                    <span>{ticket.attachmentName}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Admin Actions */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Update Status:</span>
              <select
                value={ticket.status}
                onChange={(e) => onUpdateStatus(ticket.id, e.target.value)}
                className="text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to withdraw/delete this ticket?')) {
                    onDelete(ticket.id);
                    onClose();
                  }
                }}
                className="flex items-center space-x-1 text-rose-600 dark:text-rose-400 hover:text-rose-700 font-bold text-xs px-3 py-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/50 transition"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete Ticket</span>
              </button>

              <button
                onClick={onClose}
                className="bg-slate-900 text-white font-bold text-xs px-4 py-2 rounded-xl hover:bg-slate-800 transition"
              >
                Done
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
