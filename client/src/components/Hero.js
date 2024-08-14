import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './Home'; // Assuming you've moved your hero section to a separate component
import Promotions from './Promotions';
import Categories from './Categories';
import TestimonialSection from './TestimonialSection';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';

const Hero = () => {
  return (
    <Box>
      <HeroSection />
      <Promotions />
      <Categories />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </Box>
  );
};

export default Hero;