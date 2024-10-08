import React, { useState } from 'react';
import Image from '../images/login.avif'; // Import your image
import { Typography } from '@mui/material';
import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa'; // Import icons
import { useNavigate } from 'react-router-dom';

function Login({ setUserName }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = () => {
    // For demonstration, assume login is always successful
    setUserName(username);
    navigate('/'); // Redirect to home page or other protected route
  };

  const styles = {
    outerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#ffffff',
    },
    container: {
      display: 'flex',
      width: '1000px',
      border: '2px solid #ccc',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      overflow: 'hidden',
    },
    form: {
      flex: 1,
      padding: '40px',
      backgroundColor: '#fff',
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
      fontWeight: 'bold',
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
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '0 10px 10px 0',
    },
    heading: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '24px',
      marginBottom: '20px',
      color: '#006400',
    },
    icon: {
      marginRight: '10px',
    },
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <div style={styles.form}>
          <Typography variant="h4" style={styles.heading}>
            Welcome to Market Place Store
          </Typography>
          <input
            type="text"
            placeholder="Username"
            style={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            style={styles.button}
            onClick={handleLogin}
          >
            Login
          </button>
          <div style={styles.options}>
            <a href="/forgot-password" style={styles.link}>Forgot Password?</a>
            <div style={styles.social}>
              <button style={{ ...styles.socialButton, ...styles.facebook }}>
                <FaFacebookF style={styles.icon} /> Login with Facebook
              </button>
              <button style={{ ...styles.socialButton, ...styles.twitter }}>
                <FaTwitter style={styles.icon} /> Login with Twitter
              </button>
              <button style={{ ...styles.socialButton, ...styles.google }}>
                <FaGoogle style={styles.icon} /> Login with Google
              </button>
            </div>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <img src={Image} alt="Login Visual" style={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default Login;



// import React, { useState } from 'react';
// import { Typography, Button, TextField, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ setUserName }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // For demonstration, assume login is always successful
//     setUserName(username);
//     navigate('/'); // Redirect to home page or other protected route
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
//       <Typography variant="h4" gutterBottom>
//         Login
//       </Typography>
//       <TextField
//         label="Username"
//         variant="outlined"
//         margin="normal"
//         fullWidth
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <TextField
//         label="Password"
//         type="password"
//         variant="outlined"
//         margin="normal"
//         fullWidth
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleLogin}
//         sx={{ mt: 3 }}
//       >
//         Login
//       </Button>
//     </Box>
//   );
// };

// export default Login;
