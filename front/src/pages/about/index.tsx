import { Brain, Target, Users, Lightbulb, Award, Globe } from "lucide-react"
import { Link } from "react-router-dom"

export default function AboutPage() {
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
            <Link to="/about" className="text-blue-600 font-medium">
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

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">MeetingMind</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing how teams manage meetings with AI-powered intelligence. Our mission is to make every
            meeting productive, actionable, and meaningful.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To eliminate the frustration of unproductive meetings by providing intelligent automation that captures,
              summarizes, and follows up on every important discussion. We believe that technology should enhance human
              collaboration, not complicate it.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <Lightbulb className="h-12 w-12 text-green-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              A world where every meeting is purposeful, every action item is tracked, and every team member stays
              aligned. We envision AI as the silent assistant that ensures nothing falls through the cracks and
              productivity soars.
            </p>
          </div>
        </div>

        {/* The Problem */}
        <div className="bg-red-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Problem We're Solving</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">67%</div>
              <p className="text-gray-700">of meetings lack clear outcomes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">40%</div>
              <p className="text-gray-700">of action items are forgotten</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">23B</div>
              <p className="text-gray-700">hours wasted in meetings annually</p>
            </div>
          </div>
        </div>

        {/* Our Solution */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Solution</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Capture</h3>
              <p className="text-gray-600 text-sm">AI transcribes and records every meeting automatically</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Analyze</h3>
              <p className="text-gray-600 text-sm">Smart summaries with action items and deadlines</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Track</h3>
              <p className="text-gray-600 text-sm">Automated follow-ups and progress monitoring</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Integrate</h3>
              <p className="text-gray-600 text-sm">Seamless connection with your existing tools</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Bruno Almeida</h3>
              <p className="text-blue-600 mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Former tech lead with 10+ years in AI and productivity tools. Passionate about solving real-world
                problems.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Bruno Almeida</h3>
              <p className="text-green-600 mb-3">CTO</p>
              <p className="text-gray-600 text-sm">
                AI researcher and full-stack developer. Expert in machine learning and natural language processing.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-purple-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Bruno Almeida</h3>
              <p className="text-purple-600 mb-3">Head of Product</p>
              <p className="text-gray-600 text-sm">
                UX designer and product strategist. Focused on creating intuitive experiences that users love.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">User-Centric</h3>
              <p className="text-gray-600 text-sm">Every decision is made with our users' needs in mind</p>
            </div>

            <div className="text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">We strive for the highest quality in everything we build</p>
            </div>

            <div className="text-center">
              <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600 text-sm">Open communication and honest feedback drive our growth</p>
            </div>

            <div className="text-center">
              <Lightbulb className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">We constantly push boundaries to solve complex problems</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-blue-600 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of the revolution that's transforming how teams collaborate and stay productive.
          </p>
          <Link to="/waitlist">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-colors text-lg">
              Join Our Waitlist
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
