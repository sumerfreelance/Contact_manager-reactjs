import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { keyframes } from '@mui/system';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const AboutPage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(https://img.freepik.com/free-photo/vibrant-colors-flow-abstract-wave-pattern-generated-by-ai_188544-9781.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723852800&semt=ais_hybrid/random/1920x1080?landscape)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: -1,
        },
        '@media (max-width:600px)': {
          padding: '1rem',
          textAlign: 'center',
        },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 'bold',
          mb: { xs: 1, sm: 2 },
          animation: `${bounce} 2s infinite`,
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
        }}
      >
        About Us
      </Typography>
      <Typography
        variant="h5"
        sx={{ mb: { xs: 2, sm: 4 }, fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}
      >
        We are dedicated to providing the best contact management solutions.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{ padding: { xs: '0.5rem 1rem', sm: '1rem 2rem' } }}
      >
        Learn More
      </Button>
    </Box>
  );
};

export default AboutPage;
