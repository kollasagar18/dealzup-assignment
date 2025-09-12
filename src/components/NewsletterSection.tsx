import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    userType: '',
    location: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="my-14">
      <h2 className="text-[2rem] font-extrabold text-[#1E3A8A] mb-1 text-left">
        Start Your Journey Today!
      </h2>
      <p className="text-gray-600 mb-5 text-left text-base">
        Create a profile in seconds and find your ideal home.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full">
        <input
          name="name"
          placeholder="Enter Your Name"
          className="flex-1 min-w-0 px-5 py-3 rounded-[8px] border border-gray-200 bg-white text-gray-700 focus:outline-[#1E3A8A] transition"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        
        <div className="flex-1 min-w-0 relative">
          <select
            name="userType"
            className="w-full px-5 py-3 rounded-[8px] border-2 border-[#1E3A8A] bg-white text-gray-700 focus:outline-[#1E3A8A] transition appearance-none"
            required
            value={formData.userType}
            onChange={handleChange}
          >
            <option value="" disabled>Select User Type</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        
        <input
          name="location"
          placeholder="Enter Your Location"
          className="flex-1 min-w-0 px-5 py-3 rounded-[8px] border border-gray-200 bg-white text-gray-700 focus:outline-[#1E3A8A] transition"
          type="text"
          value={formData.location}
          onChange={handleChange}
        />
        
        <button
          type="submit"
          className="px-11 py-3 rounded-full bg-[#1E3A8A] text-white hover:bg-blue-800 transition min-w-[140px]"
        >
          Continue
        </button>
      </form>
    </section>
  );
};

export default NewsletterSection;