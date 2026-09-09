import { ChevronRight, MoreHorizontal, Search } from 'lucide-react'

export default function PatientTable({ patients, onViewAll, compact = false }) {
  return (
    <div className="table-card">
      <div className="table-toolbar"><div className="search-box"><Search size={17} /><input placeholder="Search patients..." aria-label="Search patients" /></div><button className="filter-button" onClick={() => window.alert('Patient filters are ready for your API data.')}><span className="filter-lines" /> Filter</button></div>
      <div className="patient-table">
        <div className="table-head"><span>PATIENT</span><span>VILLAGE</span><span>STATUS</span><span>LAST VISIT</span><span /></div>
        {patients.slice(0, compact ? 3 : patients.length).map((patient) => <div className="patient-row" key={patient.name}><div className="patient-name"><span className={`avatar avatar-${patient.color}`}>{patient.initials}</span><div><strong>{patient.name}</strong><small>{patient.age}</small></div></div><span className="village">{patient.village}</span><span className={`status-pill ${patient.tagTone}`}><i />{patient.tag}</span><span className="last-visit">{patient.time}</span><button className="row-menu" aria-label={`Open ${patient.name}`} onClick={() => window.alert(`Opening record for ${patient.name}`)}><MoreHorizontal size={18} /></button></div>)}
      </div>
      <div className="table-footer"><span>{compact ? `Showing 3 of ${patients.length + 19} patients` : `Showing ${patients.length} patients`}</span><button onClick={onViewAll}>View all <ChevronRight size={14} /></button></div>
    </div>
  )
}
