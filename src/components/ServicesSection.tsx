import React from 'react';
import { Home, Key, Mic, Lock } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <img alt="rent" src="	https://real-estate-black-kappa.vercel.app/img/cylinder-svg.svg" className="w-8 h-8"/>,
      title: 'Buy & Sell Properties',
      description: 'Find verified homes for sale or list your property with ease.'
    },
    {
      icon: <img alt="rent" src="https://real-estate-black-kappa.vercel.app/img/key-chain.svg" className="w-8 h-8"/>,
      title: 'Find Rental Homes',
      description: 'Browse through thousands of rental options suited to your needs'
    },
    {
      icon: <img alt="rent" src="https://real-estate-black-kappa.vercel.app/img/mic.svg" className="w-8 h-8"/>,
      title: 'Smart AI Property Search',
      description: 'Get instant recommendations based on your budget & location'
    },
    {
      icon: <img alt="rent" src="https://real-estate-black-kappa.vercel.app/img/lock.svg" className="w-8 h-8"/>,
      title: 'Safe & Secure Transactions',
      description: 'Verified listings & secure deals to ensure a smooth experience.'
    }
  ];

  return (
    <section className="text-center mb-12 mt-10">
      <h2 className="font-bold mb-4 text-[#1E3A8A] text-[35px]">
        What We Do?
      </h2>
      <p className="text-gray-600 text-lg mx-auto max-w-[479px]">
        Helping you find, buy, and rent the perfect property with ease.
      </p>
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#EEEEEE] rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col items-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gray-200 rounded-full mb-5 sm:mb-6">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-[280px] sm:max-w-none">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ServicesSection;