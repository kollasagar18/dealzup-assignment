// src/pages/Home.jsx
import {
  Search,
  Home as HomeIcon,
  Lock,
  Bot,
  Building2,
  MapPin,
  Star,
} from "lucide-react";
import Button from "../components/ui/button"; // <- relative import to the new button

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Hero Property"
          className="w-full h-[500px] object-cover rounded-b-2xl"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Find Your Dream Home in One Click!
          </h1>
          <p className="mt-2 text-lg">Discover, Buy, or Rent Verified Properties with Ease.</p>

          {/* Search Bar */}
          <div className="bg-white p-3 rounded-full shadow-lg flex items-center gap-2 mt-6 w-full max-w-3xl">
            <input
              type="text"
              placeholder="Search Location..."
              className="flex-1 px-4 py-2 rounded-full text-gray-700 outline-none"
            />
            <Button className="rounded-full">List Your Property</Button>
          </div>

          {/* Filters */}
          <div className="bg-white mt-4 p-3 rounded-full shadow-lg flex gap-2 flex-wrap justify-center">
            <select className="px-4 py-2 rounded-full border">
              <option>For Rent</option>
              <option>For Sale</option>
            </select>
            <select className="px-4 py-2 rounded-full border">
              <option>House</option>
              <option>Apartment</option>
            </select>
            <select className="px-4 py-2 rounded-full border">
              <option>Indonesia</option>
              <option>USA</option>
              <option>India</option>
            </select>
            <Button className="rounded-full">Find Property</Button>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-900">What We Do?</h2>
        <p className="text-gray-600 mt-2 mb-8">Helping you find, buy, and rent the perfect property with ease.</p>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow">
            <HomeIcon className="mx-auto text-blue-600" size={32} />
            <h3 className="font-semibold mt-3">Buy & Sell Properties</h3>
            <p className="text-sm text-gray-600 mt-2">Find verified homes or list your property easily.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <Building2 className="mx-auto text-blue-600" size={32} />
            <h3 className="font-semibold mt-3">Find Rental Homes</h3>
            <p className="text-sm text-gray-600 mt-2">Browse thousands of rental options suited to your needs.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <Bot className="mx-auto text-blue-600" size={32} />
            <h3 className="font-semibold mt-3">Smart AI Property Search</h3>
            <p className="text-sm text-gray-600 mt-2">Get recommendations based on budget & location.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <Lock className="mx-auto text-blue-600" size={32} />
            <h3 className="font-semibold mt-3">Safe & Secure</h3>
            <p className="text-sm text-gray-600 mt-2">Verified listings & secure deals for peace of mind.</p>
          </div>
        </div>
      </section>

      {/* Featured Property */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="flex justify-between items-center max-w-6xl mx-auto mb-6">
          <h2 className="text-2xl font-bold text-blue-900">Featured Property</h2>
          <Button variant="outline">See 268 New Projects</Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["house1", "house2", "house3"].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                alt="Featured"
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 flex items-center gap-1"><MapPin size={14} /> New York, NY</p>
                <div className="flex items-center gap-1 text-yellow-500"><Star size={14} /> 4.5/5</div>
                <p className="mt-2 text-gray-700">Spacious 3BHK apartment in prime location.</p>
                <div className="mt-4 flex justify-between items-center">
                  <Button>Buy Now</Button>
                  <span className="font-bold text-lg">$450,000</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ... rest of page (sale/rent/cta/info/newsletter) - keep as you had it ... */}
    </div>
  );
}
