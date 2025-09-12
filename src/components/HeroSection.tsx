import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState('');

  return (
    <section className="w-full mx-auto">
      <div className="relative rounded-2xl overflow-hidden mt-10">
        <img
          alt="Dream Home"
          className="w-full h-[400px] md:h-[527px] object-cover rounded-2xl object-[center_20%]"
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            <MapPin className="w-6 h-6 ml-2 text-gray-500" />
            <input
              placeholder="Search Location..."
              className="flex-grow outline-none text-gray-700 font-medium placeholder:text-gray-400 bg-transparent px-3"
              type="text"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
            <button aria-label="search" className="hover:bg-gray-100 rounded-full p-1">
              <Search className="w-6 h-6 text-gray-500" />
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