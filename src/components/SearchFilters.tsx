import React, { useState } from 'react';
import { ChevronDown, Home, MapPin, Building } from 'lucide-react';

const SearchFilters: React.FC = () => {
  const [filters, setFilters] = useState({
    type: 'For Rent',
    property: 'House',
    location: 'Indonesia'
  });

  return (
    <div className="bg-transparent md:bg-white rounded-full flex flex-col md:flex-row justify-between items-center gap-4 mt-[-40px] px-4 md:px-10 py-4 max-w-5xl mx-auto w-full shadow-lg z-20 relative">
      <div className="relative w-full md:w-[220px] h-[56px]">
        <img alt="rent"src="	https://real-estate-black-kappa.vercel.app/img/rent.svg"className="pointer-events-none absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"/>
        <select 
          className="appearance-none w-full h-full bg-white border border-gray-300 rounded-full pl-11 pr-10 text-gray-700 font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition hover:border-gray-400"
          value={filters.type}
          onChange={(e) => setFilters({...filters, type: e.target.value})}
        >
          <option>For Rent</option>
          <option>For Sale</option>
          <option>For Lease</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>

      <div className="relative w-full md:w-[220px] h-[56px]">
        <img alt="rent"src="	https://real-estate-black-kappa.vercel.app/img/house.svg"className="pointer-events-none absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"/>
        <select 
          className="appearance-none w-full h-full bg-white border border-gray-300 rounded-full pl-11 pr-10 text-gray-700 font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition hover:border-gray-400"
          value={filters.property}
          onChange={(e) => setFilters({...filters, property: e.target.value})}
        >
          <option>House</option>
          <option>Apartment</option>
          <option>Condo</option>
          <option>Villa</option>
          <option>Studio</option>
          <option>Townhouse</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>

      <div className="relative w-full md:w-[220px] h-[56px]">
        <img alt="rent"src="https://real-estate-black-kappa.vercel.app/img/location.svg"className="pointer-events-none absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"/>
        <select 
          className="appearance-none w-full h-full bg-white border border-gray-300 rounded-full pl-11 pr-10 text-gray-700 font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition hover:border-gray-400"
          value={filters.location}
          onChange={(e) => setFilters({...filters, location: e.target.value})}
        >
          <option>Indonesia</option>
          <option>USA</option>
          <option>Canada</option>
          <option>Australia</option>
          <option>United Kingdom</option>
          <option>India</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>

      <button className="bg-[#1E3A8A] text-white font-semibold px-8 md:px-12 h-[56px] rounded-full hover:bg-blue-800 transition text-lg shadow-md min-w-[200px] flex items-center justify-center w-full md:w-auto">
        Find Property
      </button>
    </div>
  );
};

export default SearchFilters;