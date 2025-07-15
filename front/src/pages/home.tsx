import { CheckCircle, Upload, Brain, Calendar, BarChart3, FileText, Bell } from "lucide-react"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">MeetingMind</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#roadmap" className="text-gray-600 hover:text-gray-900 transition-colors">
              Roadmap
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <Link to="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 mb-4">
            🚀 Now in Development - MVP Coming Soon
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Meetings with <span className="text-blue-600">AI Intelligence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Automatically transcribe, summarize, and manage your meeting outcomes. Never miss a task or deadline again
            with our AI-powered meeting coach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/waitlist" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-md transition-colors">
              Join Waitlist
            </Link>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 text-lg px-8 py-3 rounded-md transition-colors bg-transparent">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need for Productive Meetings</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From transcription to task management, our AI handles the heavy lifting so you can focus on what matters
              most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
              <Upload className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Upload & Transcription</h3>
              <p className="text-gray-600">
                Upload audio or video files and get accurate AI-powered transcriptions using advanced speech
                recognition.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
              <Brain className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Generated Summaries</h3>
              <p className="text-gray-600">
                Automatically generate structured summaries with action items, deadlines, and responsible parties.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
              <Bell className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Automated Follow-ups</h3>
              <p className="text-gray-600">
                Send automatic email reminders and track task completion with intelligent notifications.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
              <Calendar className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Scheduling</h3>
              <p className="text-gray-600">
                Integrate with calendars to automatically schedule follow-up meetings based on availability.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
              <FileText className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Platform Export</h3>
              <p className="text-gray-600">
                Export to Google Drive, Notion, Slack, Jira, and more. Keep your workflow seamless.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
              <BarChart3 className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics & Insights</h3>
              <p className="text-gray-600">
                Track meeting productivity, task completion rates, and team performance with detailed reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section id="roadmap" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Development Roadmap</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our 16-sprint journey from MVP to full-featured AI meeting assistant
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* MVP */}
            <div className="border-2 border-blue-200 bg-blue-50 rounded-lg p-6">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white text-sm px-2 py-1 rounded mb-2">MVP</span>
                <h3 className="text-xl font-semibold text-blue-900">Sprints 1-4</h3>
                <p className="text-blue-700">Core Foundation</p>
              </div>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Upload & Transcription
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  AI Summaries & Tasks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Email Follow-ups
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  PDF Export
                </li>
              </ul>
            </div>

            {/* Version 1 */}
            <div className="border-2 border-green-200 bg-green-50 rounded-lg p-6">
              <div className="mb-4">
                <span className="inline-block bg-green-600 text-white text-sm px-2 py-1 rounded mb-2">Version 1</span>
                <h3 className="text-xl font-semibold text-green-900">Sprints 5-8</h3>
                <p className="text-green-700">Enhanced Integration</p>
              </div>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Google Drive Integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Delivery Tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Visual Timeline
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Notion & Docs Export
                </li>
              </ul>
            </div>

            {/* Version 2 */}
            <div className="border-2 border-purple-200 bg-purple-50 rounded-lg p-6">
              <div className="mb-4">
                <span className="inline-block bg-purple-600 text-white text-sm px-2 py-1 rounded mb-2">Version 2</span>
                <h3 className="text-xl font-semibold text-purple-900">Sprints 9-12</h3>
                <p className="text-purple-700">Smart Automation</p>
              </div>
              <ul className="space-y-2 text-sm text-purple-800">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Calendar Integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Auto Scheduling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Multi-platform Support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Task Dashboard
                </li>
              </ul>
            </div>

            {/* Version 3 */}
            <div className="border-2 border-orange-200 bg-orange-50 rounded-lg p-6">
              <div className="mb-4">
                <span className="inline-block bg-orange-600 text-white text-sm px-2 py-1 rounded mb-2">Version 3</span>
                <h3 className="text-xl font-semibold text-orange-900">Sprints 13-16</h3>
                <p className="text-orange-700">Enterprise Ready</p>
              </div>
              <ul className="space-y-2 text-sm text-orange-800">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Browser Extension
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Slack/Jira Integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Advanced Analytics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Mobile App & White Label
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your team size and needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 hover:border-blue-200 transition-colors rounded-lg p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mt-4">$29</div>
                <p className="text-gray-600">per month</p>
              </div>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Up to 10 meetings/month
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Basic transcription & summaries
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Email follow-ups
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  PDF export
                </li>
              </ul>
              <Link to="/waitlist" className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 py-2 px-4 rounded-md transition-colors bg-transparent">
                Join Waitlist
              </Link>
            </div>

            <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm px-3 py-1 rounded">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Professional</h3>
                <div className="text-4xl font-bold text-gray-900 mt-4">$79</div>
                <p className="text-gray-600">per month</p>
              </div>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Unlimited meetings
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Advanced AI features
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Calendar integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  All integrations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Analytics dashboard
                </li>
              </ul>
              <Link to="/waitlist" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
                Join Waitlist
              </Link>
            </div>

            <div className="bg-white border-2 hover:border-purple-200 transition-colors rounded-lg p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-900 mt-4">Custom</div>
                <p className="text-gray-600">contact us</p>
              </div>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  White-label solution
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Custom integrations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Dedicated support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  On-premise deployment
                </li>
              </ul>
              <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 py-2 px-4 rounded-md transition-colors bg-transparent">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Meetings?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our waitlist and be among the first to experience the future of meeting management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/waitlist" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 rounded-md transition-colors">
              Join Waitlist
            </Link>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 rounded-md transition-colors bg-transparent">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">MeetingMind</span>
              </div>
              <p className="text-gray-400">Transforming meetings with AI intelligence.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <Link to="/roadmap" className="hover:text-white transition-colors">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/terms-of-use" className="hover:text-white transition-colors">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MeetingMind. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
