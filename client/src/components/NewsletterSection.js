import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const NewsletterSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 6 }}>
      <Box
        sx={{
          backgroundColor: '#000',
          color: '#fff',
          maxWidth: 600,
          margin: '0 auto',
          padding: '40px',
          textAlign: 'center',
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Stay Updated!
        </Typography>
        <Typography variant="body1" paragraph>
          Sign up for our newsletter to receive the latest news, updates, and special offers directly in your inbox.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            sx={{ 
              flexGrow: 1,
              mr: 2,
              borderRadius: 1,
              backgroundColor: '#fff', // Make the search bar background white
            }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: 1,
              backgroundColor: '#006400', // Primary color
              '&:hover': {
                backgroundColor: '#115293', // Darker shade for hover effect
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsletterSection;
