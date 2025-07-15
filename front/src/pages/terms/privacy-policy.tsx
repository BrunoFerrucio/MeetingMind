import { Shield, Eye, Lock, Database, Mail } from "lucide-react"
import HomeHeader from "../../components/ui/header-home"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <HomeHeader />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last updated: January 15, 2024</p>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">Your Privacy Matters</h2>
          <p className="text-blue-800">
            At MeetingMind, we take your privacy seriously. This policy explains how we collect, use, and protect your
            information when you use our AI-powered meeting management platform.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Database className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Information</h3>
                  <p className="text-gray-600">
                    When you create an account, we collect your name, email address, company information, and other
                    details you provide during registration.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Meeting Data</h3>
                  <p className="text-gray-600">
                    We process audio/video recordings, transcriptions, and meeting summaries that you upload or generate
                    through our platform. This data is encrypted and stored securely.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Usage Information</h3>
                  <p className="text-gray-600">
                    We collect information about how you use our service, including features accessed, time spent, and
                    interaction patterns to improve our platform.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-semibold text-gray-900">How We Use Your Information</h2>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Provide and improve our AI-powered meeting management services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Generate transcriptions, summaries, and action items from your meetings</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Send automated follow-ups and notifications as requested</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Analyze usage patterns to enhance our AI algorithms and user experience</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Communicate with you about your account and our services</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Data Security & Protection</h2>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Encryption</h3>
                  <p className="text-gray-600">
                    All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Your meeting
                    recordings and transcriptions are stored in encrypted databases.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Access Controls</h3>
                  <p className="text-gray-600">
                    We implement strict access controls and authentication measures. Only authorized personnel can
                    access your data, and all access is logged and monitored.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Retention</h3>
                  <p className="text-gray-600">
                    We retain your data only as long as necessary to provide our services. You can delete your data at
                    any time through your account settings.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="h-6 w-6 text-orange-600" />
                <h2 className="text-2xl font-semibold text-gray-900">Information Sharing</h2>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information only in the following circumstances:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>With your explicit consent</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      With trusted service providers who help us operate our platform (under strict confidentiality
                      agreements)
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>When required by law or to protect our rights and safety</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-gray-600 mb-4">You have the following rights regarding your personal information:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Access & Portability</h3>
                    <p className="text-gray-600 text-sm">Request a copy of your personal data</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Correction</h3>
                    <p className="text-gray-600 text-sm">Update or correct your information</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Deletion</h3>
                    <p className="text-gray-600 text-sm">Request deletion of your data</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">Opt-out</h3>
                    <p className="text-gray-600 text-sm">Unsubscribe from communications</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies & Tracking</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-gray-600 mb-4">
                  We use cookies and similar technologies to enhance your experience and analyze usage patterns. You can
                  control cookie settings through your browser preferences.
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <strong>Essential Cookies:</strong> Required for basic functionality
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Analytics Cookies:</strong> Help us understand how you use our service
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Preference Cookies:</strong> Remember your settings and preferences
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Email:</strong> privacy@meetingmind.com
                  </p>
                  <p>
                    <strong>Address:</strong> MeetingMind Inc., 123 Tech Street, San Francisco, CA 94105
                  </p>
                  <p>
                    <strong>Data Protection Officer:</strong> dpo@meetingmind.com
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            This Privacy Policy is effective as of January 15, 2024. We may update this policy from time to time, and we
            will notify you of any significant changes.
          </p>
        </div>
      </div>
    </div>
  )
}
