import { Brain, FileText, AlertTriangle, Scale, Shield, Users } from "lucide-react"
import { Link } from "react-router-dom"

export default function TermsPage() {
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
            <Link to="/#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link to="/#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link to="/waitlist">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                Join Waitlist
              </button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Use</h1>
          <p className="text-lg text-gray-600">Last updated: January 15, 2024</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h2>
              <p className="text-yellow-700">
                By accessing or using MeetingMind, you agree to be bound by these Terms of Use. Please read them
                carefully before using our service.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Acceptance of Terms</h2>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-600 mb-4">
                These Terms of Use ("Terms") constitute a legally binding agreement between you and MeetingMind Inc.
                ("Company," "we," "us," or "our") regarding your use of the MeetingMind platform and services.
              </p>
              <p className="text-gray-600">
                By creating an account, accessing our website, or using our services, you acknowledge that you have
                read, understood, and agree to be bound by these Terms and our Privacy Policy.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Users className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Service Description</h2>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-600 mb-4">
                MeetingMind is an AI-powered meeting management platform that provides:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Automated transcription of audio and video recordings</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>AI-generated meeting summaries and action items</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Automated follow-up and task tracking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Integration with productivity tools and calendars</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Accounts and Responsibilities</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Creation</h3>
                <p className="text-gray-600">
                  You must provide accurate, current, and complete information when creating your account. You are
                  responsible for maintaining the confidentiality of your account credentials.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Acceptable Use</h3>
                <p className="text-gray-600 mb-2">
                  You agree to use our service only for lawful purposes and in accordance with these Terms. You will
                  not:
                </p>
                <ul className="space-y-1 text-gray-600 text-sm ml-4">
                  <li>• Upload content that violates any laws or third-party rights</li>
                  <li>• Attempt to gain unauthorized access to our systems</li>
                  <li>• Use our service to spam or send unsolicited communications</li>
                  <li>• Reverse engineer or attempt to extract our AI algorithms</li>
                  <li>• Share your account credentials with unauthorized users</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Data and Privacy</h2>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Content</h3>
                <p className="text-gray-600">
                  You retain ownership of all content you upload to our platform. By using our service, you grant us a
                  limited license to process your content to provide our AI-powered features.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consent for Recording Processing</h3>
                <p className="text-gray-600">
                  You represent that you have obtained all necessary consents from meeting participants before uploading
                  recordings to our platform. You are responsible for compliance with applicable recording laws.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Security</h3>
                <p className="text-gray-600">
                  We implement industry-standard security measures to protect your data. However, no system is 100%
                  secure, and you use our service at your own risk.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Subscription and Payment</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Subscription Plans</h3>
                <p className="text-gray-600">
                  Our service is offered through various subscription plans. Pricing and features are subject to change
                  with reasonable notice.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Terms</h3>
                <p className="text-gray-600">
                  Subscriptions are billed in advance on a monthly or annual basis. All fees are non-refundable except
                  as required by law or as specified in our refund policy.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cancellation</h3>
                <p className="text-gray-600">
                  You may cancel your subscription at any time through your account settings. Cancellation will take
                  effect at the end of your current billing period.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-600 mb-4">
                The MeetingMind platform, including all software, algorithms, designs, and content, is protected by
                intellectual property laws and is owned by MeetingMind Inc. or our licensors.
              </p>
              <p className="text-gray-600">
                You may not copy, modify, distribute, or create derivative works based on our platform without our
                express written permission.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimers and Limitations</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Availability</h3>
                <p className="text-gray-600">
                  We strive to maintain high service availability but do not guarantee uninterrupted access. We may
                  perform maintenance or updates that temporarily affect service availability.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Accuracy</h3>
                <p className="text-gray-600">
                  While our AI technology is advanced, transcriptions and summaries may contain errors. You should
                  review and verify all AI-generated content before relying on it for important decisions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Limitation of Liability</h3>
                <p className="text-gray-600">
                  To the maximum extent permitted by law, MeetingMind shall not be liable for any indirect, incidental,
                  special, or consequential damages arising from your use of our service.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your account immediately, without prior notice, if you breach these Terms or
                engage in conduct that we determine is harmful to our service or other users.
              </p>
              <p className="text-gray-600">
                Upon termination, your right to use the service will cease immediately, and we may delete your account
                and data in accordance with our data retention policies.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-600">
                We reserve the right to modify these Terms at any time. We will notify you of significant changes via
                email or through our platform. Your continued use of the service after such modifications constitutes
                acceptance of the updated Terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Email:</strong> legal@meetingmind.com
                </p>
                <p>
                  <strong>Address:</strong> MeetingMind Inc., 123 Tech Street, San Francisco, CA 94105
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            These Terms of Use are effective as of January 15, 2024. By using MeetingMind, you acknowledge that you have
            read and understood these terms.
          </p>
        </div>
      </div>
    </div>
  )
}
