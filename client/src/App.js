import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Categories from './components/Categories';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Hero from './components/Hero';
import Register from './components/Register';

const theme = createTheme({
  palette: {
    primary: {
      main: '#006400', // Dark green
    },
    secondary: {
      main: '#90EE90', // Light green
    },
    error: {
      main: '#FF0000', // Red for the main heading
    },
  },
});

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [userName, setUserName] = useState("");

  const location = useLocation();  // Hook for getting the current location
  const hideNavbarRoutes = ["/login" ,"/signup"];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!hideNavbarRoutes.includes(location.pathname) && (
        <Navbar cartCount={cartCount} userName={userName} />
      )}
      <Routes>
        <Route path="/" element={<Hero setCartCount={setCartCount} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories setCartCount={setCartCount} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setUserName={setUserName} />} />
        <Route path="/signup" element={<Register setUserName={setUserName} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
