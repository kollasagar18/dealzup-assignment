import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  // ✅ Define routes for each tab
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Buy', path: '/buy' },
    { name: 'Rent', path: '/'  },
    { name: 'Sell', path: '/'  },
    { name: 'About Us', path: '/' },
    { name: 'Contact Us', path: '/' },
  ];

  return (
    <nav className="border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 cursor-pointer">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
            <img 
              src="https://real-estate-black-kappa.vercel.app/img/logo.svg" 
              alt="App Logo" 
              className="w-8 h-8 object-contain" />
          </button> 
          <span className="text-xl font-bold text-gray-900">PropBot</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium list-none m-0 p-0">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setActiveTab(item.name)}
                className={`hover:text-blue-600 transition-colors duration-200 pb-1 border-b-2 h-10 leading-10 text-base ${
                  activeTab === item.name
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <Link
          to="/login"
          className="hidden lg:flex bg-[#1E3A8A] text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition-colors duration-200 items-center space-x-1"
        >
          <span>Login / Register</span>
          <span>→</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 p-4 bg-white border rounded-lg shadow-lg">
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 px-4 rounded hover:bg-gray-100 ${
                    activeTab === item.name ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/login"
                className="block w-full text-center bg-[#1E3A8A] text-white py-2 px-4 rounded-full font-medium hover:bg-blue-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login / Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
