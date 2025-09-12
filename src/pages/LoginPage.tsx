import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import logo from "..pageslogo.png";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col mb-5">
      <header className="w-full py-6 px-4 bg-white border-b shadow-md">
        <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-between md:items-center max-w-7xl mx-auto">
          <Link 
            to="/"
            className="border border-[#1E3A8A] rounded-full px-6 py-2 font-semibold flex items-center gap-2 text-[#1E3A8A] bg-white text-base md:text-lg hover:bg-gray-50 transition-colors"
          >
            <span>←</span>
            <span>Back to Homepage</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
               <img 
                src="https://real-estate-black-kappa.vercel.app/img/logo.svg" 
                alt="App Logo" 
                className="w-12 h-12 object-contain" />
              </button> 
            <span className="font-bold text-2xl tracking-wide">PropBot</span>
          </div>
          
          <Link 
            to="/about"
            className="rounded-full px-6 py-2 bg-[#1E3A8A] text-white flex items-center gap-2 text-base md:text-lg hover:bg-blue-800 transition-colors"
          >
            About Us 
            <span>→</span>
          </Link>
        </div>
      </header>

      <main className="flex flex-col sm:flex-col md:flex-row w-full flex-grow mt-10">
        <section className="w-[90%] sm:w-full sm:max-w-full sm:px-6 flex flex-col justify-center mx-auto md:w-[35%] md:px-12 md:max-w-none md:mx-0 py-10 md:py-14">
          <h1 className="text-3xl font-extrabold mb-8 text-center">Log In</h1>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-base font-semibold mb-2" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email Id"
                  className="border border-[#1E3A8A] rounded-xl px-4 py-3 text-base w-full focus:outline-none transition pr-10"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2">
                  <span className="text-gray-400">@</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-base font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                  className="border border-[#1E3A8A] rounded-xl px-4 py-3 text-base w-full focus:outline-none transition pr-10"
                />
                <span 
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                  title="Show password"
                >
                  {showPassword ? <EyeOff size={20} className="text-gray-400" /> : <Eye size={20} className="text-gray-400" />}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between mt-2 mb-2 gap-4 sm:gap-0">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="mr-2 w-[19px] h-[19px]"
                />
                <label htmlFor="rememberMe" className="text-[#454343] text-xs">
                  Remember Me
                </label>
              </div>
              <Link 
                to="/forgot-password"
                className="text-[#A81212] text-xs hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1E3A8A] text-white py-4 text-lg shadow transition mt-2 rounded-[34px] hover:bg-blue-800"
            >
              Log In
            </button>
          </form>

          <div className="my-8 flex flex-col items-center w-full max-w-xs mx-auto">
            <div className="flex items-center text-gray-500 w-full">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-4 text-xs">OR CONTINUE WITH</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            
            <div className="flex items-center gap-8 mt-6">
              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
               <img 
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
                alt="App Logo" 
                className="w-12 h-12 object-contain" />
              </button> 
              <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" 
                alt="App Logo" 
                className="w-12 h-12 object-contain" 
                />
              </button>
              <button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
               <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png" 
                alt="App Logo" 
                className="w-12 h-12 object-contain" 
                />
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-base text-gray-800">
            Doesn't have an account?{' '}
            <Link 
              to="/signup" 
              className="font-bold text-[#1E3A8A] hover:underline"
            >
              Create One
            </Link>
          </p>
        </section>

        <section className="w-[90%] sm:w-full sm:max-w-full sm:px-6 p-6 mx-auto md:w-[65%] md:p-0 md:max-w-none md:mx-0 flex items-center justify-center">
          <img
            alt="Modern house"
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="object-cover w-full h-full rounded-[34px]"
          />
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
