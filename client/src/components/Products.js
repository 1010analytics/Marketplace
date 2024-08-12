import React from 'react';
import { Container, Typography } from '@mui/material';

const Products = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom sx={{ mt: 4 }}>
        Our Products
      </Typography>
      <Typography variant="body1">
        This is the products page. Add your product listings here.
      </Typography>
    </Container>
  );
};

export default Products;