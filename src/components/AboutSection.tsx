import React from 'react';
import { DollarSign, Users, MapPin } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: (<img
          src="https://real-estate-black-kappa.vercel.app/img/budget.svg"
          className="w-14 h-14 object-contain"
        />
      ),
      title: 'Budget Friendly',
      description: 'Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.'
    },{
      icon: (<img
          src="https://real-estate-black-kappa.vercel.app/img/trusted.svg"
          className="w-14 h-14 object-contain"
        />
      ),
      title: 'Trusted By Thousand',
      description: 'Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.'
    },{
      icon: (<img
          src="https://real-estate-black-kappa.vercel.app/img/prime-map.svg"
          className="w-14 h-14 object-contain"
        />
      ),
      title: 'Prime Location',
      description: 'Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.'
    }
  ];

  return (
    <section className="mt-20">
      <div className="max-w-7xl mx-auto bg-white flex flex-col md:flex-row items-center md:items-start p-4 md:p-16 gap-8 md:gap-20">
        <div className="relative flex flex-col items-center w-full md:w-auto">
          <img
            alt="Modern House"
            className="w-full md:w-[320px] h-[160px] md:h-[400px] rounded-[10px] shadow-lg border-4 border-white object-cover"
            src="https://real-estate-black-kappa.vercel.app/img/img1.png"
          />
          <img
            alt="Cabin House"
            className="w-full md:w-[320px] h-[130px] md:h-[320px] rounded-[10px] border border-white shadow-lg object-cover mt-4 md:mt-0 static md:absolute md:bottom-[-30px] md:right-[-90px]"
            src="https://real-estate-black-kappa.vercel.app/img/img2.png"
          />
        </div>

        <div className="flex-1 max-w-xl px-2 md:px-0 flex flex-col justify-center h-full mt-6 md:mt-0 md:pl-14">
          <h2 className="text-[#1E3A8A] font-extrabold text-xl md:text-3xl leading-tight mb-8 md:mb-10">
            We Provide Latest Properties <br />
            For Our Valuable Clients
          </h2>
          
          <div className="space-y-6 md:space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-2 md:gap-4 items-start">
                <div className="text-[#1E3A8A] text-2xl md:text-3xl flex items-center pt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg text-[#1E3A8A] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-black text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;