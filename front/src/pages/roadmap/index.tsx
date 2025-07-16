import { CheckCircle, Clock, Zap, Calendar, Users, Smartphone, Globe, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import HomeHeader from "../../components/layout/header-home"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <HomeHeader />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Development <span className="text-blue-600">Roadmap</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow our journey from MVP to enterprise-ready AI meeting assistant. We're building in public and shipping
            fast. Here's what's coming next.
          </p>
        </div>

        {/* Current Status */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-blue-900">Current Development Status</h2>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">Sprint 3 of 16</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
              <p className="text-blue-800">MVP Progress</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2,500+</div>
              <p className="text-blue-800">Waitlist Members</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">Q2 2024</div>
              <p className="text-blue-800">Expected Launch</p>
            </div>
          </div>

          <div className="w-full bg-blue-200 rounded-full h-3">
            <div className="bg-blue-600 h-3 rounded-full" style={{ width: "75%" }}></div>
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">16-Sprint Development Journey</h2>

          {/* MVP Phase */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold mr-4">MVP</div>
              <h3 className="text-2xl font-bold text-gray-900">Sprints 1-4: Foundation</h3>
              <span className="ml-auto text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded">In Progress</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Sprint 1</h4>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <h5 className="font-medium text-gray-800 mb-2">Setup & Base</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Repository setup</li>
                  <li>• CI/CD pipeline</li>
                  <li>• Database setup</li>
                  <li>• Authentication</li>
                  <li>• Basic onboarding</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Sprint 2</h4>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <h5 className="font-medium text-gray-800 mb-2">Upload & Transcription</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• File upload interface</li>
                  <li>• S3/Firebase storage</li>
                  <li>• Processing queue</li>
                  <li>• Whisper integration</li>
                  <li>• Transcription display</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Sprint 3</h4>
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <h5 className="font-medium text-gray-800 mb-2">AI Summaries</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• GPT-4 integration</li>
                  <li>• Summary generation</li>
                  <li>• Action item extraction</li>
                  <li>• Speaker identification</li>
                  <li>• Summary interface</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gray-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Sprint 4</h4>
                  <Clock className="h-5 w-5 text-gray-400" />
                </div>
                <h5 className="font-medium text-gray-800 mb-2">Follow-up & Export</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Email automation</li>
                  <li>• Email templates</li>
                  <li>• PDF/Word export</li>
                  <li>• Meeting history</li>
                  <li>• End-to-end testing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Version 1 Phase */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <div className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold mr-4">V1</div>
              <h3 className="text-2xl font-bold text-gray-900">Sprints 5-8: Enhanced Integration</h3>
              <span className="ml-auto text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded">Planned</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gray-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Sprint 5</h4>
                  <Clock className="h-5 w-5 text-gray-400" />
                </div>
                <h5 className="font-medium text-gray-800 mb-2">Google Drive Integration</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• OAuth Google Drive</li>
                  <li>• Drive authorization</li>
                  <li>• Document export</li>
                  <li>• Sharing confirmation</li>
                  <li>• WhatsApp integration</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gray-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Sprint 6</h4>
                  <Clock className="h-5 w-5 text-gray-400" />
                </div>
                <h5 className="font-medium text-gray-800 mb-2">Delivery Tracking</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Task monitoring</li>
                  <li>• Reminder system</li>
                  <li>• Auto-escalation</li>
                  <li>• Notification logs</li>
                  <li>• Status tracking</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gray-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Sprint 7</h4>
                  <Clock className="h-5 w-5 text-gray-400" />
                </div>
                <h5 className="font-medium text-gray-800 mb-2">Visual Timeline</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Video thumbnails</li>
                  <li>• Timestamp markers</li>
                  <li>• Timeline interface</li>
                  <li>• Visual exports</li>
                  <li>• Screenshot capture</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gray-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Sprint 8</h4>
                  <Clock className="h-5 w-5 text-gray-400" />
                </div>
                <h5 className="font-medium text-gray-800 mb-2">Multi-Platform Export</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Notion API integration</li>
                  <li>• Google Docs export</li>
                  <li>• Word document export</li>
                  <li>• Integration management</li>
                  <li>• Export templates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Version 2 Phase */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <div className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold mr-4">V2</div>
              <h3 className="text-2xl font-bold text-gray-900">Sprints 9-12: Smart Automation</h3>
              <span className="ml-auto text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded">Future</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gray-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Sprint 9</h4>
                  <Calendar className="h-5 w-5 text-purple-600" />
                </div>
                <h5 className="font-medium text-gray-800 mb-2">Calendar Integration</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Google Calendar OAuth</li>
                  <li>• Outlook integration</li>
                  <li>• Availability checking</li>
                  <li>• Slot suggestions</li>
                  <li>• Conflict detection</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gray-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Sprint 10</h4>
                  <Zap className="h-5 w-5 text-purple-600" />
                </div>
                <h5 className="font-medium text-gray-800 mb-2">Auto Scheduling</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Meeting suggestions</li>
                  <li>• Auto-booking</li>
                  <li>• Meet/Zoom links</li>
                  <li>• Invite automation</li>
                  <li>• Confirmation system</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gray-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Sprint 11</h4>
                  <Smartphone className="h-5 w-5 text-purple-600" />
                </div>
                <h5 className="font-medium text-gray-800 mb-2">Multi-Platform Support</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• WhatsApp recording</li>
                  <li>• FaceTime support</li>
                  <li>• External audio upload</li>
                  <li>• Meeting type tracking</li>
                  <li>• Format optimization</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gray-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Sprint 12</h4>
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <h5 className="font-medium text-gray-800 mb-2">Task Dashboard</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Personal task view</li>
                  <li>• Status filters</li>
                  <li>• Push notifications</li>
                  <li>• Team statistics</li>
                  <li>• Performance metrics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Version 3 Phase */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 text-white px-4 py-2 rounded-full font-semibold mr-4">V3</div>
              <h3 className="text-2xl font-bold text-gray-900">Sprints 13-16: Enterprise Ready</h3>
              <span className="ml-auto text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded">Future</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gray-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Sprint 13</h4>
                  <Globe className="h-5 w-5 text-orange-600" />
                </div>
                <h5 className="font-medium text-gray-800 mb-2">Browser Extension</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Chrome extension</li>
                  <li>• Meet/Zoom capture</li>
                  <li>• Auto-recording</li>
                  <li>• S3 integration</li>
                  <li>• Background processing</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gray-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Sprint 14</h4>
                  <Users className="h-5 w-5 text-orange-600" />
                </div>
                <h5 className="font-medium text-gray-800 mb-2">Team Integrations</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Slack API integration</li>
                  <li>• Channel notifications</li>
                  <li>• Jira task creation</li>
                  <li>• Trello board sync</li>
                  <li>• Integration testing</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gray-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Sprint 15</h4>
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                </div>
                <h5 className="font-medium text-gray-800 mb-2">Analytics & Reports</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Weekly reports</li>
                  <li>• Performance rankings</li>
                  <li>• Delivery metrics</li>
                  <li>• Custom dashboards</li>
                  <li>• Export capabilities</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gray-300">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Sprint 16</h4>
                  <Smartphone className="h-5 w-5 text-orange-600" />
                </div>
                <h5 className="font-medium text-gray-800 mb-2">Mobile & White Label</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• React Native app</li>
                  <li>• Push notifications</li>
                  <li>• Brand customization</li>
                  <li>• Agency dashboard</li>
                  <li>• Multi-tenant support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Milestones */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Milestones</h2>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 bg-white rounded-lg shadow-sm p-6">
              <div className="bg-blue-100 rounded-full p-3">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">MVP Launch</h3>
                <p className="text-gray-600">Core transcription and summary features ready for beta users</p>
              </div>
              <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded">Q2 2024</span>
            </div>

            <div className="flex items-center space-x-4 bg-white rounded-lg shadow-sm p-6">
              <div className="bg-green-100 rounded-full p-3">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Version 1 Release</h3>
                <p className="text-gray-600">Enhanced integrations and automated follow-up system</p>
              </div>
              <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded">Q3 2024</span>
            </div>

            <div className="flex items-center space-x-4 bg-white rounded-lg shadow-sm p-6">
              <div className="bg-purple-100 rounded-full p-3">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Version 2 Launch</h3>
                <p className="text-gray-600">Smart scheduling and multi-platform support</p>
              </div>
              <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded">Q4 2024</span>
            </div>

            <div className="flex items-center space-x-4 bg-white rounded-lg shadow-sm p-6">
              <div className="bg-orange-100 rounded-full p-3">
                <Globe className="h-6 w-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Enterprise Version</h3>
                <p className="text-gray-600">Full enterprise features with mobile app and white-label options</p>
              </div>
              <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded">Q1 2025</span>
            </div>
          </div>
        </div>

        {/* Community Feedback */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Community-Driven Development</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Voice Shapes Our Product</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're building MeetingMind with our community. Join our waitlist to get early access, provide feedback,
                and help us prioritize features that matter most to you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Beta Testing</h4>
                <p className="text-gray-600 text-sm">
                  Get early access to new features and help us test before public release
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Feature Requests</h4>
                <p className="text-gray-600 text-sm">Suggest new features and vote on what should be built next</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Priority Access</h4>
                <p className="text-gray-600 text-sm">Be first to try new features and get exclusive updates</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-600 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Be Part of Our Journey</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our waitlist to get early access, influence our roadmap, and be among the first to experience the
            future of AI-powered meeting management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/waitlist">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-colors text-lg">
                Join Waitlist
              </button>
            </Link>
            <Link to="/features">
              <button className="border border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-md transition-colors text-lg bg-transparent flex items-center">
                Explore Features <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
