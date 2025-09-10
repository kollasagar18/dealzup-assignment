// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Listings from "./pages/Listings.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import { useAuth } from "./context/AuthContext.jsx"

// ✅ ProtectedRoute wrapper
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Navbar at the top */}
      <Navbar />

      {/* ✅ Main content */}
      <main className="flex-1">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Example Protected Route (uncomment if you create Profile page) */}
          {/* <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          /> */}

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* ✅ Footer at the bottom */}
      <Footer />
    </div>
  )
}
