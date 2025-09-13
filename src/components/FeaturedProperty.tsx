import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const FeaturedProperty: React.FC = () => {
  return (
    <section className="mt-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4 lg:gap-0">
        <h2 className="text-4xl font-bold text-blue-800">Featured Property</h2>
        <button className="text-blue-700 font-medium border border-blue-700 rounded-full px-6 py-3 hover:bg-blue-700 hover:text-white transition-all duration-300 flex items-center gap-2">
          See 268 New Projects
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="relative flex-1 rounded-3xl overflow-hidden shadow-lg group cursor-pointer max-w-full lg:max-w-[600px] min-h-[300px] lg:min-h-[384px]">
          <img
            alt="Lester Hackett"
            className="w-full h-[300px] lg:h-[384px] object-cover group-hover:scale-105 transition-transform duration-300"
            src="https://picsum.photos/seed/rko0Qcmc/1736/389"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 py-5 rounded-b-3xl">
            <p className="text-white text-sm opacity-90 mb-1">By Finder & Projects</p>
            <p className="text-white font-bold text-2xl">Lester Hackett</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 flex-shrink-0 max-w-full lg:max-w-[380px]">
          <div className="flex flex-row lg:flex-col gap-6">
            <div className="w-72 h-48 lg:h-96 rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
              <img
                alt="Property"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                src="https://picsum.photos/seed/4Xh2OkmJ/2929/2948"
              />
            </div>
          </div>
          
          <div className="flex flex-row lg:flex-col gap-6">
            <div className="w-80 h-20 lg:h-44 rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
              <img
                alt="Property"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              />
            </div>
            <div className="w-80 h-20 lg:h-44 rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
              <img
                alt="Property"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                src="https://www.adanirealty.com/-/media/project/realty/blogs/types-of-residential-properties.ashx"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperty;