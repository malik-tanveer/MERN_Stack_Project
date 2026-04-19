import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-6 md:px-20 py-16 space-y-16">

      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Contact <span className="text-blue-900">FutureStack</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Have questions or feedback? Reach out anytime.
        </p>
      </header>

      {/* Contact Cards */}
      <section className="grid md:grid-cols-3 gap-6">

        {/* Email */}
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
          <FaEnvelope className="text-blue-900 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <a href="mailto:mtanveerdev.33@gmail.com" className="text-gray-600 hover:text-blue-900">
            mtanveerdev.33@gmail.com
          </a>
        </div>

        {/* GitHub */}
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
          <FaGithub className="text-blue-900 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">GitHub</h3>
          <a
            href="https://github.com/malik/tanveer"
            target="_blank"
            className="text-gray-600 hover:text-blue-900"
          >
            github.com/malik/tanveer
          </a>
        </div>

        {/* LinkedIn */}
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
          <FaLinkedin className="text-blue-900 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
          <a
            href="#"
            target="_blank"
            className="text-gray-600 hover:text-blue-900"
          >
            Add your LinkedIn
          </a>
        </div>

      </section>

      {/* Contact Form */}
      <section className="bg-white shadow-lg rounded-xl p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-900">
          Send Message
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Send Message 🚀
          </button>
        </form>
      </section>

      {/* Location */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-blue-900">Our Location</h2>
        <p className="text-gray-600 flex justify-center items-center gap-2">
          <FaMapMarkerAlt /> Karachi, Pakistan
        </p>

        {/* Google Map */}
        <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Karachi Map"
            src="https://www.google.com/maps?q=Karachi&output=embed"
            className="w-full h-full border-0"
            // allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
}

export default Contact;