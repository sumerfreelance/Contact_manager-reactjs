import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
  width: '98vw',
  height: '320px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
  boxSizing: 'border-box',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  overflowY: 'auto',
  position: 'relative',
  top: '3rem',
});

const StyledTextField = styled(TextField)({
  margin: '0.5rem 0',
  width: '100%',
});

function LoginPage() {
  return (
    <StyledBox>
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <StyledTextField
        variant="outlined"
        label="Email"
        type="email"
        required
      />
      <StyledTextField
        variant="outlined"
        label="Password"
        type="password"
        required
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: '1rem', width: '100%' }}
      >
        Login
      </Button>
    </StyledBox>
  );
}

export default LoginPage;
