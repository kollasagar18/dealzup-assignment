import React from 'react';
import { MapPin, Star } from 'lucide-react';

interface PropertyListingsProps {
  type: 'sale' | 'rent';
}

const PropertyListings: React.FC<PropertyListingsProps> = ({ type }) => {
  // 🔹 Separate properties for Sale
  const saleProperties = [
    {
      id: 1,
      name: 'Lester Hackett',
      location: 'Andersonfurt, New Jersey',
      rating: '4.7/5',
      price: '$212,345',
      image: 'https://picsum.photos/seed/rko0Qcmc/1736/389'
    },
    {
      id: 2,
      name: 'Karl Rodriguez',
      location: 'Joelstad, Kansas',
      rating: '4.1/5',
      price: '$237,035',
      image: 'https://picsum.photos/seed/house-sale-1/600/400'
    },
    {
      id: 3,
      name: 'Claudia Waters',
      location: 'Weimannberg, Arizona',
      rating: '4.5/5',
      price: '$261,725',
      image: 'https://picsum.photos/seed/house-sale-2/600/400'
    },
    {
      id: 4,
      name: 'Dora Nikolaus',
      location: 'Ladariusmouth, Illinois',
      rating: '4.9/5',
      price: '$286,415',
      image: 'https://picsum.photos/seed/house-sale-3/600/400'
    }
  ];


  const rentalProperties = [
    {
      id: 101,
      name: 'Alex Johnson',
      location: 'Miami, Florida',
      rating: '4.3/5',
      price: '$1,746/month',
      image: 'https://picsum.photos/seed/4Xh2OkmJ/2929/2948'
    },
    {
      id: 102,
      name: 'Sophia Brown',
      location: 'Austin, Texas',
      rating: '4.6/5',
      price: '$1,992/month',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQRkVDKX_w5FtJK-zirHHTEtBo0BPWa_oh1L0LbcHXBmJCIWWEtJ5CnOt_2aTwQY9l5rc&usqp=CAU'
    },
    {
      id: 103,
      name: 'Michael Green',
      location: 'Seattle, Washington',
      rating: '4.4/5',
      price: '$2,238/month',
      image: 'https://kumaonplanner.com/wp-content/uploads/2023/03/buy-property-in-uttarakhand-1024x567.jpg'
    },
    {
      id: 104,
      name: 'Emma Wilson',
      location: 'Denver, Colorado',
      rating: '4.8/5',
      price: '$2,484/month',
      image: 'https://www.shernaproperties.com/wp-content/uploads/2023/05/What-are-The-Top-Advantages-of-Purchasing-a-Property-When-You-Are-Young-featured-image.jpg'
    }
  ];

  // Pick properties based on type
  const properties = type === 'sale' ? saleProperties : rentalProperties;

  const title = type === 'sale' 
    ? 'Best Properties Available For Sale'
    : 'Find The Perfect Rental Home';
  
  const description = type === 'sale'
    ? 'Browse our top-rated properties for sale, featuring premium listings tailored to your needs. Find your dream home today!'
    : 'Browse our top-rated rental properties, featuring premium listings tailored to your needs. Find your perfect rental today!';
  
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
