import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';

const AuthNav = ({ isLogin }) => {
  return (
    <Box sx={{ textAlign: 'center', mt: 2 }}>
      <Typography variant="body2" color="text.secondary">
        {isLogin ? "Don't have an account? " : 'Already have an account? '}
        <Link
          component={RouterLink}
          to={isLogin ? '/register' : '/login'}
          sx={{
            color: 'primary.main',
            textDecoration: 'none',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '2px',
              bottom: '-2px',
              left: 0,
              background: 'linear-gradient(90deg, #6366f1, #ec4899)',
              transform: 'scaleX(0)',
              transformOrigin: 'right',
              transition: 'transform 0.3s ease',
            },
            '&:hover::after': {
              transform: 'scaleX(1)',
              transformOrigin: 'left',
            },
          }}
        >
          {isLogin ? 'Sign Up' : 'Sign In'}
        </Link>
      </Typography>
    </Box>
  );
};

export default AuthNav; 