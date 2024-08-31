import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Divider,
  IconButton,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cartItems, setCartItems, onCheckout }) => {
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncreaseQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((i) =>
        i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const handleDecreaseQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((i) =>
        i.title === item.title && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
    );
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        cartItems.map((item, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Box display="flex" alignItems="center">
                <Box sx={{ width: '100px', height: '100px', mr: 2 }}>
                  <img
                    src={item.image} // Assuming each item has an image property
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
                <Box flex="1">
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body1">
                    Price: ${item.price.toFixed(2)}
                  </Typography>
                  <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                    <Typography variant="body1" sx={{ mr: 2 }}>
                      Quantity:
                    </Typography>
                    <IconButton
                      aria-label="decrease"
                      onClick={() => handleDecreaseQuantity(item)}
                      disabled={item.quantity <= 1}
                    >
                      <Remove />
                    </IconButton>
                    <Typography variant="body1" sx={{ mx: 2 }}>
                      {item.quantity}
                    </Typography>
                    <IconButton
                      aria-label="increase"
                      onClick={() => handleIncreaseQuantity(item)}
                    >
                      <Add />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </CardContent>
            <Divider />
          </Card>
        ))
      )}
      {cartItems.length > 0 && (
        <>
          <Typography variant="h6" sx={{ mt: 4 }}>
            Total Price: ${totalPrice.toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              onCheckout();
              navigate('/checkout');
            }}
            sx={{ mt: 4 }}
          >
            Checkout
          </Button>
        </>
      )}
    </Box>
  );
};

export default CartPage;
