import { ArrowLeft, CheckCircle2, Plus } from 'lucide-react'
import { useNavigate, useOutletContext, useSearchParams } from 'react-router-dom'
import PatientTable from '../components/PatientTable'

export default function PatientsPage() {
  const { openRegistration, patients } = useOutletContext()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const registered = searchParams.get('registered')
  const history = [...patients].sort((first, second) => (second.registeredAtValue || 0) - (first.registeredAtValue || 0))
  return <div className="page-wrap"><button className="page-back" type="button" onClick={() => navigate(-1)}><ArrowLeft size={15} /> Back</button><section className="welcome-row"><div><p className="eyebrow">PATIENT CARE <span>•</span> BHAGWANPUR BLOCK</p><h1>Patient records</h1><p className="subheading">Search, review, and follow up with your community.</p></div><button className="primary-button" onClick={openRegistration}><Plus size={18} /> Register patient</button></section>{registered && <div className="success-notice"><CheckCircle2 size={17} /> Patient registered successfully. The new record is ready for follow-up.</div>}<div className="section-heading"><div><h2>All patients</h2><p>{patients.length} registered patients in your workspace</p></div></div><PatientTable patients={patients} onViewAll={() => window.alert('You are already viewing all loaded patient records.')} /><RegistrationHistory patients={history} /></div>
}

function RegistrationHistory({ patients }) {
  return <section className="registration-history"><div className="section-heading"><div><h2>Registration history</h2><p>Newest registrations appear first with their date and time.</p></div></div><div className="history-list">{patients.map((patient, index) => <div className="history-row" key={`${patient.name}-${patient.registeredAt}`}><span className="history-order">{String(index + 1).padStart(2, '0')}</span><span className={`avatar avatar-${patient.color}`}>{patient.initials}</span><div className="history-person"><strong>{patient.name}</strong><span>{patient.age} · {patient.village}</span></div><div className="history-concern"><small>Local address</small><span>{patient.address || 'Address not recorded'}</span></div><time>{patient.registeredAt || 'Previously registered'}</time></div>)}</div></section>
}
