import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './Home'; // Assuming you've moved your hero section to a separate component
import Promotions from './Promotions';

const Hero = () => {
  return (
    <Box>
      <HeroSection />
      <Promotions />
    </Box>
  );
};

export default Hero;