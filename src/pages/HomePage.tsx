import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SearchFilters from '../components/SearchFilters';
import ServicesSection from '../components/ServicesSection';
import FeaturedProperty from '../components/FeaturedProperty';
import PropertyListings from '../components/PropertyListings';
import NewsletterSection from '../components/NewsletterSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-[90%] max-w-[90vw] md:max-w-[85vw] lg:max-w-none mx-auto px-4">
        <HeroSection />
        <SearchFilters />
        <ServicesSection />
        <FeaturedProperty />
        <PropertyListings type="sale" />
        <PropertyListings type="rent" />
        <NewsletterSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;