import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './Home';
import Promotions from './Promotions';
import Categories from './Categories';
import TestimonialSection from './TestimonialSection';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';

const Hero = ({ setCartCount }) => {
  return (
    <Box>
      <HeroSection />
      <Promotions />
      <Categories setCartCount={setCartCount} />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </Box>
  );
};

export default Hero;
