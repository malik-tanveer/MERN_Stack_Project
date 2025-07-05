import { Link } from "react-router-dom";
import { FaRocket, FaCheckCircle, FaYoutube, FaLock, FaUserShield, FaGlobe, FaLaptopCode, FaQuoteLeft, FaStar, FaUnlockAlt, FaEye, FaWpforms, FaSignInAlt } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { SiTypescript, SiMongodb, SiFirebase, SiTailwindcss, SiGithub, SiReact, SiHtml5, SiJavascript, SiNodedotjs, SiPython, SiFigma } from "react-icons/si";

const Home = () => {
  return (
    <div className="bg-gray-950 text-white font-sans">

      {/* 1️⃣ Hero Section */}
      <section className="py-32 px-6 md:px-24 text-center bg-gradient-to-br from-black via-gray-900 to-gray-950">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
          Your Tech Career with <span className="text-blue-500">LMS ( Learning Managment System )</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Learn full-stack development, master DSA, explore design, automate with Python, and deploy with GitHub — all in one powerful free platform.
        </p>
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md transition"
        >
          <FaRocket className="text-white" />
          Start Learning Now
        </Link>
      </section>

      {/* 2️⃣ What is LMS */}
      <section className="bg-gray-900 py-24 px-6 md:px-24 text-center">
        <h2 className="text-4xl font-bold mb-6 flex justify-center items-center gap-3">
          <MdSchool size={30} /> What is LMS?
        </h2>
        <p className="text-gray-300 max-w-4xl mx-auto text-lg">
          A free, structured and distraction-free learning platform for aspiring developers.
          Learn TypeScript, MongoDB, APIs, GitHub, React Projects, and more — hand-curated by  .
        </p>
      </section>

      {/* 3️⃣ Why Choose Us */}
      <section className="bg-gray-950 py-24 px-6 md:px-24">
        <h2 className="text-4xl font-bold text-center mb-14">Why Choose LMS?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            [<FaCheckCircle />, "Structured Roadmaps", "Topic-wise journeys from beginner to advanced."],
            [<FaYoutube />, "Curated YouTube Content", "Best tutorials hand-picked for you."],
            [<FaUserShield />, "Admin Verified", "Content reviewed and updated regularly."],
            [<FaLock />, "No Login Required", "Just open the LMS and start learning instantly."],
            [<FaGlobe />, "100% Free Access", "No fees. No subscriptions. Always free."],
            [<FaLaptopCode />, "Project-Based Learning", "Learn by building real-world apps."]
          ].map(([icon, title, desc], i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl">
              <div className="text-blue-400 text-2xl mb-3">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4️⃣ Technologies */}
      <section className="bg-gray-900 py-24 px-6 md:px-24">
        <h2 className="text-4xl font-bold text-center mb-10">Technologies You’ll Learn</h2>
        <div className="flex flex-wrap justify-center gap-4 text-center">
          {[
            { icon: SiHtml5, label: "HTML5" },
            { icon: SiJavascript, label: "JavaScript" },
            { icon: SiTypescript, label: "TypeScript" },
            { icon: SiReact, label: "React.js" },
            { icon: SiTailwindcss, label: "Tailwind CSS" },
            { icon: SiMongodb, label: "MongoDB" },
            { icon: SiNodedotjs, label: "Node.js" },
            { icon: SiFirebase, label: "Firebase" },
            { icon: SiGithub, label: "Git & GitHub" },
            { icon: SiPython, label: "Python" }
          ].map(({ icon: Icon, label }, i) => (
            <div
              key={i}
              className="bg-gray-800 px-6 py-3 rounded-full text-sm border border-gray-700 flex items-center gap-2 hover:bg-gray-700"
            >
              <Icon className="text-blue-400" />
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* 5️⃣ Popular Courses */}
      <section className="bg-gray-950 py-28 px-6 md:px-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Popular Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Full Stack Web Dev (MERN)",
              icon: <FaLaptopCode className="text-green-400 text-3xl" />,
            },
            {
              title: "DSA with TypeScript",
              icon: <SiTypescript className="text-blue-400 text-3xl" />,
            },
            {
              title: "React + Tailwind Projects",
              icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
            },
            {
              title: "MongoDB Deep Dive",
              icon: <SiMongodb className="text-green-500 text-3xl" />,
            },
            {
              title: "Firebase Auth & DB",
              icon: <SiFirebase className="text-yellow-400 text-3xl" />,
            },
            {
              title: "Python for Automation",
              icon: <SiPython className="text-blue-300 text-3xl" />,
            },
            {
              title: "CI/CD with GitHub",
              icon: <SiGithub className="text-white text-3xl" />,
            },
            {
              title: "Design with Figma",
              icon: <SiFigma className="text-pink-400 text-3xl" />,
            },
            {
              title: "Advanced JavaScript",
              icon: <SiJavascript className="text-yellow-300 text-3xl" />,
            },
          ].map(({ title, icon }, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:scale-105 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {icon}
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Real-world examples, step-by-step videos, and lifetime access.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900 py-24 px-6 md:px-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image Preview */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1607706189992-eae578626c86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww"   // replace with correct URL
              alt="Developer typing code on laptop in dark room"
              className="rounded-lg shadow-lg border border-gray-700"
            />


          </div>

          {/* Content Block */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Learning in Action</h2>
            <p className="text-gray-300 text-lg mb-6">
              Work with real code while learning. From designing clean UIs with Tailwind CSS to deploying full-stack apps using React, Firebase, and MongoDB — Tanveer LMS gives you hands-on experience.
            </p>

            <div className="bg-gray-800 text-green-400 font-mono text-sm p-4 rounded-lg overflow-auto border border-gray-700">
              <code>
                {`function Enroll(course: string) {
  console.log("Enrolled in:", course);
  return fetch("/api/enroll", {
    method: "POST",
    body: JSON.stringify({ course }),
  });
}

Enroll("MERN Stack Development");`}
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ How It Works */}
      <section className="bg-gray-900 py-24 px-6 md:px-24 text-center">
        <h2 className="text-4xl font-bold mb-14">How It Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaSignInAlt className="text-3xl text-green-400 mb-4" />,
              title: "Open Dashboard",
              desc: "Access your dashboard with a single click — no login needed."
            },
            {
              icon: <FaWpforms className="text-3xl text-green-400 mb-4" />,
              title: "Fill Learning Form",
              desc: "Submit your learning preferences in seconds."
            },
            {
              icon: <FaEye className="text-3xl text-green-400 mb-4" />,
              title: "View Courses Instantly",
              desc: "Instant access to your full learning path."
            },
            {
              icon: <FaUnlockAlt className="text-3xl text-green-400 mb-4" />,
              title: "No Barriers",
              desc: "100% free, no signup or hidden walls."
            },
            {
              icon: <FaRocket className="text-3xl text-green-400 mb-4" />,
              title: "Start Learning",
              desc: "Begin your journey to tech mastery — fast and free!"
            }
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-md hover:shadow-lg transition"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <Link
          to="/dashboard"
          className="mt-14 inline-block bg-green-600 hover:bg-green-700 px-10 py-4 rounded-md text-lg font-semibold text-white"
        >
          Go to Dashboard
        </Link>
      </section>

      {/* 7️⃣ Testimonials */}
      <section className="bg-gray-950 py-24 px-6 md:px-24 text-center">
        <h2 className="text-4xl font-bold mb-10">Student Feedback</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            ["Ali", "This LMS made learning DSA so simple!", 5],
            ["Ayesha", "I loved the UI and how everything is organized.", 4],
            ["Zaid", "Project-based learning changed the game for me.", 5]
          ].map(([name, review, stars], i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-md hover:shadow-lg transition">
              <FaQuoteLeft className="text-gray-500 mb-3 text-xl" />
              <p className="text-gray-200 mb-4 text-base leading-relaxed">“{review}”</p>

              {/* Star Ratings */}
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: stars as number }, (_, idx) => (
                  <FaStar key={idx} className="text-yellow-400" />
                ))}
              </div>

              <h4 className="text-gray-400 text-sm font-medium">— {name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 8️⃣ Final CTA */}
      <section className="bg-gray-900 py-24 px-6 md:px-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Your career starts here — explore all courses, learn new skills, and build your future.
        </p>
        <Link
          to="/explore"
          className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-md text-lg text-white inline-flex items-center gap-2"
        >
          <FaRocket /> Explore Courses
        </Link>
      </section>
    </div>
  );
};

export default Home;