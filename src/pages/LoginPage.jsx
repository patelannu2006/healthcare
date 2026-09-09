import { ArrowRight, Check, Eye, EyeOff, HeartPulse, LockKeyhole, Smartphone } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()
  const [mobileNumber, setMobileNumber] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  function handleMobileChange(event) {
    const digitsOnly = event.target.value.replace(/\D/g, '').slice(0, 10)
    setMobileNumber(digitsOnly)
    if (error) setError('')
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
    if (error) setError('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!/^\d{10}$/.test(mobileNumber)) {
      setError('Enter a valid 10-digit mobile number.')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    navigate('/')
  }

  const mobileIsValid = /^\d{10}$/.test(mobileNumber)
  const mobileError = error && !mobileIsValid
  const passwordError = error && mobileIsValid

  return <main className="login-page">
    <section className="login-visual" aria-label="Sehat Setu overview">
      <div className="login-brand"><div className="login-brand-mark"><HeartPulse size={21} /></div><div><strong>sehat<span>setu</span></strong><small>RURAL HEALTH NETWORK</small></div></div>
      <div className="login-visual-copy"><p className="eyebrow"><span>●</span> CARE THAT CONNECTS</p><h1>Health support,<br /><em>closer to home.</em></h1><p>One simple workspace for frontline workers serving every village with care.</p></div>
      <div className="login-quote"><Check size={15} /><span>Trusted by community health teams across rural India</span></div>
    </section>
    <section className="login-panel">
      <div className="login-form-wrap">
        <div className="login-mobile-mark"><HeartPulse size={20} /></div>
        <p className="eyebrow">WELCOME BACK</p>
        <h2>Sign in to your workspace</h2>
        <p className="login-intro">Use your registered mobile number to continue.</p>
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="mobile-number">Mobile number</label>
          <div className={`login-input ${error ? 'has-error' : ''}`}>
            <Smartphone size={18} aria-hidden="true" />
            <span className="country-code">+91</span>
            <span className="input-divider" />
            <input id="mobile-number" type="tel" inputMode="numeric" autoComplete="tel-national" placeholder="10-digit mobile number" value={mobileNumber} onChange={handleMobileChange} maxLength={10} pattern="[0-9]{10}" aria-invalid={Boolean(error)} aria-describedby={error ? 'mobile-error' : 'mobile-hint'} />
          </div>
          {mobileError ? <p className="login-error" id="mobile-error" role="alert">{error}</p> : <p className="login-hint" id="mobile-hint">Enter 10 digits, without spaces or dashes.</p>}
          <label htmlFor="login-password">Password</label>
          <div className={`login-input password-input ${error && password.length < 8 ? 'has-error' : ''}`}>
            <LockKeyhole size={18} aria-hidden="true" />
            <input id="login-password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} minLength={8} required aria-invalid={Boolean(error && password.length < 8)} aria-describedby="password-hint" />
            <button className="password-toggle" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword((visible) => !visible)}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button>
          </div>
          <p className={passwordError ? 'login-error' : 'login-hint'} id="password-hint" role={passwordError ? 'alert' : undefined}>{passwordError ? error : 'Use at least 8 characters. Your browser may offer to save it securely.'}</p>
          <button className="login-submit" type="submit">Continue <ArrowRight size={17} /></button>
        </form>
        <div className="login-security"><LockKeyhole size={14} /><span>Your information stays private and secure.</span></div>
      </div>
      <p className="login-footer">Need help accessing your account? <button type="button" onClick={() => window.alert('Please contact your district health coordinator.')}>Contact support</button></p>
    </section>
  </main>
}
