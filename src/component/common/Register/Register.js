import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
  width: '99vw',  // Full viewport width
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
  boxSizing: 'border-box',  // Ensure padding is included in width
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  overflowY: 'auto',
  position: 'relative',
  top: '3rem', // Adjust top position to account for spacing
});

const FormGroup = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  gap: '1rem',
});

const StyledTextField = styled(TextField)({
  margin: '0.5rem 0',
  width: '100%',
});

const FullWidthTextField = styled(StyledTextField)({
  width: '100%',
});

function RegistrationForm() {
  return (
    <StyledBox>
      <Typography variant="h4" component="h1" gutterBottom>
        Register
      </Typography>

      <FormGroup>
        <StyledTextField
          variant="outlined"
          label="First Name"
          required
        />
        <StyledTextField
          variant="outlined"
          label="Last Name"
          required
        />
      </FormGroup>

      <FullWidthTextField
        variant="outlined"
        label="Email"
        type="email"
        required
      />

      <FormGroup>
        <StyledTextField
          variant="outlined"
          label="Password"
          type="password"
          required
        />
        <StyledTextField
          variant="outlined"
          label="Confirm Password"
          type="password"
          required
        />
      </FormGroup>

      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: '1rem', width: '100%' }}
      >
        Register
      </Button>
    </StyledBox>
  );
}

export default RegistrationForm;
