import React from "react";

export interface featuredCourses {
  id: number;
  title: string;
  desc: string;
  creator: string;
  platform: string;
  url: string;
}

const featuredCourses = [
  {
    title: "DSA In Pyhton",
    url: "https://www.youtube.com/watch?v=pkYVOmU3MgA",
    desc: "Complete DSA in Python",
    creator: "freeCodeCamp",
    platform: "YouTube",
  },
  {
    title: "DSA In Javascript",
    url: "https://www.youtube.com/watch?v=dY-OpnLZRd0&list=PLbtI3_MArDOmSKABu09sEs0SxCibd1wgr",
    desc: "DSA fundamentals in JS",
    creator: "sheryians coding school",
    platform: "YouTube",
  },
  {
    title: "TypeScript",
    url: "https://www.youtube.com/watch?v=j89BvWz8Eag&list=PLRAV69dS1uWRPSfKzwZsIm-Axxq-LxqhW",
    desc: "Typescipt using TS",
    creator: "Hitesh Choudhary",
    platform: "YouTube",
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
  {
    title: "C Programming Tutorial",
    creator: "Apna College",
    url: "https://www.youtube.com/watch?v=irqbmMNs2Bo",
    desc: "C fundamentals and Mush more.",
  },
  {
    title: "C++ Full Course",
    creator: "freeCodeCamp",
    url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
    desc: "Master C++ OOP & STL",
  },
  {
    title: "C# Complete Course",
    desc: "C# and .NET fundamentals",
    creator: "freeCodeCamp",
    url: "https://www.youtube.com/watch?v=GhQdlIFylQ8"
  },
  {
    title: "Go Lang Crash Course",
    desc: "Get started with Go",
    creator: "freeCodeCamp",
    url: "https://www.youtube.com/watch?v=YS4e4q9oBaU"
  },
  {
    title: "Rust Programming Tutorial",
    desc: "Intro to Rust",
    creator: "BroCode",
    url: "https://www.youtube.com/watch?v=ygL_xcavzQ4",
  },
  {
    title: "Java Tutorial for Beginners",
    desc: "Learn Java ...Java OOPs in One Shot ",
    creator: "Apna College",
    url: "https://www.youtube.com/watch?v=UmnCZ7-9yDY",
  },
  {
    title: "CSS Full Course",
    desc: "Responsive web design",
    creator: "Apna College",
    url: "https://www.youtube.com/watch?v=ESnrn1kAD4E",
  },
  {
    title: "HTML Full Course",
    desc: "Complete HTML with Notes",
    creator: "Apna College",
    url: "https://www.youtube.com/watch?v=HcOc7P5BMi4"
  },
  {
    title: "JavaScript Tutorial ",
    desc: "for Beginners to Pro (with Notes ...",
    creator: "Apna College",
    url: "https://www.youtube.com/watch?v=VlPiVmYuoqw&pp=0gcJCfwAo7VqN5tD"
  },
  {
    title: "React.js Tutorial ",
    desc: "for Beginners in Hindi",
    creator: "Thapa Technical",
    url: "https://www.youtube.com/watch?v=EHTWMpD6S_0"
  },
  {
    title: "Vue.js Crash Course",
    desc: "Learn Vue 3",
    creator: "Traversy Media",
    url: "https://www.youtube.com/watch?v=Wy9q22isx3U"
  },
  {
    title: "Tailwind CSS Crash Course",
    desc: "Utility-first CSS framework",
    creator: "Traversy Media",
    url: "https://www.youtube.com/watch?v=dFgzHOX84xQ"
  },
  {
    title: "Next.js Full Course",
    desc: "Next js Tutorial for Beginners",
    creator: "rogramming with Mosh",
    url: "https://www.youtube.com/watch?v=ZVnjOPwW4ZA&pp=ygUQTmV4dC5qcyBUdXRvcmlhbA%3D%3D"
  },
  {
    title: "Svelte Tutorial",
    desc: "Build with Svelte",
    creator: "The Net Ninja",
    url: "https://www.youtube.com/watch?v=zojEMeQGGHs"
  },
  {
    title: "Node.js Crash Course",
    desc: "Backend fundamentals",
    creator: "Traversy Media",
    url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4"
  },
  {
    title: "Express.js Full Course",
    desc: "APIs with Express",
    creator: "Code with Harry",
    url: "https://www.youtube.com/watch?v=7H_QH9nipNs&pp=ygUTZXhwcmVzcy5qcyBUdXRvcmlhbA%3D%3D"
  },
  {
    title: "MongoDB Tutorial",
    desc: "Introduction to MongoDb + Installation | Web Development ...",
    creator: "Code with Harry",
    url: "https://www.youtube.com/watch?v=J6mDkcqU_ZE"
  },
  {
    title: "SQL Complete Course",
    desc: "SQL Complete Course in 3 Hours",
    creator: "Apna College",
    url: "https://www.youtube.com/watch?v=hlGoQC332VM"
  },
  {
    title: "Firebase Tutorial for Beginners",
    desc: "Firebase Tutorial For Beginners 2025 | What Is Firebase? | Firebase Basics | Simplilearn",
    creator: "Simplilearn",
    url: "https://www.youtube.com/watch?v=_L8j-ZC83y4&pp=ygURZmlyZWJhc2UgdHV0b3JpYWw%3D"
  },
  {
    title: "Docker Full Course",
    desc: "Containerization made simple",
    creator: "TechWorld with Nana",
    url: "https://www.youtube.com/watch?v=Gjnup-PuquQ"
  },
  {
    title: "Kubernetes Crash Course",
    desc: "Container orchestration",
    creator: "TechWorld with Nana",
    url: "https://www.youtube.com/watch?v=X48VuDVv0do"
  },
  {
    title: "CI/CD with Jenkins",
    desc: "DevOps pipeline creation",
    creator: "Simplilearn",
    url: "https://www.youtube.com/watch?v=mk2FBuTMwDc&pp=ygUTQ0kvQ0Qgd2l0aCBqZW5raW5zcw%3D%3D"
  },
  {
    title: "Terraform AWS Tutorial",
    desc: "Infrastructure as Code",
    creator: "freeCodeCamp",
    url: "https://www.youtube.com/watch?v=7xngnjfIlK4"
  },
  {
    title: "Machine Learning Full Course",
    desc: "ML fundamentals",
    creator: "Simplilearn",
    url: "https://www.youtube.com/watch?v=GwIo3gDZCVQ"
  },
  {
    title: "Data Science Full Course",
    desc: "Pandas, NumPy, SciKit",
    creator: "freeCodeCamp",
    url: "https://www.youtube.com/watch?v=ua-CiDNNj30"
  },
  {
    title: "Deep Learning Intro",
    desc: "Neural networks explained",
    creator: "freeCodeCamp",
    url: "https://www.youtube.com/watch?v=aircAruvnKk"
  },
  {
    title: "ChatGPT Prompt Engineering",
    desc: "Master AI prompts",
    creator: "DeepLearningAI",
    url: "https://www.youtube.com/watch?v=dOxUroR57xs"
  },
  {
    title: "Canva Graphic Design",
    desc: "Design basics with Canva",
    creator: "Design with Canva",
    url: "https://www.youtube.com/watch?v=lJIrF4YjHfQ"
  },
  {
    title: "Graphic Designing Full Course",
    creator: "WsCube Tech",
    url: "https://www.youtube.com/watch?v=e_dv7GBHka8&pp=ygUYZ3JhcGhpYyBkZXNpZ25pbmcgY291cnNl",
    desc: "Master Photoshop, Illustrator, and branding design from scratch."
  },
  {
    title: "Cybersecurity Full Course",
    desc: "Ethical hacking intro",
    creator: "Simplilearn",
    url: "https://www.youtube.com/watch?v=swL0dUA2We4"
  },
  {
    title: "IoT Tutorial",
    desc: "Internet of Things basics",
    creator: "freeCodeCamp",
    url: "https://www.youtube.com/watch?v=QX3SOoXJs_s"
  },
  {
    title: "Blockchain Crash Course",
    desc: "Blockchain explained",
    creator: "freeCodeCamp",
    url: "https://www.youtube.com/watch?v=SSo_EIwHSd4"
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
    title: "Flutter App Development",
    creator: "The Net Ninja",
    desc: "Build mobile apps using Flutter framework",
    platform: "YouTube",
    url: "https://www.youtube.com/watch?v=VPvVD8t02U8",
  },
  {
    title: "Data Structures in Java",
    creator: "CodeWithHarry",
    desc: "Understand core DSA concepts with Java",
    platform: "YouTube",
    url: "https://www.youtube.com/watch?v=lxB4O6gY4mA",
  },
  {
    title: "DevOps Beginner Guide",
    creator: "Simplilearn",
    desc: "Learn CI/CD, Jenkins, Docker, and more",
    platform: "YouTube",
    url: "https://www.youtube.com/watch?v=sZmz9z8qLA4",
  },
  {
    title: "Figma Design Tutorial",
    creator: "DesignCourse",
    desc: "UI/UX design for web and mobile using Figma",
    platform: "YouTube",
    url: "https://www.youtube.com/watch?v=wXnlHIvKnKM",
  },
  {
    title: "Linux for Beginners",
    creator: "freeCodeCamp",
    desc: "Learn Linux terminal commands & usage",
    platform: "YouTube",
    url: "https://www.youtube.com/watch?v=ZtqBQ68cfJc",
  },
];

const extractVideoId = (url: string): string => {
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : "";
};

const Card: React.FC = () => {
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
    </div>
  );
};

export default Card;