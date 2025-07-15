import {
  Brain,
  Upload,
  FileText,
  Bell,
  Calendar,
  BarChart3,
  Users,
  Shield,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">MeetingMind</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-blue-600 font-medium">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link to="/roadmap" className="text-gray-600 hover:text-gray-900 transition-colors">
              Roadmap
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link to="/waitlist">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                Join Waitlist
              </button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for <span className="text-blue-600">Smarter Meetings</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how MeetingMind's AI-powered features transform your meetings from time-wasters into productivity
            boosters. Every feature is designed to save you time and keep your team aligned.
          </p>
        </div>

        {/* Core Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Core Features</h2>

          {/* Feature 1 - Upload & Transcription */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Upload className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-semibold text-gray-900">Smart Upload & Transcription</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Upload any audio or video file and get accurate, AI-powered transcriptions in minutes. Our advanced
                speech recognition works with multiple languages and accents.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Supports 50+ file formats (MP4, MP3, WAV, MOV, etc.)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">95%+ accuracy with advanced noise reduction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Multi-language support (English, Spanish, Portuguese, etc.)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Speaker identification and timestamps</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">meeting-recording.mp4</h4>
                  <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">Transcribing...</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2 mb-4">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
                <p className="text-sm text-gray-600">Processing: 2:30 / 3:20 minutes</p>
              </div>
            </div>
          </div>

          {/* Feature 2 - AI Summaries */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="bg-green-50 rounded-lg p-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Meeting Summary</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Key Decisions</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Approved Q4 marketing budget increase</li>
                        <li>• Selected new project management tool</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Action Items</h5>
                      <div className="space-y-2">
                        <div className="bg-yellow-50 p-2 rounded text-sm">
                          <strong>Sarah:</strong> Prepare budget proposal by Friday
                        </div>
                        <div className="bg-blue-50 p-2 rounded text-sm">
                          <strong>Mike:</strong> Research tool integrations by Monday
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-semibold text-gray-900">AI-Generated Summaries</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Transform lengthy meeting recordings into structured, actionable summaries. Our AI identifies key
                decisions, action items, and important discussions automatically.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Automatic extraction of key points and decisions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Action items with assigned owners and deadlines</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Sentiment analysis and engagement metrics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Customizable summary templates</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 - Automated Follow-ups */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Bell className="h-8 w-8 text-orange-600" />
                <h3 className="text-2xl font-semibold text-gray-900">Automated Follow-ups</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Never let action items fall through the cracks. Our intelligent follow-up system sends personalized
                reminders and tracks progress automatically.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Smart reminder scheduling based on deadlines</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Personalized email templates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Progress tracking and completion status</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Escalation rules for overdue tasks</span>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 rounded-lg p-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Follow-up Email</h4>
                <div className="bg-gray-50 rounded p-4 text-sm">
                  <div className="mb-3">
                    <span className="font-medium">To:</span> sarah@company.com
                    <br />
                    <span className="font-medium">Subject:</span> Reminder: Budget Proposal Due Tomorrow
                  </div>
                  <div className="text-gray-700">
                    <p>Hi Sarah,</p>
                    <p className="mt-2">This is a friendly reminder about your action item:</p>
                    <div className="bg-white border-l-4 border-orange-500 p-3 my-3">
                      <strong>Task:</strong> Prepare Q4 marketing budget proposal
                      <br />
                      <strong>Due:</strong> Tomorrow, Jan 20, 2024
                    </div>
                    <p>Need help? Reply to this email.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Advanced Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Calendar Integration */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Calendar className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Scheduling</h3>
              <p className="text-gray-600 mb-4">
                Automatically schedule follow-up meetings based on team availability and action item deadlines.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Google Calendar & Outlook integration</li>
                <li>• Automatic meeting scheduling</li>
                <li>• Availability conflict detection</li>
                <li>• Meeting link generation</li>
              </ul>
            </div>

            {/* Multi-Platform Export */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <FileText className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Platform Export</h3>
              <p className="text-gray-600 mb-4">
                Export your meeting summaries to your favorite productivity tools and keep your workflow seamless.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Google Drive & Docs</li>
                <li>• Notion & Obsidian</li>
                <li>• Slack & Microsoft Teams</li>
                <li>• Jira & Trello integration</li>
              </ul>
            </div>

            {/* Analytics */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <BarChart3 className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics & Insights</h3>
              <p className="text-gray-600 mb-4">
                Get detailed insights into your team's meeting productivity and task completion rates.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Meeting efficiency metrics</li>
                <li>• Task completion tracking</li>
                <li>• Team performance insights</li>
                <li>• Custom reporting dashboards</li>
              </ul>
            </div>

            {/* Team Collaboration */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Collaboration</h3>
              <p className="text-gray-600 mb-4">
                Enable seamless collaboration with shared workspaces and real-time updates.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Shared team workspaces</li>
                <li>• Real-time collaboration</li>
                <li>• Comment and annotation system</li>
                <li>• Role-based permissions</li>
              </ul>
            </div>

            {/* Security */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600 mb-4">
                Bank-level security with end-to-end encryption and compliance with industry standards.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• AES-256 encryption</li>
                <li>• SOC 2 Type II compliance</li>
                <li>• GDPR & CCPA compliant</li>
                <li>• Single Sign-On (SSO)</li>
              </ul>
            </div>

            {/* Global Access */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Globe className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Accessibility</h3>
              <p className="text-gray-600 mb-4">
                Work from anywhere with cloud-based access and multi-language support.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cloud-based platform</li>
                <li>• Mobile app support</li>
                <li>• 20+ language support</li>
                <li>• Offline mode capabilities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Perfect for Every Team</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Sales Teams</h3>
              <p className="text-blue-800 mb-4">
                Never miss a follow-up with prospects. Track commitments and automate next steps.
              </p>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• Client call summaries</li>
                <li>• Deal progression tracking</li>
                <li>• Automated follow-ups</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Project Management</h3>
              <p className="text-green-800 mb-4">
                Keep projects on track with clear action items and deadline management.
              </p>
              <ul className="space-y-1 text-sm text-green-700">
                <li>• Sprint planning summaries</li>
                <li>• Task assignment tracking</li>
                <li>• Progress monitoring</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Executive Leadership</h3>
              <p className="text-purple-800 mb-4">
                Make informed decisions with comprehensive meeting insights and analytics.
              </p>
              <ul className="space-y-1 text-sm text-purple-700">
                <li>• Board meeting summaries</li>
                <li>• Strategic decision tracking</li>
                <li>• Performance analytics</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">HR & Recruiting</h3>
              <p className="text-orange-800 mb-4">
                Streamline interviews and onboarding with detailed candidate assessments.
              </p>
              <ul className="space-y-1 text-sm text-orange-700">
                <li>• Interview summaries</li>
                <li>• Candidate evaluation</li>
                <li>• Onboarding tracking</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-900 mb-3">Customer Success</h3>
              <p className="text-red-800 mb-4">
                Improve customer relationships with detailed interaction history and follow-ups.
              </p>
              <ul className="space-y-1 text-sm text-red-700">
                <li>• Customer call logs</li>
                <li>• Issue resolution tracking</li>
                <li>• Relationship management</li>
              </ul>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-indigo-900 mb-3">Consulting</h3>
              <p className="text-indigo-800 mb-4">
                Deliver better client outcomes with comprehensive meeting documentation.
              </p>
              <ul className="space-y-1 text-sm text-indigo-700">
                <li>• Client consultation logs</li>
                <li>• Deliverable tracking</li>
                <li>• Billing documentation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-600 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience These Features?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already transforming their meetings with MeetingMind's powerful AI features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/waitlist">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-colors text-lg">
                Join Waitlist
              </button>
            </Link>
            <Link to="/pricing">
              <button className="border border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-md transition-colors text-lg bg-transparent flex items-center">
                View Pricing <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
