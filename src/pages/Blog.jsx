import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
  useTheme,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Chip,
  Tooltip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Edit,
  AccessTime,
  Person,
} from '@mui/icons-material';
import { auth } from '../config/firebase';

const Blog = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [user] = useState(auth.currentUser);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const blogPosts = [
    {
      title: 'Getting Started with React and Firebase',
      excerpt: 'Learn how to build a modern web application using React and Firebase...',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      date: '2024-03-15',
      author: 'Alaa Ben Chouikhaa',
      tags: ['React', 'Firebase', 'Web Development'],
      readTime: '5 min read',
    },
    {
      title: 'Building Responsive UIs with Material-UI',
      excerpt: 'A comprehensive guide to creating beautiful and responsive user interfaces...',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      date: '2024-03-10',
      author: 'Alaa Ben Chouikhaa',
      tags: ['Material-UI', 'React', 'UI/UX'],
      readTime: '7 min read',
    },
    {
      title: 'State Management in React Applications',
      excerpt: 'Exploring different state management solutions in React...',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
      date: '2024-03-05',
      author: 'Alaa Ben Chouikhaa',
      tags: ['React', 'Redux', 'State Management'],
      readTime: '6 min read',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'transparent' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
            <Typography variant="h5" component={motion.div} whileHover={{ scale: 1.05 }} sx={{ color: 'white' }}>
              Blog
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  color="inherit"
                  onClick={() => navigate('/home')}
                  sx={{ 
                    color: 'white',
                    bgcolor: 'background.paper',
                    '&:hover': { 
                      bgcolor: 'primary.main',
                      color: 'white',
                    },
                    px: 2,
                    borderRadius: 2,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  onClick={() => navigate('/projects')}
                  sx={{ 
                    color: 'white',
                    bgcolor: 'background.paper',
                    '&:hover': { 
                      bgcolor: 'primary.main',
                      color: 'white',
                    },
                    px: 2,
                    borderRadius: 2,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  Projects
                </Button>
                <Button
                  color="inherit"
                  onClick={() => navigate('/blog')}
                  sx={{ 
                    color: 'white',
                    bgcolor: 'background.paper',
                    '&:hover': { 
                      bgcolor: 'primary.main',
                      color: 'white',
                    },
                    px: 2,
                    borderRadius: 2,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  Blog
                </Button>
                <Button
                  color="inherit"
                  onClick={() => navigate('/contact')}
                  sx={{ 
                    color: 'white',
                    bgcolor: 'background.paper',
                    '&:hover': { 
                      bgcolor: 'primary.main',
                      color: 'white',
                    },
                    px: 2,
                    borderRadius: 2,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  Contact
                </Button>
              </Box>
              <Tooltip title="Menu">
                <IconButton
                  onClick={handleMenu}
                  sx={{
                    color: 'text.primary',
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
              <Avatar
                src={user?.photoURL}
                alt={user?.displayName}
                sx={{ cursor: 'pointer' }}
                onClick={handleMenu}
              />
            </Box>
          </Box>
        </Container>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            minWidth: 200,
            borderRadius: 2,
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
          },
        }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {user?.displayName || 'User'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user?.email}
          </Typography>
        </Box>
        <Divider />
        <MenuItem onClick={() => navigate('/home')}>
          <Edit sx={{ mr: 2 }} />
          Edit Profile
        </MenuItem>
      </Menu>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Grid container spacing={4}>
            {blogPosts.map((post, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 4,
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.image}
                      alt={post.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {post.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {post.excerpt}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {post.tags.map((tag, tagIndex) => (
                          <Chip
                            key={tagIndex}
                            label={tag}
                            size="small"
                            sx={{
                              bgcolor: 'primary.main',
                              color: 'white',
                              '&:hover': {
                                bgcolor: 'primary.dark',
                              },
                            }}
                          />
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'text.secondary' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <Person sx={{ fontSize: 16 }} />
                          <Typography variant="body2">{post.author}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <AccessTime sx={{ fontSize: 16 }} />
                          <Typography variant="body2">{post.readTime}</Typography>
                        </Box>
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button 
                        size="small" 
                        color="primary"
                        sx={{
                          color: 'white',
                          '&:hover': {
                            bgcolor: 'primary.main',
                          },
                        }}
                      >
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Blog; 