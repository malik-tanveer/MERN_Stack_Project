import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
              <li><Link to="/help" className="hover:text-blue-500">Help</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Courses</h4>
            <ul className="space-y-1">
              <li><Link to="/dashboard" className="hover:text-blue-500">Explore Dashboard</Link></li>
              <li><Link to="/cards" className="hover:text-blue-500">All Courses</Link></li>
              <li><Link to="/form" className="hover:text-blue-500">Enroll Now</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Contact Info</h4>
            <p>Email: <a href="mailto: youloos477@gmail.com" className="hover:text-blue-500">youloos477@gmail.com</a></p>
            <p>Phone: <a href="tel:+3257048768" className="hover:text-blue-500">+92 3257048768</a></p>
          </div>
        </div>

        <div className="text-center text-xs py-4 border-t dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">
            © 2025 Mini LMS. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer;
