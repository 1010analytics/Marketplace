import React, { useState } from 'react';
import {
  Typography,
  Slider,
  Button,
  Card,
  CardContent,
  CardActions,
  Checkbox,
  FormControlLabel,
  Grid,
  CardMedia,
} from '@mui/material';
import { styled } from '@mui/system';
import Fruits from '../images/fruit.png';
import Dairy from '../images/dairy.jpg';
import Snacks from '../images/snack.webp';
import Meat from '../images/fish.jpg';
import Bread from '../images/bakery.jpg';
import Seafood from '../images/seafood.jpg';
import FrozenFood from '../images/Frozen-Foods.jpg';
import Beverage from '../images/beverge.jpeg';


const ProductContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
  marginTop: theme.spacing(15), // Adding top margin
}));

const FilterSidebar = styled('div')(({ theme }) => ({
  width: '20%',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const ProductGrid = styled(Grid)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const ProductCard = styled(Card)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const DiscountBadge = styled(Typography)(({ theme }) => ({
  color: 'red',
  fontWeight: 'bold',
}));

const categories = ['Vegetables', 'Fruits', 'Meat', 'Bread'];

const products = [
  { id: 1, name: 'Carrot', category: 'Vegetables', price: 2, description: 'Fresh carrots', discount: 10, image: Fruits },
  { id: 2, name: 'Apple', category: 'Fruits', price: 3, description: 'Crisp apples', discount: 5, image: Dairy },
  { id: 3, name: 'Chicken Breast', category: 'Meat', price: 10, description: 'Boneless chicken breast', discount: 15, image: Snacks },
  { id: 4, name: 'Whole Wheat Bread', category: 'Bread', price: 4, description: 'Freshly baked whole wheat bread', discount: 0, image: Meat },
  { id: 5, name: 'Banana', category: 'Fruits', price: 1, description: 'Ripe bananas', discount: 20, image: Bread },
  { id: 6, name: 'Broccoli', category: 'Vegetables', price: 3, description: 'Organic broccoli', discount: 10, image:  Seafood },
  { id: 7, name: 'FrozenFood', category: 'Vegetables', price: 3, description: 'Organic broccoli', discount: 10, image:  FrozenFood },
];

const Product = () => {
  const [priceRange, setPriceRange] = useState([0, 15]);
  const [selectedCategories, setSelectedCategories] = useState(categories);
  const [cart, setCart] = useState([]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category]
    );
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      selectedCategories.includes(product.category)
  );

  return (
    <ProductContainer>
      <FilterSidebar>
        <Typography variant="h6">Filters</Typography>

        <Typography variant="subtitle1">Categories</Typography>
        {categories.map((category) => (
          <FormControlLabel
            key={category}
            control={
              <Checkbox
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
            }
            label={category}
          />
        ))}

        <Typography variant="subtitle1">Price Range</Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={15}
        />
      </FilterSidebar>

      <ProductGrid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  ${product.price}
                </Typography>
                {product.discount && (
                  <DiscountBadge variant="body1">
                    Discount: {product.discount}%
                  </DiscountBadge>
                )}
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </CardActions>
            </ProductCard>
          </Grid>
        ))}
      </ProductGrid>
    </ProductContainer>
  );
};

export default Product;
