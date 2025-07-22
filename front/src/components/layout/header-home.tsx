import { Link } from "react-router-dom";
import { ButtonStyle } from "../ui/button";
import { CompanyName } from "../ui/logo";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

export default function HomeHeader() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <header className="bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl border-b border-white/30 sticky top-0 z-50 flex flex-col relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:blur-sm before:-z-10">
      <div className="container mx-auto px-4 py-4 flex flex-row items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/assets/logo/icon.png" alt="Company Logo" className="w-25 max-lg:w-15" />
          <CompanyName />
        </Link>

        <nav className="flex flex-row items-center gap-5 max-md:hidden">
          <Link to="/features" className="font-semibold text-gray-600  hover:text-[#291C84] transition-colors">
            Features
          </Link>
          <Link to="/roadmap" className="font-semibold text-gray-600  hover:text-[#291C84] transition-colors">
            Roadmap
          </Link>
          <Link to="/pricing" className="font-semibold text-gray-600  hover:text-[#291C84] transition-colors">
            Pricing
          </Link>
          <Link to="/sign-in" className={ButtonStyle("secondary")}>
            Login
          </Link>
          <Link to="/register" className={ButtonStyle("primary")}>
            Get Started
          </Link>
        </nav>

        <div className="flex items-center gap-2 min-md:hidden">
          {openDrawer ? <X
            className="w-6 h-6 text-gray-600 cursor-pointer"
            onClick={() => setOpenDrawer(false)}
          /> : <AlignJustify
            className="w-6 h-6 text-gray-600 cursor-pointer"
            onClick={() => setOpenDrawer(true)}
          />}
        </div>
      </div>

      {openDrawer && (
        <nav className="flex flex-col text-center space-y-4 mb-5 px-5 min-md:hidden">
          <Link to="/features" className="font-semibold text-gray-600 hover:text-[#291C84] transition-colors">
            Features
          </Link>
          <Link to="/roadmap" className="font-semibold text-gray-600 hover:text-[#291C84] transition-colors">
            Roadmap
          </Link>
          <Link to="/pricing" className="font-semibold text-gray-600 hover:text-[#291C84] transition-colors">
            Pricing
          </Link>
          <Link to="/sign-in" className={ButtonStyle("secondary")}>
            Login
          </Link>
          <Link to="/register" className={ButtonStyle("primary")}>
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
};