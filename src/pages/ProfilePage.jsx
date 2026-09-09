import { ArrowLeft, BadgeCheck, CalendarDays, Clock3, LogOut, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const profile = {
  name: 'Anjali Kumari',
  role: 'ASHA Worker',
  mobile: '+91 98765 43210',
  workerId: 'ASHA-DEL-024',
  serviceArea: 'Rampur cluster',
  joined: '12 March 2023',
  lastActive: 'Today, 09:42 AM',
}

export default function ProfilePage() {
  const navigate = useNavigate()

  return <div className="page-wrap profile-page">
    <button className="profile-back" type="button" onClick={() => navigate('/')}><ArrowLeft size={15} /> Back to overview</button>
    <div className="profile-page-heading"><div><p className="eyebrow"><span>●</span> ACCOUNT PROFILE</p><h1>Your profile</h1><p className="subheading">Your account details and workspace identity.</p></div><span className="profile-ready"><BadgeCheck size={15} /> Active account</span></div>
    <section className="profile-hero"><div className="profile-large-avatar">AK</div><div><h2>{profile.name}</h2><p>{profile.role}</p><span>Frontline health worker</span></div></section>
    <section className="profile-detail-grid" aria-label="Profile details">
      <ProfileDetail icon={Phone} label="Mobile number" value={profile.mobile} />
      <ProfileDetail icon={ShieldCheck} label="Worker ID" value={profile.workerId} />
      <ProfileDetail icon={MapPin} label="Service area" value={profile.serviceArea} />
      <ProfileDetail icon={CalendarDays} label="Joined Sehat Setu" value={profile.joined} />
      <ProfileDetail icon={Clock3} label="Last active" value={profile.lastActive} />
    </section>
    <section className="profile-note"><ShieldCheck size={18} /><div><strong>Your account is protected</strong><p>Profile information is visible only from your account menu and profile page.</p></div></section>
    <button className="profile-signout" type="button" onClick={() => navigate('/login')}><LogOut size={15} /> Sign out</button>
  </div>
}

function ProfileDetail({ icon: Icon, label, value }) {
  return <div className="profile-detail-card"><div className="profile-detail-icon"><Icon size={17} /></div><div><span>{label}</span><strong>{value}</strong></div></div>
}
