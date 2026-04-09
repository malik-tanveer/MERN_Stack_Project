import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo2.png" alt="logo" className="h-10 w-10" />
            <h2 className="text-xl font-semibold text-gray-900">FutureStack</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Build your future with modern tech skills. Learn, grow and explore
            with our powerful learning platform.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-title">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
            <li><Link to="/help" className="footer-link">Help</Link></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="footer-title">Courses</h4>
          <ul className="space-y-2">
            <li><Link to="/dashboard" className="footer-link">Dashboard</Link></li>
            <li><Link to="/more-course" className="footer-link">All Courses</Link></li>
            <li><Link to="/signup" className="footer-link">Get Started</Link></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="footer-title">Connect</h4>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <FiMail />
            <a
              href="mailto:mtanveerdev.33@gmail.com"
              className="footer-link"
            >
              mtanveerdev.33@gmail.com
            </a>
          </div>

          <div className="flex gap-4 mt-3">
            <a
              href="https://github.com/malik/tanveer"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
            >
              <FiGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/malik-tanveer-9a1b4b1b3/"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 py-4 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} FutureStack. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;