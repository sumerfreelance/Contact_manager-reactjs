import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#1064C4',
                color: '#fff',
                py: 4,
                mt: 5
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Contact Management System
                        </Typography>
                        <Typography variant="body2">
                            1234 Random Street, City Name, Country 56789
                        </Typography>
                        <Typography variant="body2">
                            Phone: +123 456 7890
                        </Typography>
                        <Typography variant="body2">
                            Email: contact@cmsystem.com
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            About
                        </Typography>
                        <Typography variant="body2">
                            This Contact Management System helps you organize and manage your contacts efficiently.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Links
                        </Typography>
                        <Link href="/" color="inherit" underline="hover" sx={{ display: 'block', mt: 1 }}>
                            Home
                        </Link>
                        <Link href="/about" color="inherit" underline="hover" sx={{ display: 'block', mt: 1 }}>
                            About
                        </Link>
                        <Link href="/login" color="inherit" underline="hover" sx={{ display: 'block', mt: 1 }}>
                            Login
                        </Link>
                        <Link href="/register" color="inherit" underline="hover" sx={{ display: 'block', mt: 1 }}>
                            Register
                        </Link>
                    </Grid>
                </Grid>
                <Box textAlign="center" pt={5}>
                    <Typography variant="body2" color="#fff">
                        © {new Date().getFullYear()} Contact Management System. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
