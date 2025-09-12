// src/pages/Signup.jsx
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../services/firebase"
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft, ArrowRight } from "lucide-react"

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(userCredential.user, { displayName: name })
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

      {/* Main Section */}
      <div className="flex flex-1">
        {/* Left Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-10 lg:px-20 py-12">
          <h2 className="text-3xl font-bold mb-6">Create new account</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleSignup} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <User className="absolute right-3 top-3.5 text-gray-400" size={20} />
              </div>
            </div>

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

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Your Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full border rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <Lock className="absolute right-3 top-3.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-full font-medium hover:bg-blue-800 transition"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-8 text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-900 font-semibold hover:underline">
              Log In
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
