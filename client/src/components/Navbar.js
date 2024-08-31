import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, Badge, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = ({ cartCount, userName, onLogout }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate(); // Use useNavigate hook

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    // Perform logout logic, like clearing tokens or user data
    if (onLogout) {
      onLogout();
    }
    navigate('/login'); // Use navigate to redirect
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <IconButton onClick={handleDrawerToggle} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <CloseIcon />
      </IconButton>
      <List>
        {['Home', 'CATEGORIES', 'Products'].map((page) => (
          <ListItem button key={page} component={RouterLink} to={`/${page.toLowerCase()}`}>
            <ListItemText primary={page} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
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

            {/* Hamburger menu button for mobile view */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Links for desktop view */}
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

            {/* Cart and User section */}
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
              <Button color="inherit" component={RouterLink} to="/cart">
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </Button>
              {userName ? (
                <>
                  <Typography variant="h6" sx={{ ml: 2 }} startIcon={<PersonIcon />}>
                    {userName}
                  </Typography>
                  <br/>
                  <Button color="inherit" onClick={handleLogout}  startIcon={<PersonIcon />} sx={{border: 'solid' , marginLeft: 5}}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button color="inherit" startIcon={<PersonIcon />} component={RouterLink} to="/login">
                    Login
                  </Button>
                  <Button color="inherit" startIcon={<PersonIcon />} component={RouterLink} to="/signup">
                    SIGN IN
                  </Button>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
