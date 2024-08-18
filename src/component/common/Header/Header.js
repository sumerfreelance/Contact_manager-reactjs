import React from 'react';
import { Box, Typography } from '@mui/material';

function Header() {
  return (
    <Box
      sx={{
        height: { xs: '200px', sm: '250px', md: '300px' }, // Responsive height
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url(https://img.freepik.com/free-photo/vibrant-colors-flow-abstract-wave-pattern-generated-by-ai_188544-9781.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723852800&semt=ais_hybrid)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        mt: 2, // Adds free space (margin-top) above the header
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark mask with 40% opacity
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          position: 'relative',
          color: '#fff',
          zIndex: 1, // Ensures the text appears above the mask
          fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' }, // Responsive font size
          textAlign: 'center', // Centers text horizontally
          px: { xs: 2, sm: 4 }, // Adds padding on the x-axis
        }}
      >
        Contact Management System
      </Typography>
    </Box>
  );
}

export default Header;
