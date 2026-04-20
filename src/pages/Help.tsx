const Help = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 font-inter text-gray-900 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <header className="bg-white shadow-md rounded-xl p-6 mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">
          Help Center: Getting Started with UniLearn LMS
        </h1>
      </header>

      {/* Main */}
      <main className="bg-white shadow-lg rounded-xl p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row">

        <div className="md:w-3/4">

          {/* Intro */}
          <p className="mb-8 text-lg sm:text-xl text-gray-600 leading-relaxed">
            Welcome to UniLearn LMS! This guide will help you quickly navigate and utilize our platform for an optimal learning experience.
          </p>

          {/* Dashboard */}
          <section className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              2. Dashboard Overview
            </h2>

            <div className="space-y-4 text-gray-600">

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Understanding Your Dashboard</h3>
                <p>
                  Your dashboard is your central hub for all your courses and activities. It typically displays a summary of your enrolled courses, upcoming assignments, and recent announcements.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Accessing Your Courses</h3>
                <p>
                  All your active courses will be listed on your dashboard. Simply click on a course card or title to enter that course.
                </p>
              </div>

            </div>
          </section>

          {/* Course Navigation */}
          <section className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              3. Navigating a Course
            </h2>

            <div className="space-y-4 text-gray-600">

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Course Homepage Explained</h3>
                <p>
                  Each course has its own homepage, which provides an overview of the course, including syllabus, instructor information, and quick links.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Accessing Course Materials</h3>
                <p>
                  Course materials are organized in modules. Click modules to access lectures and resources.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Understanding Modules</h3>
                <p>
                  Courses are structured into modules representing topics or weeks.
                </p>
              </div>

            </div>
          </section>

          {/* Communication */}
          <section className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              6. Communicating with Instructors & Peers
            </h2>

            <div className="space-y-4 text-gray-600">

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Emailing Instructor</h3>
                <p>
                  Always use professional tone when emailing instructors.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Group Activities</h3>
                <p>
                  LMS provides tools for collaboration like group chats and file sharing.
                </p>
              </div>

            </div>
          </section>

          {/* FAQ */}
          <section className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              9. Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-4 text-gray-600">

              <div>
                <h3 className="font-semibold text-gray-800">Q: Deadlines?</h3>
                <p>A: Check dashboard or course calendar.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Q: Mobile access?</h3>
                <p>A: Yes, fully responsive LMS.</p>
              </div>

            </div>
          </section>

          {/* Support */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              10. Contacting Support
            </h2>

            <p className="text-gray-600 mb-2">
              Contact support only for technical issues.
            </p>

            <p className="text-red-500 font-semibold">
              Do not contact support for course content questions.
            </p>
          </section>

        </div>
      </main>

      {/* Footer Info */}
      <section className="mt-10 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">
          Key Considerations
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Search functionality must be added</li>
          <li>Use simple language</li>
          <li>Keep UI mobile friendly</li>
          <li>Update content regularly</li>
        </ul>
      </section>

    </div>
  );
};

export default Help;