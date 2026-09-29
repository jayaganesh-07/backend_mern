import React, { useState } from 'react';
import { 
  X, 
  AlertCircle, 
  CheckCircle2, 
  UploadCloud, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldAlert, 
  FileText, 
  Sparkles,
  Paperclip,
  Check
} from 'lucide-react';
import { saveTicket } from '../utils/storage';

const DEPARTMENTS = [
  {
    name: 'Roads & Infrastructure',
    subCategories: ['Dangerous Potholes & Cracks', 'Broken Footpath & Divider', 'Damaged Bridge/Overpass', 'Waterlogging on Main Road']
  },
  {
    name: 'Water Supply & Sanitation',
    subCategories: ['Main Water Pipeline Leakage', 'Contaminated Water Supply', 'No Water Supply', 'Sewage Overflow']
  },
  {
    name: 'Electricity & Power',
    subCategories: ['Non-functional Streetlights', 'Transformer Sparking/Noise', 'Loose Hanging Electric Cables', 'Power Outage']
  },
  {
    name: 'Public Health & Environment',
    subCategories: ['Uncleared Garbage Dump', 'Stray Animal Nuisance', 'Public Toilet Maintenance', 'Mosquito Spraying Needed']
  },
  {
    name: 'Traffic & Transport',
    subCategories: ['Faulty Traffic Lights', 'Illegal Parking Encroachment', 'Missing Road Signboard', 'Bus Shelter Damage']
  }
];

const WARDS = [
  'Ward 01 - North Zone',
  'Ward 03 - West Zone',
  'Ward 08 - Central District',
  'Ward 12 - South Zone',
  'Ward 15 - East Zone',
  'Ward 20 - Industrial Sector'
];

export default function ReportModal({ isOpen, onClose, onTicketCreated }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    idProof: '',
    ward: WARDS[2],
    department: DEPARTMENTS[0].name,
    subCategory: DEPARTMENTS[0].subCategories[0],
    urgency: 'High',
    location: '',
    landmark: '',
    description: '',
    attachmentName: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successTicket, setSuccessTicket] = useState(null);
  const [fileSelected, setFileSelected] = useState(null);

  if (!isOpen) return null;

  const currentDeptObj = DEPARTMENTS.find(d => d.name === formData.department) || DEPARTMENTS[0];

  const handleDepartmentChange = (deptName) => {
    const foundObj = DEPARTMENTS.find(d => d.name === deptName) || DEPARTMENTS[0];
    setFormData(prev => ({
      ...prev,
      department: deptName,
      subCategory: foundObj.subCategories[0]
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileSelected(file.name);
      setFormData(prev => ({ ...prev, attachmentName: file.name }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.location.trim()) newErrors.location = 'Exact problem location is required';
    if (!formData.description.trim() || formData.description.length < 15) {
      newErrors.description = 'Please describe the problem in detail (at least 15 characters)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const createdTicket = saveTicket(formData);
      setIsSubmitting(false);
      setSuccessTicket(createdTicket);
      onTicketCreated(createdTicket);
    }, 600);
  };

  const handleResetAndClose = () => {
    setSuccessTicket(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      idProof: '',
      ward: WARDS[2],
      department: DEPARTMENTS[0].name,
      subCategory: DEPARTMENTS[0].subCategories[0],
      urgency: 'High',
      location: '',
      landmark: '',
      description: '',
      attachmentName: null
    });
    setFileSelected(null);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8">
        
        {/* Header Strip */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-emerald-600 p-4 sm:p-6 text-slate-950 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-slate-950/20 backdrop-blur-md flex items-center justify-center border border-slate-950/20">
              <ShieldAlert className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider bg-slate-950 text-amber-400 px-2 py-0.5 rounded">
                OFFICIAL CITIZEN FORM
              </span>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 mt-0.5">
                Report a Civic Problem / Grievance
              </h2>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-full bg-slate-950/20 hover:bg-slate-950/40 text-slate-950 transition focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          
          {/* SUCCESS STATE DISPLAY */}
          {successTicket ? (
            <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-950/80 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-500 shadow-xl">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
              </div>

              <div>
                <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold text-xs px-3 py-1 rounded-full">
                  Grievance Registered Successfully
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-2">
                  Ticket Reference ID: <span className="text-amber-600 dark:text-amber-400">{successTicket.id}</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto mt-2">
                  Your issue has been logged in the Municipal LocalStorage database and dispatched to the <strong className="text-slate-900 dark:text-white">{successTicket.department}</strong> division.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 text-left text-xs max-w-lg mx-auto space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Complainant:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{successTicket.fullName} ({successTicket.phone})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Category:</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400">{successTicket.subCategory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Location:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{successTicket.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Priority:</span>
                  <span className="font-bold text-red-500">{successTicket.urgency} Priority</span>
                </div>
              </div>

              <div className="flex justify-center space-x-4 pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition text-sm"
                >
                  Close & View in Data Table
                </button>
              </div>
            </div>
          ) : (
            
            /* FORM STATE */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* SECTION 1: CITIZEN DETAILS */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                  <User className="w-5 h-5 text-amber-500" />
                  <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-900 dark:text-slate-100">
                    Step 1: Citizen Personal Contact Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Chandra"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border ${errors.fullName ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500`}
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    </div>
                    {errors.fullName && <p className="text-red-500 text-[11px] mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border ${errors.phone ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500`}
                      />
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    </div>
                    {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="citizen@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500`}
                      />
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    </div>
                    {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Municipal Ward / District *
                    </label>
                    <select
                      value={formData.ward}
                      onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      {WARDS.map(w => (
                        <option key={w} value={w}>{w}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* SECTION 2: PROBLEM CATEGORY & DETAILS */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                  <FileText className="w-5 h-5 text-amber-500" />
                  <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-900 dark:text-slate-100">
                    Step 2: Problem Category & Urgency
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Department Category
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => handleDepartmentChange(e.target.value)}
                      className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                    >
                      {DEPARTMENTS.map(d => (
                        <option key={d.name} value={d.name}>{d.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Issue Type
                    </label>
                    <select
                      value={formData.subCategory}
                      onChange={(e) => setFormData({ ...formData, subCategory: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      {currentDeptObj.subCategories.map(sub => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Urgency Level
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className={`w-full px-3 py-2.5 text-sm rounded-xl border font-bold focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        formData.urgency === 'Emergency' 
                          ? 'bg-red-500 text-white border-red-600' 
                          : formData.urgency === 'High'
                          ? 'bg-amber-100 text-amber-900 border-amber-400 dark:bg-amber-950 dark:text-amber-200'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700'
                      }`}
                    >
                      <option value="Low">Low (Routine)</option>
                      <option value="Medium">Medium (Attention needed)</option>
                      <option value="High">High (Impacting Traffic/Public)</option>
                      <option value="Emergency">Emergency (Immediate Risk to Life/Property)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Exact Address / Location *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g. 14th Main Road, Cross 3"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border ${errors.location ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500`}
                      />
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    </div>
                    {errors.location && <p className="text-red-500 text-[11px] mt-1">{errors.location}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Landmark (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Opposite Post Office"
                      value={formData.landmark}
                      onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Problem Description *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe the problem, severity, duration, and safety impact in detail..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className={`w-full p-3 text-sm rounded-xl border ${errors.description ? 'border-red-500' : 'border-slate-300 dark:border-slate-700'} bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  />
                  {errors.description && <p className="text-red-500 text-[11px] mt-1">{errors.description}</p>}
                </div>

                {/* File Attachment Upload */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Attach Photo / Proof Document (Optional)
                  </label>
                  <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-4 text-center bg-slate-50 dark:bg-slate-800/50 hover:border-amber-500 transition cursor-pointer relative">
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="flex flex-col items-center justify-center space-y-1">
                      <UploadCloud className="w-8 h-8 text-amber-500" />
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        {fileSelected ? `Attached: ${fileSelected}` : 'Click or Drag & Drop Photo / Document'}
                      </p>
                      <p className="text-[10px] text-slate-400">PNG, JPG, PDF up to 10MB</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Form Action Footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-5 py-2.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold px-6 py-3 rounded-xl shadow-lg transition transform active:scale-95 text-sm cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering Ticket...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-slate-950" />
                      <span>Submit Grievance Ticket</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
