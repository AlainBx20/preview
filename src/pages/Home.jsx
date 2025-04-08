import React, { useState, useEffect } from 'react';
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
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
  Edit,
  Save,
  Cancel,
} from '@mui/icons-material';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(auth.currentUser);
  const [editMode, setEditMode] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [portfolioData, setPortfolioData] = useState({
    name: 'Alaa Ben Chouikhaa',
    title: 'Full Stack Developer & UI/UX Designer',
    bio: 'Passionate about creating beautiful and functional web applications',
    github: 'https://github.com/alaabenchouikha',
    linkedin: 'https://linkedin.com/in/alaabenchouikha',
    email: 'alaabenchouikha@gmail.com',
    image: user?.photoURL || 'https://via.placeholder.com/200',
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user?.photoURL) {
        setPortfolioData(prev => ({ ...prev, image: user.photoURL }));
      }
    });

    return () => unsubscribe();
  }, []);

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

  const handleEdit = () => {
    setEditDialog(true);
  };

  const handleSave = () => {
    setEditDialog(false);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditDialog(false);
    setEditMode(false);
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
              {portfolioData.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  color="inherit"
                  onClick={() => navigate('/home')}
                  sx={{ 
                    color: 'text.primary',
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  onClick={() => navigate('/projects')}
                  sx={{ 
                    color: 'text.primary',
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  Projects
                </Button>
                <Button
                  color="inherit"
                  onClick={() => navigate('/blog')}
                  sx={{ 
                    color: 'text.primary',
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  Blog
                </Button>
                <Button
                  color="inherit"
                  onClick={() => navigate('/contact')}
                  sx={{ 
                    color: 'text.primary',
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  Contact
                </Button>
              </Box>
              <Tooltip title="Edit Profile">
                <IconButton
                  onClick={handleEdit}
                  sx={{
                    color: 'text.primary',
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  <Edit />
                </IconButton>
              </Tooltip>
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
                src={portfolioData.image}
                alt={portfolioData.name}
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
            {portfolioData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {portfolioData.email}
          </Typography>
        </Box>
        <Divider />
        <MenuItem onClick={handleEdit}>
          <Edit sx={{ mr: 2 }} />
          Edit Profile
        </MenuItem>
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
                  Welcome, {portfolioData.name}!
                </Typography>
                <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                  {portfolioData.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                  {portfolioData.bio}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<GitHub />}
                    href={portfolioData.github}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ color: 'white', borderColor: 'white' }}
                    startIcon={<LinkedIn />}
                    href={portfolioData.linkedin}
                    target="_blank"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ color: 'white', borderColor: 'white' }}
                    startIcon={<Email />}
                    href={`mailto:${portfolioData.email}`}
                  >
                    Email
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
                    src={portfolioData.image}
                    alt={portfolioData.name}
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
                      <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                        {feature.tags.map((tag, tagIndex) => (
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
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      <Dialog 
        open={editDialog} 
        onClose={handleCancel} 
        maxWidth="sm" 
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'background.paper',
            backgroundImage: 'none',
            borderRadius: 2,
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }
        }}
      >
        <DialogTitle sx={{ 
          bgcolor: 'background.paper',
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}>
          Edit Profile
        </DialogTitle>
        <DialogContent sx={{ bgcolor: 'background.paper' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label="Name"
              value={portfolioData.name}
              onChange={(e) => setPortfolioData({ ...portfolioData, name: e.target.value })}
              fullWidth
            />
            <TextField
              label="Title"
              value={portfolioData.title}
              onChange={(e) => setPortfolioData({ ...portfolioData, title: e.target.value })}
              fullWidth
            />
            <TextField
              label="Bio"
              value={portfolioData.bio}
              onChange={(e) => setPortfolioData({ ...portfolioData, bio: e.target.value })}
              multiline
              rows={3}
              fullWidth
            />
            <TextField
              label="GitHub URL"
              value={portfolioData.github}
              onChange={(e) => setPortfolioData({ ...portfolioData, github: e.target.value })}
              fullWidth
            />
            <TextField
              label="LinkedIn URL"
              value={portfolioData.linkedin}
              onChange={(e) => setPortfolioData({ ...portfolioData, linkedin: e.target.value })}
              fullWidth
            />
            <TextField
              label="Email"
              value={portfolioData.email}
              onChange={(e) => setPortfolioData({ ...portfolioData, email: e.target.value })}
              fullWidth
            />
            <TextField
              label="Profile Image URL"
              value={portfolioData.image}
              onChange={(e) => setPortfolioData({ ...portfolioData, image: e.target.value })}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} startIcon={<Cancel />}>
            Cancel
          </Button>
          <Button onClick={handleSave} startIcon={<Save />} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Box
        component="footer"
        sx={{
          py: 3,
          mt: 'auto',
          textAlign: 'center',
          color: 'text.secondary',
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home; 