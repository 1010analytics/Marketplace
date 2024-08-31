
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
  Collapse,
  IconButton,
  Drawer,
} from '@mui/material';
import { styled } from '@mui/system';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Apple from "../images/apple.jpg";
import Banana from "../images/banana.jpg";
import orange from "../images/orange.jpg";
import spinach from "../images/spinach.webp";
import Brocali from "../images/brocali.jpg";
import Carrot from "../images/carrots.jpg";
import chciken from "../images/chicken.jpg";
import beef from "../images/beef.jpg";
import pork from  "../images/meat.webp";
import wheat from "../images/wholegrains.jpg";
import bread from "../images/longbread.jpg";
import smallbread from "../images/wholebread.jpg";
import chips from "../images/chips.jpg";
import drinks from "../images/coco.jpg";
import cake from "../images/cake.avif";

const ProductContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  marginTop: theme.spacing(10),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const FixedSidebar = styled('div')(({ theme }) => ({
  position: 'fixed',
  width: '25%',
  padding: theme.spacing(2),
  border: '1px solid #ddd',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.shape.borderRadius,
  height: '100vh',
  overflowY: 'auto',
  [theme.breakpoints.down('sm')]: {
    display: 'none', // Hide sidebar by default on mobile
  },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '250px',
    padding: theme.spacing(2),
  },
}));

const ProductGrid = styled(Grid)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  marginLeft: '25%', // Create space for the fixed sidebar
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    width: '100%',
  },
}));

const ProductCard = styled(Card)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  textAlign: 'center',
}));

const CenteredButton = styled(Button)(({ theme }) => ({
  alignSelf: 'center',
  margin: '0 auto',
  marginTop: theme.spacing(1),
}));

const categories = {
  Vegetables: [
    { name: 'Carrot', image: Carrot },
    { name: 'Broccoli', image: Brocali },
    { name: 'Spinach', image: spinach },
  ],
  Fruits: [
    { name: 'Apple', image: Apple },
    { name: 'Banana', image: Banana },
    { name: 'Orange', image: orange },
  ],
  Meat: [
    { name: 'Chicken Breast', image: chciken },
    { name: 'Beef', image: beef },
    { name: 'Pork', image: pork },
  ],
  Bread: [
    { name: 'Whole Wheat', image: wheat },
    { name: 'Sourdough', image: bread },
    { name: 'Baguette', image: smallbread },
  ],
  snacks: [
    { name: 'Chips', image: chips },
    { name: 'Cold Drinks', image: drinks },
    { name: 'Cake', image: cake },
  ],
};

const products = [
  { id: 1, name: 'Carrot', category: 'Vegetables', subCategory: 'Carrot', price: 2, description: 'Fresh carrots', discount: 10, image: Carrot },
  { id: 2, name: 'Apple', category: 'Fruits', subCategory: 'Apple', price: 3, description: 'Crisp apples', discount: 5, image: Apple },
  { id: 3, name: 'Chicken Breast', category: 'Meat', subCategory: 'Chicken Breast', price: 10, description: 'Boneless chicken breast', discount: 15, image: chciken },
  { id: 4, name: 'Whole Wheat Bread', category: 'Bread', subCategory: 'Whole Wheat', price: 4, description: 'Freshly baked whole wheat bread', discount: 0, image: smallbread },
  { id: 5, name: 'Banana', category: 'Fruits', subCategory: 'Banana', price: 1, description: 'Ripe bananas', discount: 20, image: Banana },
  { id: 6, name: 'Broccoli', category: 'Vegetables', subCategory: 'Broccoli', price: 3, description: 'Organic broccoli', discount: 10, image: Brocali },
  { id: 7, name: 'Spinach', category: 'Vegetables', subCategory: 'Spinach', price: 2, description: 'Fresh spinach leaves', discount: 8, image: spinach },
  { id: 8, name: 'Orange', category: 'Fruits', subCategory: 'Orange', price: 2.5, description: 'Juicy oranges', discount: 7, image: orange },
  { id: 9, name: 'Beef', category: 'Meat', subCategory: 'Beef', price: 15, description: 'Premium beef cuts', discount: 10, image: beef },
  { id: 10, name: 'Sourdough Bread', category: 'Bread', subCategory: 'Sourdough', price: 5, description: 'Artisan sourdough bread', discount: 5, image: bread },
  { id: 11, name: 'Chips', category: 'snacks', subCategory: 'Chips', price: 12, description: 'Lays Chips', discount: 5, image: chips },
  { id: 12, name: 'Cold Drinks', category: 'snacks', subCategory: 'Cold Drinks', price: 15, description: 'Cold Drinks', discount: 5, image: drinks },
  { id: 13, name: 'Cake', category: 'snacks', subCategory: 'Cake', price: 6, description: 'Best cake', discount: 5, image: cake },
];

const Product = () => {
  const [priceRange, setPriceRange] = useState([0, 20]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
      setSelectedSubCategories((prev) => prev.filter((subCat) => !categories[category].map((item) => item.name).includes(subCat)));
    } else {
      setSelectedCategories((prev) => [...prev, category]);
    }
  };

  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategories((prev) =>
      prev.includes(subCategory) ? prev.filter((subCat) => subCat !== subCategory) : [...prev, subCategory]
    );
  };

  const filteredProducts = products.filter(
    (product) =>
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      (selectedSubCategories.length === 0 || selectedSubCategories.includes(product.subCategory))
  );

  return (
    <ProductContainer>
      {/* Mobile Drawer */}
      <IconButton
        sx={{ display: { xs: 'block', sm: 'none' } }}
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <MobileDrawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <IconButton onClick={() => setIsDrawerOpen(false)}>
          <CloseIcon />
        </IconButton>
        <Typography sx={{ fontWeight: 'bold', fontSize: 32, color: '#006400', textAlign: 'center' }}>
          Categories
        </Typography>
        {Object.keys(categories).map((category) => (
          <div key={category}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
              }
              label={category}
              sx={{ fontWeight: 'bold', fontSize: 16 }} // Adjusted font style
            />
            <Collapse in={selectedCategories.includes(category)}>
              {categories[category].map((subCategory) => (
                <FormControlLabel
                  key={subCategory.name}
                  control={
                    <Checkbox
                      checked={selectedSubCategories.includes(subCategory.name)}
                      onChange={() => handleSubCategoryChange(subCategory.name)}
                    />
                  }
                  label={subCategory.name}
                  sx={{ fontSize: 14 }} // Adjusted font style
                />
              ))}
            </Collapse>
          </div>
        ))}
        <Typography sx={{ fontWeight: 'bold', fontSize: 32, color: '#006400', textAlign: 'center' }}>
          Price
        </Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={20}
          sx={{ mt: 2 }}
        />
        <CenteredButton
          variant="contained"
          color="success"
          startIcon={<AddShoppingCartIcon />}
          onClick={() => console.log('Products:', filteredProducts)}
        >
          Add to Cart
        </CenteredButton>
      </MobileDrawer>

      {/* Fixed Sidebar */}
      <FixedSidebar>
        <Typography sx={{ fontWeight: 'bold', fontSize: 32, color: '#006400', textAlign: 'center' }}>
          Categories
        </Typography>
        {Object.keys(categories).map((category) => (
          <div key={category}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
              }
              label={category}
              sx={{ fontWeight: 'bold', fontSize: 16 }} // Adjusted font style
            />
            <Collapse in={selectedCategories.includes(category)}>
              {categories[category].map((subCategory) => (
                <FormControlLabel
                  key={subCategory.name}
                  control={
                    <Checkbox
                      checked={selectedSubCategories.includes(subCategory.name)}
                      onChange={() => handleSubCategoryChange(subCategory.name)}
                    />
                  }
                  label={subCategory.name}
                  sx={{ fontSize: 14 }} // Adjusted font style
                />
              ))}
            </Collapse>
          </div>
        ))}
        <Typography sx={{ fontWeight: 'bold', fontSize: 32, color: '#006400', textAlign: 'center' }}>
          Price
        </Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={20}
          sx={{ mt: 2 }}
        />
        <CenteredButton
          variant="contained"
          color="success"
          startIcon={<AddShoppingCartIcon />}
          onClick={() => console.log('Products:', filteredProducts)}
        >
          Add to Cart
        </CenteredButton>
      </FixedSidebar>

      {/* Product Grid */}
      <ProductGrid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard>
              <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={product.image}
                title={product.name}
              />
              <CardContent>
                <Typography variant="h6" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  ${product.price.toFixed(2)}
                </Typography>
              </CardContent>
              <CardActions>
                <CenteredButton
                  variant="contained"
                  color="success"
                  startIcon={<AddShoppingCartIcon />}
                >
                  Add to Cart
                </CenteredButton>
              </CardActions>
            </ProductCard>
          </Grid>
        ))}
      </ProductGrid>
    </ProductContainer>
  );
};

export default Product;
