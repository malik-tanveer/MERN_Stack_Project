const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 sm:p-6 font-inter">
      
      <div className="bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 max-w-md w-full text-center transform transition-all duration-300 hover:scale-105 animate-fadeIn">
        <h1 className="text-7xl md:text-8xl font-extrabold text-blue-400 mb-4 tracking-tight">
          404
        </h1>
        
        <div className="mb-6 flex justify-center">
          <svg
            className="w-24 h-24 text-blue-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-3">
          Oops! Page Not Found.
        </h2>
        
        {/* Descriptive paragraph */}
        {/* Text color remains light for readability on the dark card background */}
        <p className="text-base text-gray-300 leading-relaxed mb-8">
          We're sorry, the page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        {/* Actionable buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="/" // Link to your homepage
            // Adjusted primary button colors to be a vibrant blue, similar to the "Explore Courses" button in the image
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Go to Homepage
          </a>
          <a
            href="/search" // Link to your search page or another relevant page
            // Adjusted secondary button colors to fit the very dark theme, using a dark gray background with blue text and border
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-300 text-base font-medium rounded-full text-blue-300 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Search
          </a>
        </div>
      </div>
    </div>
  )
}

export default NotFound
