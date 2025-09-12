import React from 'react';
import { MapPin, Star } from 'lucide-react';

interface PropertyListingsProps {
  type: 'sale' | 'rent';
}

const PropertyListings: React.FC<PropertyListingsProps> = ({ type }) => {
  const properties = [
    {
      id: 1,
      name: 'Lester Hackett',
      location: 'Andersonfurt, New Jersey',
      rating: '4.7/5',
      price: type === 'sale' ? '$212,345' : '$1,746/month',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'Karl Rodriguez',
      location: 'Joelstad, Kansas',
      rating: '4.1/5',
      price: type === 'sale' ? '$237,035' : '$1,992/month',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      name: 'Claudia Waters',
      location: 'Weimannberg, Arizona',
      rating: '4.5/5',
      price: type === 'sale' ? '$261,725' : '$2,238/month',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      name: 'Dora Nikolaus',
      location: 'Ladariusmouth, Illinois',
      rating: '4.9/5',
      price: type === 'sale' ? '$286,415' : '$2,484/month',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const title = type === 'sale' 
    ? 'Best Properties Available For Sale'
    : 'Find The Perfect Rental Home';
  
  const description = type === 'sale'
    ? 'Browse our top-rated properties for sale, featuring premium listings tailored to your needs. Find your dream home today!'
    : 'Browse our top-rated properties for rent, featuring premium listings tailored to your needs. Find your dream home today!';
  
  const buttonText = type === 'sale' 
    ? 'View More Properties'
    : 'View All Rentals';

  return (
    <section className="mt-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1E3A8A] mb-1">
            {title}
          </h2>
          <p className="text-gray-600 text-base md:text-[1.07rem] max-w-[600px]">
            {description}
          </p>
        </div>
        <button className="bg-[#1E3A8A] text-white px-5 py-4 rounded-full shadow hover:bg-blue-900 transition md:mt-0 mt-4">
          {buttonText}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-7">
        {properties.map((property) => (
          <div 
            key={property.id}
            className="bg-[#F1F1F1] rounded-[18px] shadow-md border border-gray-200 hover:shadow-lg transition-all flex flex-col overflow-hidden h-auto max-w-sm w-full mx-auto sm:mx-0"
          >
            <div className="p-[10px]">
              <img
                alt={property.name}
                className="w-full h-[200px] sm:h-48 md:h-52 lg:h-52 object-cover rounded-[14px]"
                src={property.image}
              />
            </div>
            
            <div className="px-4 pb-4 flex-1 mt-4 flex flex-col">
              <div className="flex items-center text-xs text-gray-400 mb-1">
                <MapPin className="w-3 h-3 mr-1" />
                {property.location}
                <span className="ml-auto flex items-center gap-1 text-[#979797] text-[16px]">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {property.rating}
                </span>
              </div>
              
              <div className="text-[16px] mb-2 text-[#1E1E1E]">
                Beautiful {property.name} located in {property.location.split(',')[0]}. Modern amenities and prime location.
              </div>
              
              <div className="flex flex-col sm:flex-row items-end justify-between mt-1 gap-3 sm:gap-0">
                <button className="bg-[#1E3A8A] text-white text-sm px-6 py-2 font-semibold rounded-[31px] shadow hover:bg-blue-900 transition w-full sm:w-auto text-center">
                  {type === 'sale' ? 'Buy Now' : 'Rent Now'}
                </button>
                <div className="text-lg whitespace-nowrap sm:ml-4 text-center sm:text-right w-full sm:w-auto text-[#222222]">
                  {property.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyListings;