import React from 'react';
import Image from '../images/register.avif'; // Import your image
import { Typography } from '@mui/material';
import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa'; // Import icons

function Register() {
  const styles = {
    outerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#ffffff',
      flexDirection: 'column', // Default to column direction for mobile
      padding: '20px',
      boxSizing: 'border-box',
    },
    container: {
      display: 'flex',
      flexDirection: 'row', // Default to row direction for desktop
      width: '100%',
      maxWidth: '1000px',
      border: '2px solid #ccc',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      overflow: 'hidden',
      backgroundColor: '#fff',
    },
    form: {
      flex: 1,
      padding: '40px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#006400',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      marginBottom: '10px',
      transition: 'background-color 0.3s, transform 0.3s',
    },
    buttonHover: {
      backgroundColor: '#004d00',
      transform: 'scale(1.05)',
    },
    options: {
      marginTop: '20px',
      textAlign: 'center',
    },
    link: {
      color: '#006400',
      textDecoration: 'none',
      fontWeight: 700
    },
    social: {
      marginTop: '20px',
    },
    socialButton: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.3s, transform 0.3s',
    },
    facebook: {
      backgroundColor: '#3b5998',
      color: 'white',
      '&:hover': {
        backgroundColor: '#2d4373',
        transform: 'scale(1.05)',
      },
    },
    twitter: {
      backgroundColor: '#1DA1F2',
      color: 'white',
      '&:hover': {
        backgroundColor: '#1a91da',
        transform: 'scale(1.05)',
      },
    },
    google: {
      backgroundColor: '#db4437',
      color: 'white',
      '&:hover': {
        backgroundColor: '#c1351d',
        transform: 'scale(1.05)',
      },
    },
    imageContainer: {
      flex: 1,
     
      backgroundColor: '#f8f8f8',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '0 10px 10px 0',
    },
    heading: {
      textAlign: 'center',
      color: '#006400',
      fontWeight: 700,
      fontSize: '24px',
      marginBottom: '20px',
    },
    icon: {
      marginRight: '10px',
    },
    '@media (max-width: 768px)': {
      container: {
        flexDirection: 'column',
      },
      imageContainer: {
        order: 2, // Ensure image is first in mobile view
        width: '100%',
        height: 'auto',
      },
      form: {
        order: 1,
        padding: '20px',
      },
    },
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        
        <div style={styles.form}>
          <Typography variant="h4" style={styles.heading}>
            Register for Market Store Place 
          </Typography>
          <input type="text" placeholder="Full Name" style={styles.input} />
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="text" placeholder="Username" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <input type="password" placeholder="Confirm Password" style={styles.input} />
          <a href="/login"><button style={styles.button}>Register</button></a>
          <Typography variant="h4" style={styles.heading}>
            OR
          </Typography>
          <div style={styles.options}>
            <div style={styles.social}>
              <button style={{ ...styles.socialButton, ...styles.facebook }}>
                <FaFacebookF style={styles.icon} /> Sign up with Facebook
              </button>
              <button style={{ ...styles.socialButton, ...styles.twitter }}>
                <FaTwitter style={styles.icon} /> Sign up with Twitter
              </button>
              <button style={{ ...styles.socialButton, ...styles.google }}>
                <FaGoogle style={styles.icon} /> Sign up with Google
              </button>
            </div>
            <a href="/login" style={styles.link} sx={{color: '#006400' ,}}>Already have an account? Login</a>
          </div>
          
        </div>
        <div style={styles.imageContainer}>
          <img src={Image} alt="Register Visual" style={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default Register;
