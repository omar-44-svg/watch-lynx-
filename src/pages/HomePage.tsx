import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedWatches from '../components/home/FeaturedWatches';
import Authentication from '../components/home/Authentication';
import SellerTypes from '../components/home/SellerTypes';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import CalloutFeatures from '../components/home/CalloutFeatures';
import CTA from '../components/home/CTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedWatches />
      <Authentication />
      <SellerTypes />
      <CalloutFeatures />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;