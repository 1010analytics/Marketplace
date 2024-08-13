import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid, Button } from '@mui/material';
import freshDrinks from '../images/fruit.png';
import cheapMeat from '../images/drinks.jpg';
import tastyBread from '../images/meat.webp';
import coffeeBrazil from '../images/bread.jpg';
import milkDiscounts from '../images/milk.jpg';
import coffe from '../images/coffe.jpg'

const promotions = [
  {
    image: freshDrinks,
    discount: '-15%',
    label: 'Fresh Deals',
    title: 'Fresh Deals Await: Shop Now!',
    date: 'From 1 May 2023 00:00 AM',
    tag: 'Discount'
  },
  {
    image: cheapMeat,
    label: 'Free',
    title: 'Natural Fresh Drinks in Our Market',
    date: 'From 1 May 2023 00:00 AM',
    tag: 'Free'
  },
  {
    image: tastyBread,
    discount: '-25%',
    label: 'For All Meat',
    title: 'Cheap Meat from Our Farmers',
    date: 'From 1 May 2023 00:00 AM',
    tag: 'Discount'
  },
  {
    image: coffeeBrazil,
    title: 'Tasty Bread Everyday!',
    date: 'From 1 May 2023 00:00 AM',
    tag: 'Discount'
  },
  {
    image: milkDiscounts,
    label: 'Coffee from Brazil',
    title: 'Quality and Savings Combined!',
    date: 'From 1 May 2023 00:00 AM',
    tag: 'Discount'
  },
  {
    image: coffe,
    title: "Don't Miss Our Discounts for Milk!",
    date: 'From 1 May 2023 00:00 AM',
    tag: 'Discount'
  }
];

const Promotions = () => {
    return (
      <Box sx={{ py: 4, backgroundColor: '#f5f5f5' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, px: 2 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
            Promotions
          </Typography>
          <Button variant="outlined">Show All</Button>
        </Box>
        <Grid container spacing={2} sx={{ px: 2 }}>
          {promotions.map((promo, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative'}}>
                <CardMedia
                  component="img"
                  height="140"
                  image={promo.image}
                  alt={promo.title}
                />
                {promo.discount && (
                  <Typography
                    variant="h6"
                    sx={{
                      position: 'absolute',
                      top: 10,
                      left: 10,
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontWeight: 'bold',
                    }}
                  >
                    {promo.discount}
                  </Typography>
                )}
                {promo.label && (
                  <Typography
                    variant="subtitle2"
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                    }}
                  >
                    {promo.label}
                  </Typography>
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {promo.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {promo.date}
                  </Typography>
                </CardContent>
                {/* <Box sx={{ p: 1, backgroundColor: promo.tag === 'Discount' ? '#e3f2fd' : '#fff3e0' }}>
                  <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold' }}>
                    {promo.tag}
                  </Typography>
                </Box> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default Promotions;