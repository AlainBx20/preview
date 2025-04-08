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
  GitHub,
  Language,
  Edit,
} from '@mui/icons-material';
import { auth } from '../config/firebase';

const Projects = () => {
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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB',
      image: 'https://images.pexels.com/photos/5638601/pexels-photo-5638601.jpeg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://ecommerce-demo.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      tags: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://task-manager-demo.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website with animations and responsive design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      tags: ['React', 'Framer Motion', 'Material-UI'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://portfolio-demo.com',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'transparent' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
            <Typography variant="h5" component={motion.div} whileHover={{ scale: 1.05 }} sx={{ color: 'white' }}>
              Projects
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
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
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
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.tags.map((tag, tagIndex) => (
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
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button
                        size="small"
                        startIcon={<GitHub />}
                        href={project.github}
                        target="_blank"
                        sx={{
                          color: 'white',
                          '&:hover': {
                            bgcolor: 'primary.main',
                          },
                        }}
                      >
                        GitHub
                      </Button>
                      <Button
                        size="small"
                        startIcon={<Language />}
                        href={project.demo}
                        target="_blank"
                        sx={{
                          color: 'white',
                          '&:hover': {
                            bgcolor: 'primary.main',
                          },
                        }}
                      >
                        Live Demo
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

export default Projects; 