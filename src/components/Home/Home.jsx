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
  CardActions,
  Chip,
  Tooltip,
} from '@mui/material';
import {
  Logout,
  Menu as MenuIcon,
  Code,
  Build,
  School,
  Work,
  GitHub,
  LinkedIn,
  Twitter,
  Email,
} from '@mui/icons-material';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

const Home = () => {
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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const features = [
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: 'Full Stack Development',
      description: 'Expert in React, Node.js, and modern web technologies',
      tags: ['React', 'Node.js', 'MongoDB', 'Firebase'],
    },
    {
      icon: <Build sx={{ fontSize: 40 }} />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces',
      tags: ['Material-UI', 'Framer Motion', 'Responsive Design'],
    },
    {
      icon: <School sx={{ fontSize: 40 }} />,
      title: 'Education',
      description: 'Continuous learning and skill development',
      tags: ['Web Development', 'Cloud Computing', 'DevOps'],
    },
    {
      icon: <Work sx={{ fontSize: 40 }} />,
      title: 'Professional Experience',
      description: 'Years of industry experience in software development',
      tags: ['Team Leadership', 'Project Management', 'Agile'],
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'transparent' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
            <Typography variant="h5" component={motion.div} whileHover={{ scale: 1.05 }}>
              Portfolio
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
        <MenuItem onClick={handleLogout}>
          <Logout sx={{ mr: 2 }} />
          Logout
        </MenuItem>
      </Menu>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 4,
              borderRadius: 4,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              color: 'white',
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h3" component="h1" gutterBottom>
                  Welcome, {user?.displayName || 'Developer'}!
                </Typography>
                <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                  Full Stack Developer , UI/UX Designer & AI Developer
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<GitHub />}
                    href="https://github.com"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ color: 'white', borderColor: 'white' }}
                    startIcon={<LinkedIn />}
                    href="https://linkedin.com"
                    target="_blank"
                  >
                    LinkedIn
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Avatar
                    src={user?.photoURL}
                    alt={user?.displayName}
                    sx={{
                      width: 200,
                      height: 200,
                      mx: 'auto',
                      border: '4px solid white',
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>

          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mb: 2,
                          color: 'primary.main',
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography variant="h6" component="h2" gutterBottom align="center">
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" align="center">
                        {feature.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ flexWrap: 'wrap', gap: 1, p: 2 }}>
                      {feature.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: 'action.hover',
                            '&:hover': {
                              bgcolor: 'action.selected',
                            },
                          }}
                        />
                      ))}
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

export default Home; 