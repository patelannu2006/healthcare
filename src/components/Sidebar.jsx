import { Settings, WifiOff, MoreHorizontal } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navItems } from './data'
import { navIcons } from './icons'

export default function Sidebar({ isOpen, onClose }) {
  return <aside className={`sidebar ${isOpen ? 'is-open' : ''}`}>
    <div className="brand-lockup"><div className="brand-mark">♥</div><div><strong>sehat<span>setu</span></strong><small>RURAL HEALTH NETWORK</small></div><button className="icon-button close-menu" aria-label="Close menu" onClick={onClose}>×</button></div>
    <div className="workspace-label">MY WORKSPACE <span>•</span></div>
    <nav className="main-nav" aria-label="Main navigation">{navItems.map(({ label, path, icon, count }) => { const Icon = navIcons[icon]; return <NavLink key={label} to={path} end={path === '/'} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}><Icon size={19} /><span>{label}</span>{count && <em>{count}</em>}</NavLink> })}</nav>
    <div className="sidebar-spacer" />
    <div className="offline-card"><div className="offline-icon"><WifiOff size={17} /></div><div><strong>Offline mode ready</strong><span>Last synced 4 min ago</span></div><span className="online-dot" /></div>
    <button className="nav-item settings" onClick={() => window.alert('Settings will be connected to your profile and sync preferences.')}><Settings size={19} /><span>Settings</span></button>
    <div className="user-mini"><div className="avatar avatar-purple">AK</div><div><strong>Anjali Kumari</strong><span>ASHA Worker</span></div><MoreHorizontal size={18} /></div>
  </aside>
}
