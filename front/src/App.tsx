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
import { DashboardMeetingDetails } from './pages/dashboard/pages/meeting/details'
import DashboardMeeting from './pages/dashboard/pages/meeting'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
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

        {/* Protected Routes */}

        <Route path="/profile" element={<DashboardIndex />}>
          <Route index element={<div>Profile Page</div>} />
        </Route>

        <Route path="/dashboard" element={<DashboardIndex />}>
          <Route index                  element={<DashboardHome />} />

          <Route path="settings"        element={<div>Settings Page</div>} />
          <Route path="meetings"        element={<DashboardMeeting />} />

          <Route path="meetings/details/:id" element={<DashboardMeetingDetails />} />
        </Route>

        <Route path="/settings" element={<div>Settings Page</div>} />

        {/* Error Route */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
