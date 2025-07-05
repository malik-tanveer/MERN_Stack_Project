const Help = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-900 font-inter text-slate-100 p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <header className="bg-slate-800 shadow-md rounded-lg p-4 mb-6 flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold text-teal-400">
            Help Center: Getting Started with UniLearn LMS
          </h1>
          {/* Optional: Search bar can be uncommented and styled later */}
          {/* <input
          type="text"
          placeholder="Search help topics..."
          className="p-2 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-700 text-slate-100"
        /> */}
        </header>

        {/* Main Content Area - now a flex container for two columns on medium screens and up */}
        <main className="bg-slate-800 shadow-lg rounded-lg p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row">
          {/* 
        
        {/* Right Column: Detailed Sections */}
          <div className="md:w-3/4">
            {/* Introduction */}
            <p className="mb-8 text-lg sm:text-xl text-slate-200 leading-relaxed">
              Welcome to UniLearn LMS! This guide will help you quickly navigate and utilize our platform for an optimal learning experience.
            </p>

            {/* 1. Logging In & Account Basics */}
            <section id="logging-in" className="mb-8 pb-6 border-b border-slate-700">
              <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-4">1. Logging In & Account Basics</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">First-Time Login</h3>
                  <p className="text-slate-200">
                    You should have received an email with your initial login credentials (username and temporary password). If you haven't, please check your spam folder or contact <span className="font-semibold">[Support Email/Number]</span>.
                  </p>
                  <p className="text-slate-200 mt-2">
                    Go to <a href="#" className="text-teal-300 hover:underline hover:text-teal-100">[Your LMS Login URL]</a>. Enter your provided username and password. You will be prompted to change your password upon your first successful login. Choose a strong password that you can remember.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Forgot Password?</h3>
                  <p className="text-slate-200">
                    Click on the "Forgot Password?" link on the login page. Enter your registered email address or username. An email with instructions to reset your password will be sent to you. Follow the steps in the email.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Updating Your Profile</h3>
                  <p className="text-slate-200">
                    Once logged in, click on your profile picture or name in the top right corner. Select "Profile Settings" or "Edit Profile." Here you can update your name, email, profile picture, time zone, and other personal information. Remember to click "Save Changes."
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Dashboard Overview */}
            <section id="dashboard-overview" className="mb-8 pb-6 border-b border-slate-700">
              <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-4">2. Dashboard Overview</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Understanding Your Dashboard</h3>
                  <p className="text-slate-200">
                    Your dashboard is your central hub for all your courses and activities. It typically displays a summary of your enrolled courses, upcoming assignments, and recent announcements.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Accessing Your Courses</h3>
                  <p className="text-slate-200">
                    All your active courses will be listed on your dashboard. Simply click on a course card or title to enter that course.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Notifications and Announcements</h3>
                  <p className="text-slate-200">
                    Keep an eye on the notification bell icon or the announcements section on your dashboard for important updates from your instructors or the LMS administration.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Navigating a Course */}
            <section id="navigating-course" className="mb-8 pb-6 border-b border-slate-700">
              <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-4">3. Navigating a Course</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Course Homepage Explained</h3>
                  <p className="text-slate-200">
                    Each course has its own homepage, which provides an overview of the course, including the syllabus, instructor information, and quick links to modules or recent activities.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Accessing Course Materials (Lectures, Readings, Videos)</h3>
                  <p className="text-slate-200">
                    Course materials are typically organized within modules or units. Click on the relevant module to access lectures, readings, videos, and other resources.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Understanding Modules and Units</h3>
                  <p className="text-slate-200">
                    Courses are often structured into modules or units, representing different topics or weeks. Complete activities within each module sequentially as guided by your instructor.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Tracking Your Progress</h3>
                  <p className="text-slate-200">
                    Many courses have a progress tracker (e.g., a checklist or progress bar) that shows your completion status for each module or activity.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Submitting Assignments & Quizzes */}
            <section id="submitting-assignments" className="mb-8 pb-6 border-b border-slate-700">
              <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-4">4. Submitting Assignments & Quizzes</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">How to Submit Text-Based Assignments</h3>
                  <p className="text-slate-200">
                    For text-based assignments, click on the assignment link, then look for a text box to type or paste your submission. Click "Submit" when finished.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Uploading Files for Assignments</h3>
                  <p className="text-slate-200">
                    To upload a file (e.g., a document, presentation, or image), click on the assignment link and look for an "Upload File" or "Browse" button. Select your file and then click "Submit."
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Taking Online Quizzes/Exams</h3>
                  <p className="text-slate-200">
                    Click on the quiz/exam link. Read the instructions carefully, then click "Start Quiz" or "Attempt Quiz." Ensure you have a stable internet connection. Your progress may be saved automatically, but always check for a "Submit All and Finish" button.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Viewing Grades and Feedback</h3>
                  <p className="text-slate-200">
                    You can typically view your grades and instructor feedback in the "Grades" section of your course or directly on the assignment/quiz page after it has been graded.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Participating in Discussions */}
            <section id="participating-discussions" className="mb-8 pb-6 border-b border-slate-700">
              <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-4">5. Participating in Discussions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Accessing Discussion Forums</h3>
                  <p className="text-slate-200">
                    Within your course, look for a "Discussions" or "Forum" link in the course navigation menu. Clicking on this will take you to a list of available discussion topics.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Posting a New Topic</h3>
                  <p className="text-slate-200">
                    If enabled by your instructor, you can start a new discussion thread. Look for a button like "Add New Topic" or "Start a Discussion." Give your topic a clear subject line and type your message in the text editor. You may be able to attach files or embed media depending on the forum settings. Click "Post" or "Submit" to publish your topic.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Replying to Posts</h3>
                  <p className="text-slate-200">
                    To reply to an existing discussion post, click on the post you wish to respond to. Look for a "Reply" button or text box below the post. Type your response and click "Post Reply" or "Submit."
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Subscribing to Discussions</h3>
                  <p className="text-slate-200">
                    Some discussion forums allow you to "subscribe" to a topic or the entire forum. This means you will receive email notifications when new replies are posted. Look for a "Subscribe" button or option.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Communicating with Instructors & Peers */}
            <section id="communicating" className="mb-8 pb-6 border-b border-slate-700">
              <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-4">6. Communicating with Instructors & Peers</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Using the Messaging System</h3>
                  <p className="text-slate-200">
                    The LMS may have an internal messaging system. Look for an "Inbox" or "Messages" icon/link to send private messages to your instructor or classmates.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Emailing Your Instructor</h3>
                  <p className="text-slate-200">
                    Your instructor's email address might be available on the course homepage or syllabus. Always use a professional tone when emailing.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Participating in Group Activities</h3>
                  <p className="text-slate-200">
                    If your course involves group work, the LMS will provide tools for group collaboration, such as group discussion boards, file sharing, or wikis.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. Technical Requirements & Troubleshooting */}
            <section id="technical-requirements" className="mb-8 pb-6 border-b border-slate-700">
              <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-4">7. Technical Requirements & Troubleshooting</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Recommended Browsers</h3>
                  <p className="text-slate-200">
                    For the best experience, we recommend using the latest versions of Chrome, Firefox, Edge, or Safari.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Browser Settings (Pop-ups, Cookies)</h3>
                  <p className="text-slate-200">
                    Ensure pop-ups are enabled for [Your LMS URL] and that cookies are allowed. These are often necessary for certain features to function correctly.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Troubleshooting Common Issues (Videos not playing, file upload errors)</h3>
                  <ul className="list-disc list-inside text-slate-200 ml-4">
                    <li><span className="font-semibold">Videos not playing:</span> Try clearing your browser cache, checking your internet connection, or trying a different browser.</li>
                    <li><span className="font-semibold">File upload errors:</span> Check the file size limit and supported file types. Ensure your internet connection is stable.</li>
                    <li><span className="font-semibold">Page not loading:</span> Refresh the page. If the issue persists, clear your browser cache and cookies.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Supported File Types</h3>
                  <p className="text-slate-200">
                    Generally, the LMS supports common file types like .pdf, .doc/.docx, .ppt/.pptx, .xls/.xlsx, and common image/video formats. Specific assignments may have different requirements.
                  </p>
                </div>
              </div>
            </section>

            {/* 8. Accessibility Features */}
            <section id="accessibility-features" className="mb-8 pb-6 border-b border-slate-700">
              <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-4">8. Accessibility Features</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Adjusting Text Size</h3>
                  <p className="text-slate-200">
                    You can usually adjust text size using your browser's zoom settings (Ctrl + / Ctrl - or Cmd + / Cmd -).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Using Screen Readers</h3>
                  <p className="text-slate-200">
                    Our LMS is designed to be compatible with most standard screen reader software.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Keyboard Navigation</h3>
                  <p className="text-slate-200">
                    Most elements on the platform can be navigated using keyboard shortcuts (e.g., Tab key for focus, Enter/Space for selection).
                  </p>
                </div>
              </div>
            </section>

            {/* 9. Frequently Asked Questions (FAQs) */}
            <section id="faqs" className="mb-8 pb-6 border-b border-slate-700">
              <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-4">9. Frequently Asked Questions (FAQs)</h2>
              <div className="space-y-4">
                {/* Example FAQ 1 */}
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Q: How do I see my upcoming deadlines?</h3>
                  <p className="text-slate-200">
                    A: Upcoming deadlines are typically displayed on your dashboard in the "To-Do" list or "Upcoming Events" section. You can also check the course calendar within each course.
                  </p>
                </div>
                {/* Example FAQ 2 */}
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Q: Can I access the LMS on my mobile device?</h3>
                  <p className="text-slate-200">
                    A: Yes, UniLearn LMS is fully responsive and can be accessed via a web browser on your mobile device. We also offer a dedicated mobile app for iOS and Android, available on the App Store and Google Play.
                  </p>
                </div>
                {/* Add more FAQs specific to your LMS */}
              </div>
            </section>

            {/* 10. Contacting Support */}
            <section id="contacting-support" className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-4">10. Contacting Support</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">When to Contact Support</h3>
                  <p className="text-slate-200">
                    Contact support for technical issues (e.g., login problems, broken links, features not working as expected), error messages you don't understand, or platform-wide issues/outages.
                  </p>
                  <p className="text-red-400 font-semibold mt-2">
                    Do not contact support for course content questions, assignment deadlines, or grading inquiries. These should be directed to your instructor.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">How to Submit a Support Ticket</h3>
                  <p className="text-slate-200">
                    Click on the "Support" or "Help" link in the main navigation (usually at the top or bottom of the page). Fill out the support ticket form with as much detail as possible: your full name and email address, the course name and specific assignment/activity if applicable, a clear description of the issue, and any error messages you received. Screenshots are highly recommended!
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-100 mb-2">Response Times</h3>
                  <p className="text-slate-200">
                    Our support team aims to respond to all inquiries within <span className="font-semibold">[e.g., 24-48 business hours]</span>. Urgent issues may be prioritized.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Key Considerations - remains full width below the two columns */}
        <section className="mt-10 p-6 bg-blue-700 rounded-lg border border-blue-600 text-slate-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-200 mb-4">Key Considerations for Your LMS Help Page:</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-200">
            <li><span className="font-semibold">Search Functionality:</span> Ensure your help page has a robust search bar so users can quickly find answers.</li>
            <li><span className="font-semibold">Visual Aids:</span> Use screenshots, short videos, and clear diagrams to illustrate steps.</li>
            <li><span className="font-semibold">Plain Language:</span> Avoid jargon and technical terms where possible. Write clearly and concisely.</li>
            <li><span className="font-semibold">Mobile Responsiveness:</span> Make sure the help page is easily viewable and navigable on all devices.</li>
            <li><span className="font-semibold">Regular Updates:</span> Keep the help page updated with any new features, changes, or common issues.</li>
            <li><span className="font-semibold">Feedback Mechanism:</span> Consider adding a "Was this helpful?" rating or a comment section to gather feedback on the help topics themselves.</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default Help
