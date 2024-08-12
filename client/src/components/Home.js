import React from 'react';
import { Container, Typography, Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import backgroundImage from '../images/background.jpg';

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          color="red" 
          align="center"
          sx={{ fontWeight: 'bold' }} // Make the main heading bold
        >
          Healthy vegetable that you deserve to eat fresh
        </Typography>
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          align="center"
          sx={{ fontWeight: 'bold',color:'white' }} // Make the subheading bold
        >
          We source and sell the very best beef, lamb and pork, sourced with the greatest care from farmer.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="What are you looking..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: 'white',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;