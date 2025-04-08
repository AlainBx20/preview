import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase';
import AuthMenu from '../Auth/AuthMenu';
import AuthNav from '../Auth/AuthNav';
import { useNavigate, useLocation } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';

const AuthLayout = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      
      // Only redirect if we're not already on the correct page
      if (user) {
        // If user is logged in and on login/register pages, redirect to home
        if (location.pathname === '/login' || location.pathname === '/register') {
          navigate('/home', { replace: true });
        }
      } else {
        // If user is not logged in and not on login/register pages, redirect to login
        if (location.pathname !== '/login' && location.pathname !== '/register') {
          navigate('/login', { replace: true });
        }
      }
    });

    return () => unsubscribe();
  }, [navigate, location.pathname]);

  if (loading) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          backgroundColor: 'background.default'
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <>
      {user ? <AuthMenu user={user} /> : <AuthNav />}
      {children}
    </>
  );
};

export default AuthLayout; 