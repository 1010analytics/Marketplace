import React from 'react';
import Slider from 'react-slick';
import {
  Box,
  Typography,
  Avatar,
} from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonial1 from '../images/Sunny-Lu.png';
import testimonial2 from '../images/Alex-Zinder.png';
import testimonial3 from '../images/Helen-Hai.png';

const testimonials = [
  {
    image: testimonial1,
    name: 'John Doe',
    position: 'Digital Marketing',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    image: testimonial2,
    name: 'John Doe',
    position: 'CEO, Company',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    image: testimonial3,
    name: 'John Doe',
    position: 'Customer',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <Box sx={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        What Our Customers Say
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ 
            backgroundColor: '#f0f8ff', 
            borderRadius: '10px', 
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <Avatar
              src={testimonial.image}
              alt={testimonial.name}
              sx={{ width: 80, height: 80, marginBottom: 2 }}
            />
            <Typography variant="h6" gutterBottom>
              {testimonial.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {testimonial.position}
            </Typography>
            <Typography variant="body1">
              {testimonial.review}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialSection;