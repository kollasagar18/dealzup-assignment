import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import Hero from "../components/Hero";  // adjust path if needed


const HeroSection: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState('');

  return (
    <section className="w-full mx-auto">
      <div className="relative rounded-2xl overflow-hidden mt-10">
        <img
          alt="Dream Home"
          className="w-full h-[400px] md:h-[527px] object-cover rounded-2xl object-[center_20%]"
          src="https://real-estate-black-kappa.vercel.app/img/hero-img.jpg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl"></div>
        
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full text-center px-6">
          <h1 className="text-white font-extrabold text-3xl md:text-4xl">
            Find Your Dream Home in One Click!
          </h1>
          <p className="text-white/90 mt-2 text-base md:text-lg font-medium">
            Discover, Buy, or Rent Verified Properties with Ease.
          </p>
        </div>
        
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-5xl flex flex-col md:flex-row justify-between items-center px-6 gap-4 z-20">
          <div className="flex items-center bg-white h-12 px-5 shadow-md w-full md:w-[600px] rounded-[12px]">
            <img alt="location" class="w-8 h-8 ml-2" src="https://real-estate-black-kappa.vercel.app/img/search-location.svg"></img>
            <input
              placeholder="Search Location..."
              className="flex-grow outline-none text-gray-700 font-medium placeholder:text-gray-400 bg-transparent px-3"
              type="text"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
            <button aria-label="search" className="hover:bg-gray-100 rounded-full p-1">
              <img alt="search" className="w-10 h-10 -ml-2"src="	https://real-estate-black-kappa.vercel.app/img/search.svg" />
            </button>
          </div>
          
          <button className="border-2 border-[#1E3A8A] rounded-full px-5 h-12 bg-white text-[#1E3A8A] font-medium hover:bg-[#1E3A8A] hover:text-white transition-all shadow-md w-full md:w-auto">
            List Your Property
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;