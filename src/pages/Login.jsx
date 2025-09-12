// src/pages/Login.jsx
import { auth } from "../services/firebase";
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Eye, EyeOff, Mail, Lock, ArrowLeft, ArrowRight } from "lucide-react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Navbar */}
      <div className="w-full flex items-center justify-between px-6 py-4 shadow-sm">
        <Link
          to="/"
          className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
        >
          <ArrowLeft size={18} />
          Back to Homepage
        </Link>

        <h1 className="text-xl font-bold flex items-center gap-2">
          <span className="text-2xl">🏠</span> PropBot
        </h1>

        <Link
          to="/about"
          className="flex items-center gap-2 bg-blue-900 text-white rounded-full px-4 py-2 hover:bg-blue-800 transition"
        >
          About Us <ArrowRight size={18} />
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-10 lg:px-20 py-12">
          <h2 className="text-3xl font-bold mb-6">Log In</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Your Email Id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <Mail className="absolute right-3 top-3.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 border-gray-300" />
                Remember Me
              </label>
              <Link to="/forgot-password" className="text-red-500 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-full font-medium hover:bg-blue-800 transition"
            >
              Log In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="px-3 text-sm text-gray-500">OR CONTINUE WITH</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Social Logins */}
          <div className="flex justify-center gap-8 text-3xl">
            <button className="hover:opacity-70"></button>
            <button className="text-blue-600 hover:opacity-70">f</button>
            <button className="text-red-500 hover:opacity-70">G</button>
          </div>

          {/* Signup Link */}
          <p className="mt-8 text-sm text-center">
            Doesn’t have an account?{" "}
            <Link to="/signup" className="text-blue-900 font-semibold hover:underline">
              Create One
            </Link>
          </p>
        </div>

        {/* Right Image */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Property"
            className="w-full h-full object-cover rounded-bl-[40px]"
          />
        </div>
      </div>
    </div>
  )
}
