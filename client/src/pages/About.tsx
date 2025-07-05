// import { AiFillRocket } from "react-icons/ai";
// import {
//   FiBookOpen,
//   FiGlobe,
//   FiUser,
//   FiLayers,
//   FiTarget,
//   // FiRocket,
//   FiSettings,
// } from "react-icons/fi"; // Added more icons

// const About = () => {
//   return (
//     <div className="bg-gray-950 text-white min-h-screen py-20 px-6 md:px-24 space-y-20 font-sans">
//       {/* Page Heading */}
//       <header className="text-center">
//         <FiBookOpen className="text-blue-500 text-5xl mx-auto mb-4" />
//         <h1 className="text-5xl font-bold mb-4">About LMS</h1>
//         <p className="text-gray-400 max-w-3xl mx-auto text-lg">
//           Learn deeply, build confidently, and grow endlessly — all in one free
//           platform.
//         </p>
//       </header>

//       <hr className="border-gray-800" />

//       {/* What is LMS? Section */}
//       <section>
//         <h2 className="text-3xl font-bold text-blue-400 mb-4 flex items-center">
//           <FiGlobe className="mr-3 text-blue-500" /> What is LMS?
//         </h2>
//         <p className="text-gray-300 text-lg leading-8">
//           LMS is a powerful, free, and community-driven Learning
//           Management System built specifically for self-taught developers,
//           students, and career switchers. Unlike traditional platforms filled
//           with distractions, login barriers, or expensive subscriptions,
//           LMS focuses on practical, structured, and modern education —
//           accessible to anyone with an internet connection.
//         </p>
//         <p className="text-gray-400 text-lg leading-7 mt-4">
//           We don't just offer videos; we offer learning paths. Whether you want
//           to become a full-stack developer, master DSA with TypeScript, or
//           explore tools like MongoDB and Firebase — we’ve got it mapped out for
//           you. Everything is free. No login. No ad traps. Just you and your
//           learning journey.
//         </p>
//       </section>

//       <hr className="border-gray-800" />

//       {/* Who Created This? Section */}
//       <section>
//         <h2 className="text-3xl font-bold text-blue-400 mb-4 flex items-center">
//           <FiUser className="mr-3 text-blue-500" /> Who Created This?
//         </h2>
//         <p className="text-gray-300 text-lg leading-8">
//           Hi, I’m Tanveer — a self-taught full-stack developer and DSA
//           enthusiast who believes that tech education should be free and
//           focused. I started this platform after struggling for years to find
//           clear, well-organized resources. From randomly jumping between YouTube
//           videos to following incomplete tutorials, I’ve been through all the
//           chaos.
//         </p>
//         <p className="text-gray-400 text-lg leading-7 mt-4">
//           This LMS is my personal initiative to solve those problems for
//           others. Everything on this platform is curated, structured, and
//           personally reviewed — whether it's a TypeScript course or a backend
//           form project. I know how hard it is when you're starting from zero. So
//           I’ve built this platform to feel like a roadmap with a teacher —
//           guiding you step-by-step.
//         </p>
//       </section>

//       <hr className="border-gray-800" />

//       {/* About LMS (Detailed) Section */}
//       <section>
//         <h2 className="text-3xl font-bold text-blue-400 mb-4 flex items-center">
//           <FiLayers className="mr-3 text-blue-500" /> About LMS
//         </h2>
//         <p className="text-gray-300 text-lg leading-8">
//           LMS is more than just a website — it's a vision for digital
//           education. It combines the flexibility of self-learning with the
//           structure of a guided course. You won’t find cluttered content, popup
//           ads, or scattered topics here. Instead, you get:
//         </p>
//         <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2 text-lg">
//           <li>💡 Clear learning paths</li>
//           <li>🎯 Goal-based roadmaps</li>
//           <li>🔄 Continuously updated content</li>
//           <li>🧩 Real-world projects</li>
//           <li>🚫 No login, no tracking</li>
//         </ul>
//         <p className="text-gray-400 text-lg leading-7 mt-4">
//           Whether you’re looking to build your first React app, explore backend
//           with Node.js, or master TypeScript DSA — you’ll find all the tools,
//           resources, and structure you need.
//         </p>
//       </section>

//       <hr className="border-gray-800" />

//       {/* Our Mission Section */}
//       <section>
//         <h2 className="text-3xl font-bold text-blue-400 mb-4 flex items-center">
//           <FiTarget className="mr-3 text-blue-500" /> Our Mission
//         </h2>
//         <p className="text-gray-300 text-lg leading-8">
//           “To make high-quality, modern, and practical tech education
//           accessible to everyone — completely free, structured, and
//           distraction-free.”
//         </p>
//         <p className="text-gray-400 text-lg leading-7 mt-4">
//           We aim to bridge the gap between curiosity and career. Education
//           shouldn’t be gated behind paywalls, ads, or complex signups. If
//           someone wants to learn, they should have instant access.
//         </p>
//         <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2 text-lg">
//           <li>🧠 Educate: Teach the core principles with depth.</li>
//           <li>🛠️ Enable: Equip learners with real-world projects.</li>
//           <li>🚀 Empower: Guide them into jobs, internships, or freelance careers.</li>
//         </ul>
//       </section>

//       <hr className="border-gray-800" />

//       {/* Our Vision Section */}
//       <section>
//         <h2 className="text-3xl font-bold text-blue-400 mb-4 flex items-center">
//           <AiFillRocket className="mr-3 text-blue-500" /> Our Vision
//         </h2>
//         <p className="text-gray-300 text-lg leading-8">
//           We envision a future where:
//         </p>
//         <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2 text-lg">
//           <li>
//             Every student, regardless of background, can access structured tech
//             education.
//           </li>
//           <li>
//             No learner is forced to spend hours finding the “right video” on
//             YouTube.
//           </li>
//           <li>Real-world skills become more accessible than ever before — for free.</li>
//         </ul>
//         <p className="text-gray-400 text-lg leading-7 mt-4">
//           Our long-term roadmap includes:
//         </p>
//         <ul className="list-disc list-inside text-gray-400 mt-2 space-y-2 text-lg">
//           <li>🎓 Certificate generation for verified learning</li>
//           <li>📱 Native mobile apps for iOS and Android</li>
//           <li>🤝 Community Q&A and feedback platform</li>
//           <li>🧑‍🏫 Instructor-led bootcamps (free)</li>
//           <li>🌍 Multi-language content including Urdu & Hindi</li>
//         </ul>
//       </section>

//       <hr className="border-gray-800" />

//       {/* How It Works Section */}
//       <section>
//         <h2 className="text-3xl font-bold text-blue-400 mb-4 flex items-center">
//           <FiSettings className="mr-3 text-blue-500" /> How It Works
//         </h2>
//         <p className="text-gray-300 text-lg leading-8">
//           Learning on LMS is simple, fast, and free. Here’s how it
//           works:
//         </p>
//         <ol className="list-decimal list-inside text-gray-400 mt-4 space-y-2 text-lg">
//           <li>Visit the Dashboard to choose your learning track.</li>
//           <li>Fill a short learner form to unlock access (no login required).</li>
//           <li>Get access to curated videos, notes, projects, and GitHub code.</li>
//           <li>Follow structured paths from basics to advanced.</li>
//           <li>Revisit anytime — content stays free and open.</li>
//         </ol>
//         <p className="text-gray-400 text-lg leading-7 mt-4">
//           Learn what you want, how you want. Anytime.
//         </p>
//       </section>

//       <hr className="border-gray-800" />

//       {/* Our Commitment Section */}
//       <section>
//         <h2 className="text-3xl font-bold text-blue-400 mb-4 flex items-center">
//           Our Commitment
//         </h2>
//         <p className="text-gray-300 text-lg leading-8">
//           Tanveer LMS will always be free, focused, and open to all. We promise
//           to:
//         </p>
//         <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2 text-lg">
//           <li>Keep the UI clean and distraction-free</li>
//           <li>Update content with the latest technologies</li>
//           <li>Never collect personal data</li>
//           <li>Never lock learning behind paywalls</li>
//           <li>Listen to learners and evolve the platform</li>
//         </ul>
//         <p className="text-gray-400 text-lg leading-7 mt-4">
//           Built by a learner, for learners. Always free. Always focused.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default About;

import {
  FaBook,
  FaUserTie,
  FaGraduationCap,
  FaCogs,
  FaBullseye,
  FaHandshake,
} from "react-icons/fa";
import mission from '../assets/goal-achievement.png'


const About = () => {
  return (
    <div className="bg-gray-950 text-white font-sans px-6 md:px-24 py-20 space-y-24 ">

      {/* Page Header */}
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold">About  LMS</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Learn deeply, build confidently, and grow endlessly — all in one free platform.
        </p>
      </header>

      {/* Part 1 */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-400 flex items-center gap-2 mb-4">
            <FaGraduationCap />What is LMS?
          </h2>
          <p className="text-gray-300 leading-8 text-lg">
            LMS is a free Learning Management System designed for developers, students, and self-learners. It delivers curated videos, real-world projects, and structured paths with no login or distractions.
          </p>
        </div>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/online-learning-platform-7294196-5957652.png"
          alt="LMS Visual"
          className="md:w-1/2 w-full rounded-lg shadow-lg"
        />
      </section>
      <hr className="border-gray-700" />

      {/* Part 2 */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-400 flex items-center gap-2 mb-4">
            <FaUserTie /> Who Created This?
          </h2>
          <p className="text-gray-300 leading-8 text-lg">
            I’m Tanveer — a full-stack developer and DSA mentor. I created this platform to offer the guidance I never had. Everything here is hand-picked, verified, and structured to save you time and confusion.
          </p>
        </div>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/software-developer-3674977-3069524.png"
          alt="Developer"
          className="md:w-1/2 w-full rounded-lg shadow-lg"
        />
      </section>
      <hr className="border-gray-700" />

      {/* Part 3 */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-400 flex items-center gap-2 mb-4">
            <FaBook /> About LMS
          </h2>
          <p className="text-gray-300 text-lg leading-8">
            The LMS is not just a list of videos. It’s a complete roadmap with:
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2 text-lg">
            <li>Real projects with GitHub integration</li>
            <li>No ads or fees</li>
            <li>Structured topic-based playlists</li>
          </ul>
        </div>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/elearning-5039539-4207920.png"
          alt="About LMS"
          className="md:w-1/2 w-full rounded-lg shadow-lg"
        />
      </section>
      <hr className="border-gray-700" />

      {/* Part 4 */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-400 flex items-center gap-2 mb-4">
            <FaBullseye /> Our Mission
          </h2>
          <p className="text-gray-300 text-lg leading-8">
            We aim to provide free and quality education to everyone.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2 text-lg">
            <li>Support deep learning, not just fast skimming</li>
            <li>Prepare students for real-world tech jobs</li>
            <li>Bridge the gap between tutorials and confidence</li>
          </ul>
        </div>
        <img
          src={mission}
          alt="Mission"
          className="md:w-1/2 w-full rounded-lg shadow-lg"
        />
      </section>
      <hr className="border-gray-700" />

      {/* Part 5 */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-400 flex items-center gap-2 mb-4">
            <FaGraduationCap /> Our Vision
          </h2>
          <p className="text-gray-300 text-lg leading-8">
            We want to see a world where any learner can become a developer — completely for free.
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2 text-lg">
            <li>Certification programs (coming soon)</li>
            <li>Offline learning & mobile support</li>
            <li>Multilingual content support</li>
          </ul>
        </div>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/vision-5827660-4862395.png"
          alt="Vision"
          className="md:w-1/2 w-full rounded-lg shadow-lg"
        />
      </section>
      <hr className="border-gray-700" />

      {/* Part 6 */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-400 flex items-center gap-2 mb-4">
            <FaCogs /> How It Works
          </h2>
          <ol className="list-decimal list-inside text-gray-400 mt-4 space-y-2 text-lg">
            <li>Open the Dashboard</li>
            <li>Choose your path (Frontend, Backend, DSA)</li>
            <li>Fill out a simple learner form</li>
            <li>Access your course directly, no login required</li>
          </ol>
        </div>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/workflow-4708033-3920842.png"
          alt="How it works"
          className="md:w-1/2 w-full rounded-lg shadow-lg"
        />
      </section>
      <hr className="border-gray-700" />

      {/* Part 7 */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-400 flex items-center gap-2 mb-4">
            <FaHandshake /> Our Commitment
          </h2>
          <p className="text-gray-300 text-lg leading-8">
            LMS is learner-first — always. We are committed to:
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2 text-lg">
            <li>Keeping it 100% free forever</li>
            <li>Never using ads or trackers</li>
            <li>Updating courses monthly</li>
            <li>Listening and improving from your feedback</li>
          </ul>
        </div>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-5782191-4850973.png"
          alt="Commitment"
          className="md:w-1/2 w-full rounded-lg shadow-lg"
        />
      </section>
    </div>
  );
};

export default About;