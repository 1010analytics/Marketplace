import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cartItems, onCheckout }) => {
  const navigate = useNavigate();

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
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body1">Quantity: {item.quantity}</Typography>
              <Typography variant="body1">Price: ${item.price}</Typography>
            </CardContent>
            <Divider />
          </Card>
        ))
      )}
      {cartItems.length > 0 && (
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
      )}
    </Box>
  );
};

export default CartPage;
