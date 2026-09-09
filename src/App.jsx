import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import AppShell from './components/AppShell'
import FacilitiesPage from './pages/FacilitiesPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import OverviewPage from './pages/OverviewPage'
import PatientsPage from './pages/PatientsPage'
import ProfilePage from './pages/ProfilePage'
import ReferralsPage from './pages/ReferralsPage'
import ReportsPage from './pages/ReportsPage'

export default function App() {
  return <Routes><Route path="login" element={<LoginPage />} /><Route element={<AppShell />}><Route index element={<OverviewPage />} /><Route path="patients" element={<PatientsPage />} /><Route path="profile" element={<ProfilePage />} /><Route path="referrals" element={<ReferralsPage />} /><Route path="facilities" element={<FacilitiesPage />} /><Route path="reports" element={<ReportsPage />} /><Route path="not-found" element={<NotFoundPage />} /><Route path="*" element={<Navigate to="/not-found" replace />} /></Route></Routes>
}
