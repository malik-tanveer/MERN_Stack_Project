import {
  FaBook,
  FaUserTie,
  FaGraduationCap,
  FaCogs,
  FaBullseye,
  FaHandshake,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 px-6 md:px-20 py-20 space-y-28">

      {/* Header */}
      <header className="text-center space-y-5">
        <h1 className="text-5xl md:text-6xl font-bold">
          About <span className="text-blue-900">FutureStack</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Learn development with clarity, build real projects, and grow step by step.
        </p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {[
          { number: "10+", label: "Projects" },
          { number: "100%", label: "Free" },
          { number: "Real", label: "Learning Paths" },
        ].map((item, i) => (
          <div key={i} className="bg-white shadow-md rounded-xl py-6 hover:shadow-xl transition">
            <h2 className="text-3xl font-bold text-blue-900">{item.number}</h2>
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Sections */}
      {[
        {
          title: "What is FutureStack?",
          icon: <FaGraduationCap />,
          text: "FutureStack is a structured learning platform for developers. It removes confusion and helps you focus on what actually matters.",
          img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        },
        {
          title: "Who Created This?",
          icon: <FaUserTie />,
          text: "I'm Tanveer — a developer who struggled with unstructured learning. This platform is built to guide others in a better way.",
          img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
          reverse: true,
        },
        {
          title: "What Makes It Different?",
          icon: <FaBook />,
          list: [
            "Project-based learning",
            "Clear roadmap",
            "No distractions",
          ],
          img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },
        {
          title: "Our Mission",
          icon: <FaBullseye />,
          list: [
            "Make learning simple",
            "Focus on real skills",
            "Help beginners grow",
          ],
          img: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
          reverse: true,
        },
        {
          title: "How It Works",
          icon: <FaCogs />,
          list: [
            "Open Dashboard",
            "Pick a path",
            "Build projects",
            "Improve step by step",
          ],
          img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
        },
        {
          title: "Commitment",
          icon: <FaHandshake />,
          list: [
            "Free content",
            "No ads",
            "Updated resources",
          ],
          img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
          reverse: true,
        },
      ].map((section, i) => (
        <section
          key={i}
          className={`flex flex-col ${
            section.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-12`}
        >
          {/* Text */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-blue-900 flex items-center gap-3">
              {section.icon} {section.title}
            </h2>

            {section.text && (
              <p className="text-gray-600 text-lg leading-relaxed">
                {section.text}
              </p>
            )}

            {section.list && (
              <ul className="space-y-2 text-gray-600 text-lg">
                {section.list.map((item, idx) => (
                  <li key={idx}>✔ {item}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={section.img}
              alt="section"
              className="w-full h-[300px] object-cover rounded-xl shadow-lg hover:scale-105 transition duration-500"
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default About;