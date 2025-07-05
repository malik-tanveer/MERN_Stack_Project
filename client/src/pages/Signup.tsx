import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import signup_bg from "../assets/signup.jpeg";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });
      if (!email || !password) {
        alert("Please enter all input like name, email and password.");
        return;
      }
      const token = res.data.token;
      localStorage.setItem("token", token);
      alert("Congratulations! Signup Successful.");
      navigate("/");
    } catch (error: any) {
      alert(error.response?.data?.message || "Signup failed PLease Move a /dashboard");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${signup_bg})` }}
    >
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-full max-w-md border border-white/30">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Create Account</h2>

        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300" />
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300" />

        <div className="relative mb-4">
          <input type={showPassword ? "text" : "password"} placeholder="Create Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300" />
          <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 cursor-pointer text-gray-500">{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}</span>
        </div>

        <div className="relative mb-4">
          <input type={showConfirm ? "text" : "password"} placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300" />
          <span onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-2.5 cursor-pointer text-gray-500">{showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}</span>
        </div>

        {error && <p className="text-red-200 text-sm mb-2 text-center">{error}</p>}

        <button onClick={handleSignup} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
          Signup
        </button>

        <p className="text-center text-white mt-4">
          Already have an Account{" "}
          <Link to="/login" className="text-yellow-300 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;