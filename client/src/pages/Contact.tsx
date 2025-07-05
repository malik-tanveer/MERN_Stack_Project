import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaQuestionCircle } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="min-h-screen bg-slate-900 font-inter text-slate-100 p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <header className="bg-slate-800 shadow-md rounded-lg p-4 mb-6 flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold text-teal-400">
            Contact UniLearn LMS Support
          </h1>
        </header>

        {/* Main Content Area */}
        <main className="bg-slate-800 shadow-lg rounded-lg p-6 sm:p-8 lg:p-10">

          {/* Introduction */}
          <p className="mb-8 text-lg sm:text-xl text-slate-200 leading-relaxed text-center">
            Have questions, feedback, or need assistance? We're here to help! Choose the contact method that works best for you.
          </p>

          {/* Contact Methods Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

            {/* Email Support Card */}
            <div className="bg-slate-700 rounded-lg shadow-lg p-6 border border-slate-600 text-center hover:shadow-xl transition-shadow duration-300">
              <FaEnvelope className="text-teal-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold text-teal-300 mb-3">Email Support</h3>
              <p className="text-slate-200 mb-4 leading-relaxed">
                For general inquiries, technical issues, or feedback, send us an email. We aim to respond within 24-48 business hours.
              </p>
              <a
                href="mailto:support@unilearnlms.com"
                className="inline-block bg-teal-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-teal-700 transition-colors duration-300 shadow-md"
              >
                Send an Email
              </a>
            </div>

            {/* Phone Support Card (Optional) */}
            <div className="bg-slate-700 rounded-lg shadow-lg p-6 border border-slate-600 text-center hover:shadow-xl transition-shadow duration-300">
              <FaPhone className="text-teal-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold text-teal-300 mb-3">Phone Support</h3>
              <p className="text-slate-200 mb-4 leading-relaxed">
                For urgent matters, you can reach our support team during business hours.
                <br />
                <span className="font-bold">[Your Phone Number Here]</span>
              </p>
              <a
                href="tel:[Your Phone Number Here]"
                className="inline-block bg-teal-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-teal-700 transition-colors duration-300 shadow-md"
              >
                Call Us
              </a>
            </div>

            {/* FAQ / Help Center Card */}
            <div className="bg-slate-700 rounded-lg shadow-lg p-6 border border-slate-600 text-center hover:shadow-xl transition-shadow duration-300">
              <FaQuestionCircle className="text-teal-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold text-teal-300 mb-3">Visit Our Help Center</h3>
              <p className="text-slate-200 mb-4 leading-relaxed">
                Find answers to common questions and detailed guides in our comprehensive Help Center.
              </p>
              {/* This link would ideally go to your Help.tsx page */}
              <a
                href="#" // Replace with actual link to your Help Page
                className="inline-block bg-teal-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-teal-700 transition-colors duration-300 shadow-md"
              >
                Go to Help Center
              </a>
            </div>

          </section>

          {/* Contact Form Section */}
          <section className="bg-slate-700 rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 border border-slate-600">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-6 text-center">Send Us a Message</h2>
            <form className="space-y-6 max-w-2xl mx-auto">
              <div>
                <label htmlFor="name" className="block text-slate-200 text-lg font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 rounded-md bg-slate-600 border border-slate-500 text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-200 text-lg font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 rounded-md bg-slate-600 border border-slate-500 text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-slate-200 text-lg font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-3 rounded-md bg-slate-600 border border-slate-500 text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Briefly describe your inquiry"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-200 text-lg font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full p-3 rounded-md bg-slate-600 border border-slate-500 text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-y"
                  placeholder="Type your detailed message here..."
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-700 text-white py-3 px-10 rounded-md font-bold text-lg hover:bg-blue-800 transition-colors duration-300 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </section>

          {/* Optional: Physical Address Section */}
          <section className="mt-10 p-6 bg-slate-700 rounded-lg border border-slate-600 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-4">Our Location</h2>
            <FaMapMarkerAlt className="text-teal-400 text-4xl mx-auto mb-3" />
            <p className="text-slate-200 leading-relaxed">
              [Your Company Name/UniLearn LMS Office]
              <br />
              [Street Address Line 1]
              <br />
              [City, State/Province, Zip/Postal Code]
              <br />
              [Country]
            </p>
          </section>

        </main>
      </div>
    </>
  )
}

export default Contact;
