import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import RegistrationModal from './RegistrationModal'
import { navItems, patients as initialPatients } from './data'
import { navIcons } from './icons'

export default function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [registrationOpen, setRegistrationOpen] = useState(false)
  const [patientRecords, setPatientRecords] = useState(initialPatients)
  const navigate = useNavigate()
  function handleRegistered(patient) { setPatientRecords((records) => [patient, ...records]); setRegistrationOpen(false); navigate('/patients?registered=true') }
  return <div className="app-shell"><Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} /><main className="main-content"><Topbar onOpenMenu={() => setMenuOpen(true)} /><Outlet context={{ openRegistration: () => setRegistrationOpen(true), patients: patientRecords }} /><nav className="mobile-nav">{navItems.slice(0, 4).map(({ label, path, icon }) => { const Icon = navIcons[icon]; return <NavItem key={label} label={label} path={path} Icon={Icon} /> })}</nav></main>{registrationOpen && <RegistrationModal onClose={() => setRegistrationOpen(false)} onRegistered={handleRegistered} />}</div>
}

function NavItem({ label, path, Icon }) {
  const navigate = useNavigate()
  const currentPath = window.location.pathname
  return <button className={currentPath === path ? 'active' : ''} onClick={() => navigate(path)}><Icon size={19} /><span>{label}</span></button>
}
