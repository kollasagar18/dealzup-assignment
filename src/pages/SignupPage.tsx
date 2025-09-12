import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const SignupPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Signup attempt:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col mb-5">
      <header className="flex items-center justify-between px-6 sm:px-10 py-5 bg-white border-b shadow-md">
        <Link
          to="/"
          className="border border-[#1E3A8A] px-6 py-2 rounded-full text-[#555555] font-semibold flex items-center gap-2 transition hover:bg-gray-50"
        >
          <span>←</span> Back to Homepage
        </Link>
        
        <div className="flex items-center gap-2 select-none">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
               <img 
                src="https://real-estate-black-kappa.vercel.app/img/logo.svg" 
                alt="App Logo" 
                className="w-12 h-12 object-contain" />
              </button> 
          <span className="font-bold text-lg tracking-wide">PropBot</span>
        </div>
        
        <Link
          to="/about"
          className="px-6 py-2 rounded-full bg-[#1E3A8A] text-white flex items-center gap-2 transition hover:bg-blue-800"
        >
          About Us <span className="ml-1">→</span>
        </Link>
      </header>

      <main className="flex flex-col sm:flex-col md:flex-row w-full flex-grow mt-10">
        <section className="w-[90%] sm:w-full sm:max-w-full sm:px-6 flex flex-col justify-center mx-auto md:w-[35%] md:px-12 md:max-w-none md:mx-0 py-10 md:py-14 bg-white">
          <h1 className="text-3xl font-extrabold mb-8 text-center">Create new account</h1>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-base font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Full Name"
                className="border border-[#1E3A8A] rounded-xl px-5 py-3 text-base focus:outline-none transition shadow-[2px_2px_12px_0px_#00000029]"
              />
            </div>

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
                  className="border border-[#1E3A8A] rounded-xl px-5 py-3 text-base w-full focus:outline-none transition pr-10 shadow-[2px_2px_12px_0px_#00000029]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none">
                  <span>@</span>
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
                  className="border border-[#1E3A8A] rounded-xl px-5 py-3 text-base w-full focus:outline-none transition pr-10 shadow-[2px_2px_12px_0px_#00000029]"
                />
                <span 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-base font-semibold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Your Password"
                  className="border border-[#1E3A8A] rounded-xl px-5 py-3 text-base w-full focus:outline-none transition pr-10 shadow-[2px_2px_12px_0px_#00000029]"
                />
                <span 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-[#1E3A8A] text-white py-4 text-lg shadow transition rounded-[34px] hover:bg-blue-800"
            >
              Create Account
            </button>
          </form>

          <p className="mt-10 text-center text-base text-gray-800">
            Already have an account?{' '}
            <Link 
              to="/login" 
              className="font-bold text-[#1E3A8A] hover:underline"
            >
              Log In
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

export default SignupPage;