import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Eye, 
  Trash2, 
  RefreshCw, 
  Download, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Layers, 
  ChevronDown,
  Building2,
  Calendar,
  Sparkles,
  PlusCircle,
  ShieldCheck
} from 'lucide-react';

export default function DataTable({ 
  tickets, 
  onUpdateStatus, 
  onDeleteTicket, 
  onViewTicket,
  onOpenReportModal,
  onResetData
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [urgencyFilter, setUrgencyFilter] = useState('All');

  // Filter logic
  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = 
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.phone.includes(searchTerm) ||
      ticket.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.subCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All' || ticket.status === statusFilter;
    const matchesDept = departmentFilter === 'All' || ticket.department === departmentFilter;
    const matchesUrgency = urgencyFilter === 'All' || ticket.urgency === urgencyFilter;

    return matchesSearch && matchesStatus && matchesDept && matchesUrgency;
  });

  // Calculate metrics
  const totalCount = tickets.length;
  const pendingCount = tickets.filter(t => t.status === 'Pending').length;
  const inProgressCount = tickets.filter(t => t.status === 'In Progress').length;
  const resolvedCount = tickets.filter(t => t.status === 'Resolved').length;
  const resolutionRate = totalCount > 0 ? Math.round((resolvedCount / totalCount) * 100) : 0;

  // Export CSV function
  const handleExportCSV = () => {
    if (tickets.length === 0) return;
    const headers = ['Ticket ID', 'Full Name', 'Phone', 'Email', 'Ward', 'Department', 'Category', 'Location', 'Urgency', 'Status', 'Date Submitted'];
    const rows = tickets.map(t => [
      t.id,
      `"${t.fullName}"`,
      t.phone,
      t.email,
      `"${t.ward}"`,
      `"${t.department}"`,
      `"${t.subCategory}"`,
      `"${t.location}"`,
      t.urgency,
      t.status,
      new Date(t.createdAt).toLocaleDateString()
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Gov_Citizen_Grievances_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getUrgencyBadge = (urgency) => {
    switch (urgency) {
      case 'Emergency':
        return 'bg-red-500 text-white font-black animate-pulse';
      case 'High':
        return 'bg-amber-500 text-slate-950 font-bold';
      case 'Medium':
        return 'bg-sky-500 text-white font-medium';
      default:
        return 'bg-slate-500 text-white font-medium';
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Resolved':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-300';
      case 'In Progress':
        return 'bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-300 border-amber-300';
      case 'Rejected':
        return 'bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border-rose-300';
      default:
        return 'bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-300';
    }
  };

  return (
    <div id="grievance-table-section" className="space-y-6 my-10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-amber-500 text-slate-950 text-[10px] uppercase font-black px-2 py-0.5 rounded tracking-wider">
              LOCALSTORAGE LIVE DATA
            </span>
            <span className="text-xs text-slate-400">Syncs automatically on entry</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
            Submitted Grievance Records & Status Tracker
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Real-time public database of all reported citizen problems, assigned departments, and resolution statuses.
          </p>
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          <button
            onClick={handleExportCSV}
            className="flex items-center space-x-1.5 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold px-3.5 py-2 rounded-xl text-xs transition border border-slate-300 dark:border-slate-700"
          >
            <Download className="w-4 h-4 text-amber-500" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={onOpenReportModal}
            className="flex items-center space-x-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-4 py-2 rounded-xl text-xs transition shadow-md shadow-amber-500/20"
          >
            <PlusCircle className="w-4 h-4" />
            <span>New Report</span>
          </button>
        </div>
      </div>

      {/* METRICS DASHBOARD CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Total Submissions</span>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-2xl font-black text-slate-900 dark:text-white">{totalCount}</span>
            <Layers className="w-5 h-5 text-amber-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Pending Review</span>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-2xl font-black text-slate-700 dark:text-slate-300">{pendingCount}</span>
            <Clock className="w-5 h-5 text-slate-400" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">In Progress</span>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-2xl font-black text-amber-600 dark:text-amber-400">{inProgressCount}</span>
            <RefreshCw className="w-5 h-5 text-amber-500 animate-spin-slow" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Resolved</span>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{resolvedCount}</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 rounded-2xl border border-slate-700 shadow-sm">
          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">Resolution Rate</span>
          <div className="flex items-baseline justify-between mt-1">
            <span className="text-2xl font-black text-white">{resolutionRate}%</span>
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-emerald-400 h-full rounded-full transition-all duration-500" style={{ width: `${resolutionRate}%` }}></div>
          </div>
        </div>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Live Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search ID, Name, Dept, Location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
            <option value="Rejected">Rejected</option>
          </select>

          {/* Department Filter */}
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="All">All Departments</option>
            <option value="Roads & Infrastructure">Roads & Infrastructure</option>
            <option value="Water Supply & Sanitation">Water Supply & Sanitation</option>
            <option value="Electricity & Power">Electricity & Power</option>
            <option value="Public Health & Environment">Public Health & Environment</option>
            <option value="Traffic & Transport">Traffic & Transport</option>
          </select>

          {/* Urgency Filter */}
          <select
            value={urgencyFilter}
            onChange={(e) => setUrgencyFilter(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="All">All Urgency Levels</option>
            <option value="Emergency">Emergency Priority</option>
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>

        </div>

        {/* Filter Reset Indicator */}
        {(searchTerm || statusFilter !== 'All' || departmentFilter !== 'All' || urgencyFilter !== 'All') && (
          <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100 dark:border-slate-800">
            <span className="text-slate-500 dark:text-slate-400">
              Showing <strong>{filteredTickets.length}</strong> of <strong>{tickets.length}</strong> grievance entries
            </span>
            <button
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('All');
                setDepartmentFilter('All');
                setUrgencyFilter('All');
              }}
              className="text-amber-600 dark:text-amber-400 font-bold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* DATA TABLE */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white text-[11px] font-extrabold uppercase tracking-wider border-b border-slate-800">
                <th className="py-3.5 px-4">Ticket ID</th>
                <th className="py-3.5 px-4">Complainant</th>
                <th className="py-3.5 px-4">Department & Issue</th>
                <th className="py-3.5 px-4">Location</th>
                <th className="py-3.5 px-4">Urgency</th>
                <th className="py-3.5 px-4">Submitted</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
              {filteredTickets.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-500 dark:text-slate-400">
                    <div className="max-w-sm mx-auto space-y-3">
                      <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
                      <p className="font-bold text-slate-800 dark:text-slate-200">No Grievance Tickets Found</p>
                      <p className="text-xs">No matching entries in LocalStorage for the selected filters.</p>
                      <button
                        onClick={onOpenReportModal}
                        className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition"
                      >
                        Submit First Grievance Now
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredTickets.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition duration-150">
                    
                    {/* Ticket ID */}
                    <td className="py-3.5 px-4 font-mono font-bold text-amber-600 dark:text-amber-400 whitespace-nowrap">
                      <button 
                        onClick={() => onViewTicket(t)}
                        className="hover:underline text-left cursor-pointer"
                        title="Click to view details"
                      >
                        {t.id}
                      </button>
                    </td>

                    {/* Complainant Name & Contact */}
                    <td className="py-3.5 px-4">
                      <p className="font-bold text-slate-900 dark:text-white whitespace-nowrap">{t.fullName}</p>
                      <p className="text-[11px] text-slate-400 font-mono">{t.phone}</p>
                    </td>

                    {/* Department & SubCategory */}
                    <td className="py-3.5 px-4">
                      <p className="font-semibold text-slate-800 dark:text-slate-200">{t.subCategory}</p>
                      <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium block">
                        {t.department}
                      </span>
                    </td>

                    {/* Location */}
                    <td className="py-3.5 px-4 max-w-xs">
                      <p className="font-medium text-slate-700 dark:text-slate-300 truncate">{t.location}</p>
                      <span className="text-[10px] text-slate-400">{t.ward}</span>
                    </td>

                    {/* Urgency */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 text-[10px] rounded-full uppercase tracking-wider ${getUrgencyBadge(t.urgency)}`}>
                        {t.urgency}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">
                      {new Date(t.createdAt).toLocaleDateString()}
                    </td>

                    {/* Status Dropdown/Badge */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <select
                        value={t.status}
                        onChange={(e) => onUpdateStatus(t.id, e.target.value)}
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-full border cursor-pointer focus:ring-2 focus:ring-amber-500 ${getStatusStyle(t.status)}`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </td>

                    {/* Action Buttons */}
                    <td className="py-3.5 px-4 text-right whitespace-nowrap space-x-1">
                      <button
                        onClick={() => onViewTicket(t)}
                        className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-500 hover:text-slate-950 transition"
                        title="View Full Ticket Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          if (confirm(`Withdraw/Delete ticket ${t.id}?`)) {
                            onDeleteTicket(t.id);
                          }
                        }}
                        className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-rose-600 dark:text-rose-400 hover:bg-rose-600 hover:text-white transition"
                        title="Delete Ticket"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer Info */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
          <span>
            Data is persisted in browser <strong>LocalStorage</strong> under key <code>gov_citizen_tickets_v1</code>.
          </span>

          <button
            onClick={onResetData}
            className="text-slate-400 hover:text-amber-500 font-semibold underline flex items-center space-x-1"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Demo Sample Tickets</span>
          </button>
        </div>
      </div>

    </div>
  );
}
