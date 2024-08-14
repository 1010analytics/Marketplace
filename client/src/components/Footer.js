import React from 'react';
import { Container, Grid, Typography, Box, Link } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Google } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: '#212529', 
        color: '#fff', 
        py: 4, 
        px: 2, 
        textAlign: 'left',
        marginTop: 'auto',
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              COMPANY NAME
            </Typography>
            <Typography variant="body2">
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              PRODUCTS
            </Typography>
            <Link href="#" color="inherit" display="block">MDBootstrap</Link>
            <Link href="#" color="inherit" display="block">MDWordPress</Link>
            <Link href="#" color="inherit" display="block">BrandFlow</Link>
            <Link href="#" color="inherit" display="block">Bootstrap Angular</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              USEFUL LINKS
            </Typography>
            <Link href="#" color="inherit" display="block">Your Account</Link>
            <Link href="#" color="inherit" display="block">Become an Affiliate</Link>
            <Link href="#" color="inherit" display="block">Shipping Rates</Link>
            <Link href="#" color="inherit" display="block">Help</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              CONTACT
            </Typography>
            <Typography variant="body2">
              New York, NY 10012, US
            </Typography>
            <Typography variant="body2">
              info@example.com
            </Typography>
            <Typography variant="body2">
              +01 234 567 88
            </Typography>
            <Typography variant="body2">
              +01 234 567 89
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box 
        sx={{
          mt: 3,
          borderTop: '1px solid #333',
          pt: 2,
          width: '100%',
          textAlign: 'center'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Link href="#" color="inherit" sx={{ mx: 1 }}><Facebook /></Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}><Twitter /></Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}><Google /></Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}><LinkedIn /></Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}><Instagram /></Link>
        </Box>
        <Typography variant="body2">
          © 2020 Copyright: MDBootstrap.com
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
