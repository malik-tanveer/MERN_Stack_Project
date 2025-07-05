import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons for mobile menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 left-0 w-full z-50 shadow-md h-15">
      <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-900">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
            FutureStack
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 focus:outline-none">
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
            Contact
          </Link>
          <Link to="/help" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors">
            Help
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">

          <Link
            to="/dashboard"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Explore Dashboard
          </Link>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 pt-2 pb-4 shadow-lg">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            to="/help"
            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
            onClick={toggleMenu}
          >
            Help
          </Link>
          <Link
            to="/dashboard"
            className="mt-4 block bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Explore Dashboard
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;