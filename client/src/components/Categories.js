import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Grid,
  Button,
  IconButton,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Fruits from '../images/fruit.png';
import Dairy from '../images/dairy.jpg';
import Snacks from '../images/snack.webp';
import Meat from '../images/fish.jpg';
import Bread from '../images/bakery.jpg';
import Seafood from '../images/seafood.jpg';
import FrozenFood from '../images/Frozen-Foods.jpg';
import Beverage from '../images/beverge.jpeg';

const categories = [
  {
    image: Fruits,
    title: 'Fruits & Vegetables',
    price: 10.00,
  },
  {
    image: Dairy,
    title: 'Dairy Products',
    price: 20.00,
  },
  {
    image: Snacks,
    title: 'Snacks & Beverages',
    price: 15.00,
  },
  {
    image: Meat,
    title: 'Meat & Poultry',
    price: 25.00,
  },
  {
    image: Bread,
    title: 'Bakery & Breads',
    price: 5.00,
  },
  {
    image: Seafood,
    title: 'Seafood',
    price: 30.00,
  },
  {
    image: FrozenFood,
    title: 'Frozen Foods',
    price: 12.00,
  },
  {
    image: Beverage,
    title: 'Beverages',
    price: 8.00,
  },
];

const Categories = ({ onAddToCart }) => {
  return (
    <Box sx={{ py: 4, backgroundColor: '#f5f5f5' }}>
      <Box sx={{ mb: 2, px: 2 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Categories
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ px: 2 }}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'center',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                padding: '8px',
              }}
            >
              <CardMedia
                component="img"
                image={category.image}
                alt={category.title}
                sx={{ height: '180px', objectFit: 'cover', width: '100%' }}
              />
              <Box sx={{ padding: '8px 8px 0px 8px' }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {category.title}
                </Typography>
                <Typography variant="body1" color="textPrimary" sx={{ mb: 1 }}>
                  ${category.price}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <IconButton aria-label="wishlist" size="small">
                    <FavoriteBorderIcon fontSize="small" />
                  </IconButton>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<ShoppingCartIcon fontSize="small" />}
                    onClick={() => onAddToCart(category)}
                    sx={{ fontSize: '0.875rem', padding: '4px 8px' }}
                  >
                    Add
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
