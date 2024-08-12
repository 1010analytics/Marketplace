import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom sx={{ mt: 4 }}>
        About Us
      </Typography>
      <Typography variant="body1">
        This is the about page. Share information about your company here.
      </Typography>
    </Container>
  );
};

export default About;