// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route ,Link } from "react-router-dom";
import Header from "./components/Header"; // your header with Links
import HomePage from "./pages/HomePage";
import BuyPage from "./pages/BuyPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Router>          {/* Header must be inside Router */}
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* add other routes like /rent, /sell, /about */}
        </Routes>
      
    </Router>
  );
}

export default App;
