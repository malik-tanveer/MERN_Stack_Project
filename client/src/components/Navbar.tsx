import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo2.png"
            alt="logo"
            className="h-16 w-16 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
          <Link className="nav-link" to="/help">Help</Link>
        </div>

        {/* Right Side Button */}
        <div className="hidden md:block">
          <Link
            to="/dashboard"
            className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-5 py-2 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800"
        >
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 pb-5 bg-white border-t border-gray-200 shadow-lg">

          <Link onClick={() => setIsOpen(false)} className="mobile-link" to="/">
            Home
          </Link>
          <Link onClick={() => setIsOpen(false)} className="mobile-link" to="/about">
            About
          </Link>
          <Link onClick={() => setIsOpen(false)} className="mobile-link" to="/contact">
            Contact
          </Link>
          <Link onClick={() => setIsOpen(false)} className="mobile-link" to="/help">
            Help
          </Link>

          <Link
            to="/dashboard"
            onClick={() => setIsOpen(false)}
            className="mt-4 block text-center bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;