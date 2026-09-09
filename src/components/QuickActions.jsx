import { ChevronRight, ClipboardList, Mic, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function QuickActions({ onNewPatient }) {
  return <div className="quick-actions"><button className="quick-action action-coral" onClick={onNewPatient}><span><Plus size={20} /></span><strong>New patient</strong><small>Register a patient</small><ChevronRight size={17} /></button><Link className="quick-action action-blue" to="/referrals"><span><ClipboardList size={20} /></span><strong>Create referral</strong><small>Refer to a facility</small><ChevronRight size={17} /></Link><button className="quick-action action-green" onClick={() => window.alert('Voice note recording is ready to connect to your speech service.')}><span><Mic size={20} /></span><strong>Voice note</strong><small>Record patient notes</small><ChevronRight size={17} /></button></div>
}
