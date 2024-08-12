import React from 'react';
import { Container, Typography } from '@mui/material';

const Categories = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom sx={{ mt: 4 }}>
        Product Categories
      </Typography>
      <Typography variant="body1">
        This is the categories page. List your product categories here.
      </Typography>
    </Container>
  );
};

export default Categories;