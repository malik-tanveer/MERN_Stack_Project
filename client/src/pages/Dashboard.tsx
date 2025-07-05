import React from "react";
import { Link } from "react-router-dom";

const featuredCourses = [
  {
    title: "Graphic Designing Full Course",
    creator: "WsCube Tech",
    url: "https://www.youtube.com/watch?v=e_dv7GBHka8&pp=ygUYZ3JhcGhpYyBkZXNpZ25pbmcgY291cnNl",
    desc: "Master Photoshop, Illustrator, and branding design from scratch.",
  },
  {
    title: "Trading One Shot Course",
    creator: "Trading Wallah",
    url: "https://www.youtube.com/watch?v=gHxs9lxCcn8&pp=ygUXVHJhZGluZyBPbmUgU2hvdCBDb3Vyc2XSBwkJwQkBhyohjO8%3D",
    desc: "Learn stock market, candlestick, indicators, and trading psychology.",
  },
  {
    title: "Video Editing Full Course",
    creator: "Anas Studio",
    url: "https://www.youtube.com/watch?v=qQdcYdFM17k&list=PLTukPelH6ee67bP78MB1rTs-6pk2BFvfZ",
    desc: "Edit like a pro using CapCut, Premiere Pro, and mobile tools.",
  },
  {
    title: "Amazon FBA Wholesale Course",
    creator: "Hafiz Ahmed",
    url: "https://www.youtube.com/watch?v=hEPVG0VT8X8&list=PLLcud68rRodgkH2-JDJDJLLC1iQjbpLAe",
    desc: "Start your Amazon business and scale with real examples.",
  },
  {
    title: "Shopify Drop-shipping Masterclass",
    creator: "Anas Ali",
    url: "https://www.youtube.com/watch?v=lewBT78I_pA&pp=ygUPc2hvcGlmeSBieSBhbmFz",
    desc: "Launch your Shopify store and learn eCommerce marketing.",
  },
  {
    title: "Sigma Web Development",
    creator: "CodeWithHarry",
    url: "https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w",
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
    url: "https://www.youtube.com/watch?v=DIAdcsa6gAQ&list=PLjVLYmrlmjGfsnKBvTJXO5MRsedAsifpp",
    desc: "Complete React course with projects",
  },
];

const extractVideoId = (url: string): string => {
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : "";
};

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6] px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-[#64ffda] mb-6">
        Your Learning Dashboard
      </h1>

      <p className="text-center max-w-xl mx-auto text-gray-400 mb-10 text-lg">
        Click any thumbnail to watch the full video on YouTube.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {featuredCourses.map((course, i) => {
          const videoId = extractVideoId(course.url);
          const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

          return (
            <a
              key={i}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#112240] border border-[#233554] rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-[#64ffda] mb-1">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-400 mb-1">By {course.creator}</p>
                <p className="text-sm text-gray-300">{course.desc}</p>
              </div>

            </a>
          );
        })}
        
      </div>
      <div className="text-center mt-10">
        <Link to="/more-course">
          <button className="bg-[#64ffda] text-[#0a192f] font-semibold px-6 py-3 rounded hover:opacity-90 transition">
            Explore All Courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;