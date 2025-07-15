import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/home'
import DashboardIndex from './pages/dashboard'
import WaitlistPage from './pages/waitlist-page'
import TermsPage from './pages/terms'
import PrivacyPolicyPage from './pages/terms/privacy-policy'
import AboutPage from './pages/about'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} index />
        <Route path="/dashboard" element={<DashboardIndex />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/terms-of-use" element={<TermsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
