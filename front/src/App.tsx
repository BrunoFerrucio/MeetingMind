import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/home'
import DashboardIndex from './pages/dashboard'
import WaitlistPage from './pages/waitlist-page'
import TermsPage from './pages/terms'
import PrivacyPolicyPage from './pages/terms/privacy-policy'
import AboutPage from './pages/about'
import RoadmapPage from './pages/roadmap'
import PricingPage from './pages/pricing'
import FeaturesPage from './pages/features'
import SignInPage from './pages/user/sign-in'
import Register from './pages/user/register'
import DashboardHome from './pages/dashboard/pages/home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/terms-of-use" element={<TermsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<DashboardIndex />}>
          <Route index element={<div>Profile Page</div>} />
        </Route>

        <Route path="/dashboard" element={<DashboardIndex />}>
          <Route index element={<DashboardHome />} /> {/* Página inicial do Dashboard */}
          <Route path="calendar" element={<div>Meeting Page</div>} />
          <Route path="integrations" element={<div>Integrations Page</div>} />
          <Route path="settings" element={<div>Settings Page</div>} />
        </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
