import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";

Modal.setAppElement("#root");

const Feedback = () => {
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  // Disable scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = modalIsOpen ? "hidden" : "auto";
  }, [modalIsOpen]);

  useEffect(() => {
    setIsFormValid(name.trim() !== "" && feedback.trim() !== "");
  }, [name, feedback]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const feedbackData = { name, email, feedback, rating };

    try {
      await axios.post("http://localhost:5000/api/auth/feedback", feedbackData);
      setModalIsOpen(false);
      navigate("/main-dashboard");
    } catch (error: any) {
      console.error("Feedback Error:", error.response?.data || error.message || error);
      alert("Something went wrong while sending feedback.");
    }

  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => { }}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        className="relative w-full max-w-lg mx-auto outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-50 overflow-y-auto"
      >
        <div className="flex min-h-screen items-center justify-center px-4 py-12">
          <div className="bg-white w-full p-6 rounded-xl shadow-lg max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Feedback Form</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block font-medium mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border rounded-md p-2"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium mb-1">Email (optional)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-md p-2"
                  placeholder="your@email.com"
                />
              </div>

              {/* Feedback */}
              <div>
                <label className="block font-medium mb-1">
                  Feedback <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                  className="w-full border rounded-md p-2 resize-none"
                  placeholder="What do you think?"
                  rows={4}
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block font-medium mb-1">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`text-2xl ${rating >= star ? "text-yellow-400" : "text-gray-300"
                        }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-2 px-4 rounded text-white transition ${isFormValid
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                  }`}
              >
                Submit Feedback & Continue
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Feedback;
