import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeHeader() {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">MeetingMind</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </Link>
          <Link to="/roadmap" className="text-gray-600 hover:text-gray-900 transition-colors">
            Roadmap
          </Link>
          <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
            Pricing
          </Link>
          <Link to="/sign-in" className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-2xl transition-colors">
            Login
          </Link>
          <Link to="/register" className="bg-blue-600 text-white border border-blue-600 hover:bg-white hover:text-blue-600 px-4 py-2 rounded-2xl transition-colors">
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};