import React, { useState } from 'react';
import { Menu, X, Search, Home,ChevronDown, MapPin, ArrowUpRight, Bookmark } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";

/* ----------------------------
   Buy Page Component
----------------------------- */
const BuyPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Buy", path: "/buy" },
    { name: "Rent", path: "/" },
    { name: "Sell", path: "/" },
    { name: "About Us", path: "/" },
    { name: "Contact Us", path: "/" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ✅ Navbar */}
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

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`hover:text-blue-600 transition-colors duration-200 pb-1 border-b-2 ${
                    location.pathname === item.path
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent"
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
            className="hidden lg:flex text-white px-6 py-2 rounded-full font-medium bg-[#1E3A8A] hover:bg-blue-800 transition-colors duration-200 items-center space-x-2"
          >
            <span>Login / Register</span>
            <div className="w-4 h-4 text-white">→</div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block hover:text-blue-600 ${
                      location.pathname === item.path ? "text-blue-600" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center block text-white px-6 py-2 rounded-full font-medium bg-[#1E3A8A] hover:bg-blue-800"
                >
                  Login / Register
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* ✅ Page Content */}
      <main className="flex-1">
        <Hero />
        <SearchFilters />
        <FeaturedProperties />
      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

/* ----------------------------
   Properties Data
----------------------------- */
const properties = [
  {
    id: 1,
    image: "	https://picsum.photos/seed/rko0Qcmc/1736/389",
    location: "Lester Hackett, Andersonfurt",
    description: "Beautiful Lester Hackett located in Andersonfurt, New Jersey. Modern amenities and prime location.",
    price: "$212,345"
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/PUxkFA82t/3417/3616",
    location: "Karl Rodriguez, Joelstad",
    description: "Beautiful Karl Rodriguez located in Joelstad, Kansas. Modern amenities and prime location.",
    price: "$237,035"
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/f7QxR7/1350/2760",
    location: "Claudia Waters, Weimannberg",
    description: "Beautiful Claudia Waters located in Weimannberg, Arizona. Modern amenities and prime location.",
    price: "$286,415"
  },{
    id: 4,
    image: "	https://picsum.photos/seed/vcPjl1/3961/3147",
    location: "Dora Nikolaus, Ladariusmouth",
    description: "Beautiful Dora Nikolaus located in Ladariusmouth, Illinois. Modern amenities and prime location.",
    price: "$212,345"
  },{
    id: 5,
    image: "https://picsum.photos/seed/05BmWgUeW/1187/320",
    location: "Dorothy Bradtke PhD, New Lavon",
    description: "Beautiful Dorothy Bradtke PhD located in New Lavon, Delaware. Modern amenities and prime location.",
    price: "$311,105"
  },{
    id: 6,
    image: "https://picsum.photos/seed/JV5obIqtXI/903/3701",
    location: "Sophie Hartmann, North Jamarcusborough",
    description: "Beautiful Sophie Hartmann located in North Jamarcusborough, Illinois. Modern amenities and prime location.",
    price: "$335,795"
  },{
    id: 7,
    image: "https://picsum.photos/seed/1HFUN1H/734/393",
    location: "Oliver Strosin, San Juan",
    description: "Beautiful Oliver Strosin located in San Juan, North Carolina. Modern amenities and prime location.",
    price: "$360,485"
  },{
    id: 8,
    image: "	https://picsum.photos/seed/ZluhZ0w/336/2299",
    location: "Glenn Romaguera II, Rennercester",
    description: "Beautiful Glenn Romaguera II located in Rennercester, Iowa. Modern amenities and prime location.",
    price: "$385,175"
  },{
    id: 9,
    image: "	https://picsum.photos/seed/vWktFu5B8/1707/957",
    location: "Victoria Jacobs MD, New Eleazar",
    description: "BBeautiful Victoria Jacobs MD located in New Eleazar, Virginia. Modern amenities and prime location.",
    price: "$409,865"
  },{
    id: 10,
    image: "	https://picsum.photos/seed/f7QxR7/1350/2760",
    location: "Miss Leslie Effertz, Uliseston",
    description: "Beautiful Miss Leslie Effertz located in Uliseston, Arkansas. Modern amenities and prime location.",
    price: "$434,555"
  },{
    id: 11,
    image: "	https://picsum.photos/seed/1gkoM/488/3789",
    location: "Phyllis Daniel-Graham, Olathe",
    description: "Beautiful Phyllis Daniel-Graham located in Olathe, Nebraska. Modern amenities and prime location.",
    price: "$459,245"
  },{
    id: 12,
    image: "	https://picsum.photos/seed/rIrYq5/396/872",
    location: "Angelina Prohaska, New Malachiville",
    description: "Beautiful Angelina Prohaska located in New Malachiville, Wyoming. Modern amenities and prime location.",
    price: "$483,935"
  },{
    id: 13,
    image: "https://picsum.photos/seed/zW0Sb/352/328",
    location: "Nelson Huel, Champaign",
    description: "Beautiful Nelson Huel located in Champaign, Florida. Modern amenities and prime location.",
    price: "$508,625"
  },{
    id: 14,
    image: "	https://picsum.photos/seed/Qsudpw4/1202/3097",
    location: "Carla Bogisich MD, Yesseniaborough",
    description: "Beautiful Carla Bogisich MD located in Yesseniaborough, Oregon. Modern amenities and prime location.",
    price: "$533,315"
  },{
    id: 15,
    image: "Thomas Marks, Steuberfur",
    location: "Lester Hackett, Andersonfurt",
    description: "Beautiful Thomas Marks located in Steuberfurt, Alaska. Modern amenities and prime location.",
    price: "$558,005"
  },{
    id: 16,
    image: "https://picsum.photos/seed/RHEcxsWe/820/1879",
    location: "Mr. Gerardo Bins, North Miracle",
    description: "Beautiful Lester Hackett located in Andersonfurt, New Jersey. Modern amenities and prime location.",
    price: "$582,695"
  },{
    id: 17,
    image: "	https://picsum.photos/seed/vcPjl1/3961/3147",
    location: "Henry Lakin PhD, North Cierra",
    description: "Beautiful Henry Lakin PhD located in North Cierra, Washington. Modern amenities and prime location.",
    price: "$607,385"
  },{
    id: 18,
    image: "	https://picsum.photos/seed/ZluhZ0w/336/2299",
    location: "Erica Carroll, Kent",
    description: "Beautiful Erica Carroll located in Kent, South Dakota. Modern amenities and prime location.",
    price: "$632,075"
  },{
    id: 19,
    image: "https://picsum.photos/seed/f7QxR7/1350/2760",
    location: "Ms. Cecelia Kertzmann, West Hunterstead",
    description: "Beautiful Ms. Cecelia Kertzmann located in West Hunterstead, New Hampshire. Modern amenities and prime location.",
    price: "$656,765"
  },{
    id: 20,
    image: "	https://picsum.photos/seed/1gkoM/488/3789",
    location: "Christina Langosh, Mayaworth",
    description: "Beautiful Christina Langosh located in Mayaworth, Rhode Island. Modern amenities and prime location.",
    price:"$681,455"},{
    id: 21,
    image: "https://picsum.photos/seed/rIrYq5/396/872",
    location: "Julia Cronin, Kuvaliston",
    description: "Beautiful Julia Cronin located in Kuvaliston, Louisiana. Modern amenities and prime location.",
    price:"$206,145"},{
    id: 22,
    image: "https://picsum.photos/seed/Qsudpw4/1202/3097",
    location: "Stella Lehner III, North Jaceshire",
    description: "Beautiful Stella Lehner III located in North Jaceshire, Montana. Modern amenities and prime location.",
    price:"$230,835"},{
    id: 23,
    image: "https://picsum.photos/seed/rko0Qcmc/1736/389",
    location: "Gerardo Stoltenberg V, Pasadena",
    description: "Beautiful Gerardo Stoltenberg V located in Pasadena, Wyoming. Modern amenities and prime location.",
    price:"$255,525"},{
    id: 24,
    image: "https://picsum.photos/seed/PUxkFA82t/3417/3616",
    location: "Susan Collins, Galveston",
    description: "Beautiful Susan Collins located in Galveston, California. Modern amenities and prime location.",
    price:"$280,215"},{
    id: 25,
    image: "https://picsum.photos/seed/JV5obIqtXI/903/3701",
    location: "Christy Leuschke, Breannashire",
    description: "Beautiful Christy Leuschke located in Breannashire, California. Modern amenities and prime location.",
    price:"$304,905"}
  // ... keep your other properties here ...
];

/* ----------------------------
   Hero Section
----------------------------- */
const Hero = () => (
  <div className="w-full max-w-[90vw] md:max-w-[85vw] lg:max-w-[75vw] mx-auto mt-6 mb-16">
    <section className="relative w-full h-[320px] md:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden">
      <div className="w-full h-full bg-cover bg-center relative">
        <img
          alt="Modern Home"
          className="w-full h-full object-cover object-center"
          src="https://real-estate-black-kappa.vercel.app/img/hero-img2.jpg"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 w-full flex flex-col items-start px-6 md:px-12 pb-12 md:pb-20 z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white text-left">
            Featured Properties For Sale
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-0 text-white opacity-90 text-left">
            Discover, Buy, or Rent Verified Properties with Ease
          </p>
        </div>
      </div>
    </section>
  </div>
);

/* ----------------------------
   Search Filters
----------------------------- */
const SearchFilters = () => (
  <div className="bg-transparent md:bg-white rounded-full flex flex-col md:flex-row justify-between items-center gap-4 mt-[-40px] px-4 md:px-10 py-4 max-w-5xl mx-auto w-full shadow-lg z-20 relative">
    {/* Property Type */}
    <div className="relative w-full md:w-[220px] h-[56px]">
      <img alt="rent"src="	https://real-estate-black-kappa.vercel.app/img/rent.svg"className="pointer-events-none absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"/>
      <select className="appearance-none w-full h-full bg-white border border-gray-300 rounded-full pl-11 pr-10 text-gray-700 font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition hover:border-gray-400">
        <option>For Rent</option>
        <option>For Sale</option>
        <option>For Lease</option>
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>

    {/* House Type */}
    <div className="relative w-full md:w-[220px] h-[56px]">
      <img alt="rent"src="	https://real-estate-black-kappa.vercel.app/img/house.svg"className="pointer-events-none absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"/>
      <select className="appearance-none w-full h-full bg-white border border-gray-300 rounded-full pl-11 pr-10 text-gray-700 font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition hover:border-gray-400">
        <option>House</option>
        <option>Apartment</option>
        <option>Condo</option>
        <option>Villa</option>
        <option>Studio</option>
        <option>Townhouse</option>
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>

    {/* Location */}
    <div className="relative w-full md:w-[220px] h-[56px]">
      <img alt="rent"src="	https://real-estate-black-kappa.vercel.app/img/house.svg"className="pointer-events-none absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"/>
      <select className="appearance-none w-full h-full bg-white border border-gray-300 rounded-full pl-11 pr-10 text-gray-700 font-medium text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition hover:border-gray-400">
        <option>India</option>
        <option>USA</option>
        <option>Canada</option>
        <option>United Kingdom</option>
        <option>Indonesia</option>
         <option>Australia</option>
        
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>

    {/* Search Button */}
    <button className="bg-[#1E3A8A] text-white font-semibold px-8 md:px-12 h-[56px] rounded-full hover:bg-blue-800 transition text-lg shadow-md min-w-[200px] flex items-center justify-center w-full md:w-auto">
      Find Property
    </button>
  </div>
);

/* ----------------------------
   Property Card
----------------------------- */
const PropertyCard = ({ property }: { property: any }) => (
  <article className="relative flex flex-col items-center overflow-visible">
    <img
      className="w-full h-56 md:h-64 object-cover rounded-2xl"
      src={property.image}
      alt={property.location}
    />
    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[90%] md:w-[80%] bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center z-10">
      <div className="flex items-center justify-between w-full mb-2">
        <div className="flex items-center text-gray-900 font-semibold text-base">
          <MapPin className="w-5 h-5 text-blue-700 mr-2" />
          {property.location}
        </div>
        <Bookmark className="w-5 h-5 text-gray-400 hover:text-blue-700 cursor-pointer transition-colors" />
      </div>
      <p className="text-sm text-gray-600 mb-3 text-justify leading-snug">
        {property.description}
      </p>
      <hr className="w-full border-t-2 border-gray-200 mb-3" />
      <div className="flex flex-col md:flex-row items-center justify-between w-full font-bold text-gray-900 text-lg gap-3 md:gap-0">
        <span>{property.price}</span>
        <button className="bg-[#1E3A8A] font-semibold text-white text-sm px-5 py-2 rounded-full hover:bg-blue-800 transition w-full md:w-auto">
          Know More
        </button>
      </div>
    </div>
  </article>
);

/* ----------------------------
   Featured Properties
----------------------------- */
const FeaturedProperties = () => (
  <section className="w-[90%] max-w-7xl mx-auto px-4 py-12 mb-20">
    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0">
      <h2 className="text-3xl font-bold text-gray-900">Featured Property</h2>
      <button className="text-blue-700 font-medium border border-blue-700 rounded-full px-6 py-3 hover:bg-blue-700 hover:text-white transition-all duration-300 flex items-center gap-2">
        See 268 New Projects
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-40 w-full mx-auto overflow-visible">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  </section>
);

/* ----------------------------
   Footer
----------------------------- */
const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#1E3A8ACC] text-white pt-14 pb-4 w-full">
      <div className="flex flex-col items-center justify-center w-full px-4">
        <h2 className="text-3xl font-bold mb-5 text-center">Get in Touch with Us</h2>
        <p className="text-xl mb-8 text-center font-normal">
          Subscribe now for exclusive<br />property insights and deals!
        </p>
        <form onSubmit={handleSubmit} className="w-full flex justify-center mb-10 px-2 sm:px-0">
          <div className="flex flex-col sm:flex-row items-center w-full max-w-full sm:max-w-xl bg-[#D9D9D9] rounded-[16px] sm:rounded-full px-3 sm:px-4 py-4 sm:py-2 gap-3 sm:gap-0">
            <input
              className="w-full px-4 py-3 sm:px-3 sm:py-3 rounded-[12px] sm:rounded-full bg-transparent text-gray-900 text-lg outline-none border-none font-medium placeholder-gray-600"
              placeholder="Enter your email"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="w-full sm:w-auto px-7 py-3 sm:py-2 rounded-[12px] sm:rounded-full bg-[#1E3A8A] text-white text-lg border-none shadow-none hover:bg-blue-800 transition-colors">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="w-full py-6 px-6 sm:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img 
              src="https://real-estate-black-kappa.vercel.app/img/logo.svg" 
              alt="App Logo" 
              className="w-8 h-8 object-contain" />
          <span className="font-bold text-xl">PropBot</span>
        </div>
        <div className="flex justify-center items-center gap-6 flex-wrap text-sm">
          <span className="cursor-pointer hover:underline">For Sale</span>
          <span className="cursor-pointer hover:underline">Rentals</span>
          <span className="cursor-pointer hover:underline">New Projects</span>
          <span className="cursor-pointer hover:underline">Property News</span>
        </div>
        <div className="text-sm text-center sm:text-right">
          ©2025 Propbot. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default BuyPage;
