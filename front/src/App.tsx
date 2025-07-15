import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/home'
import DashboardIndex from './pages/dashboard'
import WaitlistPage from './pages/waitlist-page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} index />
        <Route path="/dashboard" element={<DashboardIndex />} index />
        <Route path="/waitlist" element={<WaitlistPage />} index />
      </Routes>
    </BrowserRouter>
  )
}

export default App
