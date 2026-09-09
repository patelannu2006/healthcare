import { Bell, CalendarDays, ChevronRight, Menu } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { navItems } from './data'

export default function Topbar({ onOpenMenu }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [openPanel, setOpenPanel] = useState(null)
  const panelRef = useRef(null)
  const current = navItems.find((item) => item.path === location.pathname) || navItems[0]
  useEffect(() => {
    function closeOnOutside(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) setOpenPanel(null)
    }
    function closeOnEscape(event) {
      if (event.key === 'Escape') setOpenPanel(null)
    }
    document.addEventListener('mousedown', closeOnOutside)
    document.addEventListener('keydown', closeOnEscape)
    return () => { document.removeEventListener('mousedown', closeOnOutside); document.removeEventListener('keydown', closeOnEscape) }
  }, [])

  return <header className="topbar"><button className="icon-button menu-trigger" aria-label="Open menu" onClick={onOpenMenu}><Menu size={22} /></button><div className="breadcrumbs"><span>My workspace</span><ChevronRight size={14} /><strong>{current.label}</strong></div><div className="top-actions" ref={panelRef}><div className="date-chip"><CalendarDays size={16} /><span>Tuesday, 08 Sep 2026</span></div><button className="icon-button notification-button" aria-label="Notifications" aria-expanded={openPanel === 'notifications'} onClick={() => setOpenPanel(openPanel === 'notifications' ? null : 'notifications')}><Bell size={20} /><i /></button><button className="top-avatar avatar avatar-purple" aria-label="Open profile" onClick={() => navigate('/profile')}>AK</button>{openPanel === 'notifications' && <NotificationPanel />}</div></header>
}

function NotificationPanel() { return <div className="notification-popover topbar-popover"><strong>Notifications</strong><button className="notification-item" onClick={() => window.alert('Opening the urgent referral queue.')}><span className="dot coral-dot" /><span><b>Urgent referral</b><small>Meena Devi needs review</small></span></button><button className="notification-item" onClick={() => window.alert('Data sync is up to date.')}><span className="dot green-dot" /><span><b>Sync completed</b><small>All offline records are backed up</small></span></button><button className="popover-footer" onClick={() => window.alert('All notifications are marked as read.')}>Mark all as read</button></div> }

