import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, Badge } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = ({ cartCount, userName }) => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#006400' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MarketPlace
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {['Home', 'CATEGORIES', 'Products'].map((page) => (
              <Button
                key={page}
                component={RouterLink}
                to={`/${page.toLowerCase()}`}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button color="inherit" component={RouterLink} to="/cart">
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </Button>
            {userName ? (
              <Typography variant="h6" sx={{ ml: 2 }}>
                {userName}
              </Typography>
            ) : (
              <>
                <Button color="inherit" startIcon={<PersonIcon />} component={RouterLink} to="/login">
                  Login
                </Button>
                <Button color="inherit" startIcon={<PersonIcon />} component={RouterLink} to="/signup" >
                  SIGN IN
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
