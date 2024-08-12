import React from 'react';
import { Container, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom sx={{ mt: 4 }}>
        Contact Us
      </Typography>
      <Typography variant="body1">
        This is the contact page. Add your contact information and form here.
      </Typography>
    </Container>
  );
};

export default Contact;