import { Link } from "react-router-dom";
import { FaRocket, FaCheckCircle, FaYoutube, FaLock, FaUserShield, FaGlobe, FaLaptopCode } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { SiTypescript, SiMongodb, SiFirebase, SiTailwindcss, SiGithub, SiReact, SiHtml5, SiJavascript, SiNodedotjs, SiPython } from "react-icons/si";

const Home = () => {
return (
  <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 font-sans">

    {/* Hero */}
    <section className="py-32 px-6 md:px-24 text-center bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
        Your Tech Career with <span className="text-blue-900">LMS (Learning Management System)</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
        Learn full-stack development, master DSA, explore design, automate with Python, and deploy with GitHub — all in one powerful free platform.
      </p>

      <Link
        to="/dashboard"
        className="inline-flex items-center gap-3 bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg rounded-md transition"
      >
        <FaRocket />
        Start Learning Now
      </Link>
    </section>

    {/* What is LMS */}
    <section className="bg-white py-24 px-6 md:px-24 text-center">
      <h2 className="text-4xl font-bold mb-6 flex justify-center items-center gap-3">
        <MdSchool /> What is LMS?
      </h2>

      <p className="text-gray-600 max-w-4xl mx-auto text-lg">
        A free, structured and distraction-free learning platform for aspiring developers.
        Learn modern technologies with a clear roadmap and real-world projects.
      </p>
    </section>

    {/* Why Choose */}
    <section className="bg-gray-50 py-24 px-6 md:px-24">
      <h2 className="text-4xl font-bold text-center mb-14">Why Choose LMS?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          [<FaCheckCircle />, "Structured Roadmaps", "Topic-wise journeys from beginner to advanced."],
          [<FaYoutube />, "Curated Content", "Best tutorials hand-picked for you."],
          [<FaUserShield />, "Admin Verified", "Content reviewed regularly."],
          [<FaLock />, "No Login Required", "Start instantly."],
          [<FaGlobe />, "100% Free", "No subscriptions."],
          [<FaLaptopCode />, "Project-Based", "Build real apps."]
        ].map(([icon, title, desc], i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <div className="text-blue-600 text-2xl mb-3">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Technologies */}
    <section className="bg-white py-24 px-6 md:px-24">
      <h2 className="text-4xl font-bold text-center mb-10">Technologies You’ll Learn</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {[SiHtml5, SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiMongodb, SiNodedotjs, SiFirebase, SiGithub, SiPython].map((Icon, i) => (
          <div key={i} className="bg-white border border-gray-200 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100">
            <Icon className="text-blue-600" />
          </div>
        ))}
      </div>
    </section>

    {/* Popular */}
    <section className="bg-gray-50 py-28 px-6 md:px-24">
      <h2 className="text-4xl font-bold text-center mb-16">
        Popular Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          "Full Stack Web Dev",
          "DSA with TypeScript",
          "React Projects",
          "MongoDB",
          "Firebase",
          "Python Automation"
        ].map((title, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">
              Real-world examples and projects.
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-white py-24 px-6 md:px-24 text-center">
      <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>

      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Explore courses and start building your future today.
      </p>

      <Link
        to="/explore"
        className="bg-blue-900 hover:bg-blue-800 px-8 py-3 rounded-md text-lg text-white inline-flex items-center gap-2"
      >
        <FaRocket /> Explore Courses
      </Link>
    </section>

  </div>
)}

export default Home;