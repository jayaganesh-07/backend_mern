const STORAGE_KEY = 'gov_citizen_tickets_v1';

export const INITIAL_TICKETS = [
  {
    id: 'GOV-2026-1042',
    fullName: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '+91 98765 43210',
    idProof: 'XXXX-XXXX-8821',
    ward: 'Ward 08 - North District',
    department: 'Roads & Infrastructure',
    subCategory: 'Dangerous Potholes & Road Crack',
    location: '14th Cross, MG Road Junction',
    landmark: 'Near Central Bus Station',
    urgency: 'High',
    description: 'Deep pothole causing severe traffic congestion and near-accidents during evening rain. Needs immediate bituminous resurfacing.',
    attachmentName: 'pothole_photo_mgroad.jpg',
    status: 'In Progress',
    createdAt: '2026-09-27T10:30:00.000Z',
    updatedAt: '2026-09-28T14:15:00.000Z'
  },
  {
    id: 'GOV-2026-1089',
    fullName: 'Ananya Sharma',
    email: 'ananya.s@example.com',
    phone: '+91 91234 56789',
    idProof: 'XXXX-XXXX-1934',
    ward: 'Ward 15 - East Zone',
    department: 'Water Supply & Sanitation',
    subCategory: 'Main Water Pipeline Leakage',
    location: 'Plot 45, Green Park Layout',
    landmark: 'Opposite Community Hall',
    urgency: 'Emergency',
    description: 'Clean drinking water leaking heavily from underground main supply pipe since morning. Water reaching road surface.',
    attachmentName: 'water_leak_greenpark.jpg',
    status: 'Pending',
    createdAt: '2026-09-29T08:15:00.000Z',
    updatedAt: '2026-09-29T08:15:00.000Z'
  },
  {
    id: 'GOV-2026-0994',
    fullName: 'Vikram Singh',
    email: 'vikram.singh@example.com',
    phone: '+91 99887 76655',
    idProof: 'XXXX-XXXX-5520',
    ward: 'Ward 03 - West Zone',
    department: 'Electricity & Power',
    subCategory: 'Non-functional Streetlights',
    location: 'Lake View Colony Avenue 3',
    landmark: 'Behind St. Jude School',
    urgency: 'Medium',
    description: 'Three consecutive solar streetlights have stopped working. The stretch is dark at night, posing safety issues for commuters.',
    attachmentName: null,
    status: 'Resolved',
    createdAt: '2026-09-25T16:45:00.000Z',
    updatedAt: '2026-09-28T11:00:00.000Z'
  },
  {
    id: 'GOV-2026-0920',
    fullName: 'Priya Sundaram',
    email: 'priya.sun@example.com',
    phone: '+91 97654 32109',
    idProof: 'XXXX-XXXX-9411',
    ward: 'Ward 12 - South Zone',
    department: 'Public Health & Environment',
    subCategory: 'Uncleared Community Garbage Bin',
    location: 'Market Road Plaza, Sector 4',
    landmark: 'Near Vegetable Wholesale Market',
    urgency: 'Medium',
    description: 'Overflowing municipal garbage bin attracting flies and stray animals. Sanitation crew missed morning pickup.',
    attachmentName: 'sanitation_sector4.jpg',
    status: 'In Progress',
    createdAt: '2026-09-28T09:20:00.000Z',
    updatedAt: '2026-09-29T10:00:00.000Z'
  }
];

export const getStoredTickets = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_TICKETS));
      return INITIAL_TICKETS;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading tickets from LocalStorage', err);
    return INITIAL_TICKETS;
  }
};

export const saveTicket = (newTicketData) => {
  const existing = getStoredTickets();
  const ticket = {
    id: `GOV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
    ...newTicketData,
    status: 'Pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  const updated = [ticket, ...existing];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return ticket;
};

export const updateTicketStatus = (ticketId, newStatus) => {
  const existing = getStoredTickets();
  const updated = existing.map(t => {
    if (t.id === ticketId) {
      return { ...t, status: newStatus, updatedAt: new Date().toISOString() };
    }
    return t;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const deleteTicket = (ticketId) => {
  const existing = getStoredTickets();
  const updated = existing.filter(t => t.id !== ticketId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const resetToDefaultTickets = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_TICKETS));
  return INITIAL_TICKETS;
};
