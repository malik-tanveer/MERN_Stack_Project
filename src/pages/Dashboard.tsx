import React, { useState } from "react";
import { Link } from "react-router-dom";


const featuredCourses = [
  {
    title: "Graphic Designing Full Course",
    creator: "WsCube Tech",
    url: "https://www.youtube.com/watch?v=e_dv7GBHka8",
    desc: "Master Photoshop, Illustrator, and branding design from scratch.",
  },
  {
    title: "Trading One Shot Course",
    creator: "Trading Wallah",
    url: "https://www.youtube.com/watch?v=gHxs9lxCcn8",
    desc: "Learn stock market, candlestick, indicators, and trading psychology.",
  },
  {
    title: "Video Editing Full Course",
    creator: "Anas Studio",
    url: "https://www.youtube.com/watch?v=qQdcYdFM17k",
    desc: "Edit like a pro using CapCut, Premiere Pro, and mobile tools.",
  },
  {
    title: "Amazon FBA Wholesale Course",
    creator: "Hafiz Ahmed",
    url: "https://www.youtube.com/watch?v=hEPVG0VT8X8",
    desc: "Start your Amazon business and scale with real examples.",
  },
  {
    title: "Shopify Drop-shipping Masterclass",
    creator: "Anas Ali",
    url: "https://www.youtube.com/watch?v=lewBT78I_pA",
    desc: "Launch your Shopify store and learn eCommerce marketing.",
  },
  {
    title: "Sigma Web Development",
    creator: "CodeWithHarry",
    url: "https://www.youtube.com/watch?v=tVzUXW6siu0",
    desc: "HTML, CSS, JS, React, Backend — Full Web Dev Bootcamp",
  },
  {
    title: "Python Full Course",
    creator: "freeCodeCamp",
    url: "https://www.youtube.com/watch?v=XKHEtdqhLK8",
    desc: "Python for beginners to advanced",
  },
  {
    title: "JavaScript Full Course",
    creator: "BroCode",
    url: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
    desc: "JS fundamentals and DOM, ES6+",
  },
  {
    title: "React.js Full Course",
    creator: "Chai aur Code",
    url: "https://www.youtube.com/watch?v=DIAdcsa6gAQ",
    desc: "Complete React course with projects",
  },
];

const websiteResources = [
  {
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org/",
    desc: "Official documentation for HTML, CSS, JavaScript and web APIs.",
  },
  {
    title: "freeCodeCamp",
    url: "https://www.freecodecamp.org/",
    desc: "Learn to code for free with interactive projects and tutorials.",
  },
  {
    title: "W3Schools",
    url: "https://www.w3schools.com/",
    desc: "Beginner-friendly tutorials and reference for all web technologies.",
  },
  {
    title: "CSS Tricks",
    url: "https://css-tricks.com/",
    desc: "Practical tips and tricks for using CSS effectively.",
  },
];

const extractVideoId = (url: string): string => {
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : "";
};

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"youtube" | "website">("youtube");

return (
  <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 min-h-screen px-6 md:px-20 py-16">

    {/* Header */}
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold">
        Your <span className="text-blue-900">Learning Dashboard</span>
      </h1>
      <p className="text-gray-600 mt-3">
        Explore curated courses and resources to boost your skills.
      </p>
    </div>

    {/* Tabs */}
    <div className="flex justify-center mb-10 gap-4">
      <button
        onClick={() => setActiveTab("youtube")}
        className={`px-6 py-2 rounded-lg font-semibold transition ${
          activeTab === "youtube"
            ? "bg-blue-900 text-white"
            : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
        }`}
      >
        YouTube
      </button>

      <button
        onClick={() => setActiveTab("website")}
        className={`px-6 py-2 rounded-lg font-semibold transition ${
          activeTab === "website"
            ? "bg-blue-900 text-white"
            : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
        }`}
      >
        Website
      </button>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

      {/* YouTube */}
      {activeTab === "youtube" &&
        featuredCourses.map((course, i) => {
          const videoId = extractVideoId(course.url);
          const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

          return (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <a href={course.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={thumbnail}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
              </a>

              <div className="p-5">
                <h2 className="text-lg font-semibold text-blue-900 mb-1">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-500 mb-1">
                  By {course.creator}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  {course.desc}
                </p>

                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 text-white px-4 py-1.5 rounded hover:bg-red-700 transition"
                >
                  Watch
                </a>
              </div>
            </div>
          );
        })}

      {/* Website */}
      {activeTab === "website" &&
        websiteResources.map((site, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition p-5"
          >
            <h2 className="text-lg font-semibold text-blue-900 mb-2">
              {site.title}
            </h2>
            <p className="text-gray-600 mb-3">{site.desc}</p>

            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-900 text-white px-4 py-1.5 rounded hover:bg-blue-800 transition"
            >
              Visit
            </a>
          </div>
        ))}
    </div>

    {/* Button */}
    {activeTab === "youtube" && (
      <div className="text-center mt-12">
        <Link to="/more-course">
          <button className="bg-blue-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition">
            Explore All Courses
          </button>
        </Link>
      </div>
    )}
  </div>
);
};

export default Dashboard;