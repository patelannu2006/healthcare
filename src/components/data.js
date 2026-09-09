export const navItems = [
  { label: 'Overview', path: '/', icon: 'Home' },
  { label: 'Patients', path: '/patients', icon: 'Users', count: '24' },
  { label: 'Referrals', path: '/referrals', icon: 'ClipboardList', count: '08' },
  { label: 'Facilities', path: '/facilities', icon: 'MapPin' },
  { label: 'Reports', path: '/reports', icon: 'FileText' },
]

export const facilities = [
  { name: 'Jai Prakash District Hospital', location: 'Bhopal, Madhya Pradesh', distance: '4.8 km', type: 'Government Hospital', availability: '24/7 Emergency', tone: 'risk' },
  { name: 'Hamidia Hospital', location: 'Bhopal, Madhya Pradesh', distance: '7.2 km', type: 'Government Hospital', availability: '24/7 Emergency', tone: 'risk' },
  { name: 'Sultania Zanana Hospital', location: 'Bhopal, Madhya Pradesh', distance: '7.4 km', type: 'Government Hospital', availability: 'Women and child care', tone: 'follow' },
  { name: 'Community Health Centre Berasia', location: 'Berasia, Bhopal, Madhya Pradesh', distance: '38.1 km', type: 'CHC', availability: 'Open now', tone: 'stable' },
  { name: 'Community Health Centre Phanda', location: 'Phanda, Bhopal, Madhya Pradesh', distance: '19.6 km', type: 'CHC', availability: 'Open now', tone: 'stable' },
  { name: 'Community Health Centre Gunga', location: 'Gunga, Bhopal, Madhya Pradesh', distance: '32.4 km', type: 'CHC', availability: 'Open now', tone: 'stable' },
  { name: 'Primary Health Centre Ratibad', location: 'Ratibad, Bhopal, Madhya Pradesh', distance: '24.7 km', type: 'PHC', availability: 'Appointments today', tone: 'follow' },
  { name: 'Primary Health Centre Misrod', location: 'Misrod, Bhopal, Madhya Pradesh', distance: '12.5 km', type: 'PHC', availability: 'Open now', tone: 'stable' },
  { name: 'Primary Health Centre Kolar', location: 'Kolar Road, Bhopal, Madhya Pradesh', distance: '11.8 km', type: 'PHC', availability: 'Open now', tone: 'stable' },
  { name: 'Primary Health Centre Neelbad', location: 'Neelbad, Bhopal, Madhya Pradesh', distance: '17.3 km', type: 'PHC', availability: 'Appointments today', tone: 'follow' },
]

export const patients = [
  { name: 'Meena Devi', age: '54 yrs', village: 'Bhagwanpur', initials: 'MD', color: 'coral', tag: 'High risk', tagTone: 'risk', time: '10 min ago', concern: 'Elevated blood pressure', registeredAt: '08 Sep 2026, 09:32 AM', registeredAtValue: 1788868920000 },
  { name: 'Ramesh Kumar', age: '42 yrs', village: 'Lakshmipur', initials: 'RK', color: 'blue', tag: 'Follow-up', tagTone: 'follow', time: '38 min ago', concern: 'Medication follow-up', registeredAt: '08 Sep 2026, 09:04 AM', registeredAtValue: 1788866640000 },
  { name: 'Sunita Yadav', age: '28 yrs', village: 'Rampur', initials: 'SY', color: 'gold', tag: 'Stable', tagTone: 'stable', time: '1 hr ago', concern: 'Routine check-up', registeredAt: '08 Sep 2026, 08:41 AM', registeredAtValue: 1788865260000 },
  { name: 'Kavita Sharma', age: '31 yrs', village: 'Bhagwanpur', initials: 'KS', color: 'purple', tag: 'Follow-up', tagTone: 'follow', time: '2 hrs ago', concern: 'Antenatal care', registeredAt: '08 Sep 2026, 07:55 AM', registeredAtValue: 1788862500000 },
  { name: 'Mohan Lal', age: '67 yrs', village: 'Rampur', initials: 'ML', color: 'blue', tag: 'High risk', tagTone: 'risk', time: 'Yesterday', concern: 'Diabetes review', registeredAt: '07 Sep 2026, 04:20 PM', registeredAtValue: 1788798000000 },
]
