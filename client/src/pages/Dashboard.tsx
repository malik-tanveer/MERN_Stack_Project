import React, { useState } from "react";
import { Link } from "react-router-dom";

// ✅ YouTube Courses List
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

// ✅ Website Resources (Separate List)
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

// ✅ Extract YouTube Video ID
const extractVideoId = (url: string): string => {
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : "";
};

// ✅ Dashboard Component
const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"youtube" | "website">("youtube");

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6] px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-[#64ffda] mb-6">
        Your Learning Dashboard
      </h1>

      {/* Tabs */}
      <div className="flex justify-center mb-8 gap-4">
        <button
          onClick={() => setActiveTab("youtube")}
          className={`px-5 py-2 rounded font-semibold ${activeTab === "youtube"
              ? "bg-[#64ffda] text-[#0a192f]"
              : "bg-[#112240] text-[#64ffda] border border-[#233554]"
            }`}
        >
          YouTube
        </button>
        <button
          onClick={() => setActiveTab("website")}
          className={`px-5 py-2 rounded font-semibold ${activeTab === "website"
              ? "bg-[#64ffda] text-[#0a192f]"
              : "bg-[#112240] text-[#64ffda] border border-[#233554]"
            }`}
        >
          Website
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {activeTab === "youtube" &&
          featuredCourses.map((course, i) => {
            const videoId = extractVideoId(course.url);
            const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

            return (
              <div
                key={i}
                className="bg-[#112240] border border-[#233554] rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-[#64ffda] mb-1">
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-400 mb-1">
                    By {course.creator}
                  </p>
                  <p className="text-sm text-gray-300 mb-3">{course.desc}</p>
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            );
          })}

        {activeTab === "website" &&
          websiteResources.map((site, i) => (
            <div
              key={i}
              className="bg-[#112240] border border-[#233554] rounded-lg shadow hover:shadow-lg transition p-4"
            >
              <h2 className="text-lg font-semibold text-[#64ffda] mb-2">
                {site.title}
              </h2>
              <p className="text-sm text-gray-300 mb-3">{site.desc}</p>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
              >
                Visit Website
              </a>
            </div>
          ))}
      </div>

      {/* Show only in YouTube tab */}
      {activeTab === "youtube" && (
        <div className="text-center mt-10">
          <Link to="/more-course">
            <button className="bg-[#64ffda] text-[#0a192f] font-semibold px-6 py-3 rounded hover:opacity-90 transition">
              Explore All Courses
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
