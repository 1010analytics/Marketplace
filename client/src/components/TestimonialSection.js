import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Avatar, Card, CardContent, Rating } from '@mui/material';
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
    rating: 4,
  },
  {
    image: testimonial2,
    name: 'John Doe',
    position: 'CEO, Company',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    rating: 5,
  },
  {
    image: testimonial3,
    name: 'John Doe',
    position: 'Customer',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    rating: 3,
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '50px 0' }}> 
    {/* Background color applied here */}
    <Box sx={{ mb: 2, px: 2 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Customer Reviews
        </Typography>
      </Box>
      <Box sx={{ width: '80%', margin: '0 auto' }}>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ padding: '0 15px' }}>
              <Card 
                sx={{ 
                  padding: '20px', 
                  transition: 'transform 0.3s, box-shadow 0.3s', 
                  '&:hover': {
                    transform: 'translateY(-10px)', 
                    boxShadow: '0 8px 16px rgba(0,0,0,0.3)' 
                  } 
                }} 
              > {/* Hover effect added */}
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <Avatar src={testimonial.image} sx={{ width: 56, height: 56, marginRight: '15px' }} />
                    <Box>
                      <Typography variant="h6">{testimonial.name}</Typography>
                      <Typography variant="body2" color="textSecondary">{testimonial.position}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    "{testimonial.review}"
                  </Typography>
                  <Rating value={testimonial.rating} readOnly />
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default TestimonialSection;
