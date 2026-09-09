import { Plus, X } from 'lucide-react'
import { useState } from 'react'

export default function RegistrationModal({ onClose, onRegistered }) {
  const [form, setForm] = useState({ name: '', age: '', village: '', address: '', concern: '' })
  const [error, setError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    if (error) setError('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.name.trim() || !form.age || !form.village.trim() || !form.address.trim() || !form.concern.trim()) {
      setError('Complete all patient details before registering.')
      return
    }
    const now = new Date()
    onRegistered({
      name: form.name.trim(),
      age: `${form.age} yrs`,
      village: form.village.trim(),
      address: form.address.trim(),
      concern: form.concern.trim(),
      initials: form.name.trim().split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase(),
      color: 'coral',
      tag: 'New',
      tagTone: 'stable',
      time: 'Just now',
      registeredAt: now.toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      registeredAtValue: now.getTime(),
    })
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <form className="modal" onSubmit={handleSubmit} onClick={(event) => event.stopPropagation()} noValidate>
        <div className="modal-heading"><div><p className="eyebrow">YOUR HEALTH DETAILS</p><h2>Let’s get you registered</h2><p className="modal-intro">Share a few details so your care team can support you.</p></div><button type="button" className="icon-button" aria-label="Close registration" onClick={onClose}><X size={19} /></button></div>
        {error && <p className="form-error" role="alert">Please fill in all the details to continue.</p>}
        <label>Your full name<input autoFocus required name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" /></label>
        <div className="form-split"><label>How old are you?<input required name="age" value={form.age} onChange={handleChange} type="number" min="0" placeholder="Your age" /></label><label>Your village or area<input required name="village" value={form.village} onChange={handleChange} placeholder="Enter village or area" /></label></div>
        <label>Where do you live?<input required name="address" value={form.address} onChange={handleChange} placeholder="House number, street, or landmark" /></label>
        <label>How can we help you?<textarea required name="concern" value={form.concern} onChange={handleChange} placeholder="Tell us what you need help with" /></label>
        <div className="modal-actions"><button type="button" className="secondary-button" onClick={onClose}>Go back</button><button type="submit" className="primary-button"><Plus size={17} /> Save my details</button></div>
      </form>
    </div>
  )
}
