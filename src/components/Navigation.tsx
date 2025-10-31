import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;
const navItems = [['Expertise', 'expertise'], ['Education', 'education'], ['Experience', 'history'], ['Projects', 'projects']];

function Navigation({parentToChild, modeChange}: any) {

  const {mode} = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    console.log(section)
    const expertiseElement = document.getElementById(section);
    if (expertiseElement) {
      expertiseElement.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolling to:', expertiseElement);  // Debugging: Ensure the element is found
    } else {
      console.error('Element with id "expertise" not found');  // Debugging: Log error if element is not found
    }
  };

  const isDarkMode = mode === 'dark';

  const drawer = (
    <Box 
      className="navigation-bar-responsive" 
      onClick={handleDrawerToggle} 
      sx={{ 
        textAlign: 'center',
        backgroundColor: isDarkMode ? '#0d1116' : '#f8f9fa',
        height: '100%',
      }}
    >
      <Box
        sx={{
          padding: '16px',
          color: isDarkMode ? 'var(--dark-mode-text)' : '#0d1116',
          fontFamily: '"Lato", sans-serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontWeight: 'bold',
        }}
      >
        <ListIcon sx={{ color: isDarkMode ? 'var(--dark-mode-text)' : '#0d1116' }} />
        <p className="mobile-menu-top" style={{ margin: 0, color: isDarkMode ? 'var(--dark-mode-text)' : '#0d1116' }}>
          Menu
        </p>
      </Box>
      <Divider sx={{ backgroundColor: isDarkMode ? 'rgba(228, 228, 228, 0.1)' : 'rgba(13, 17, 22, 0.1)' }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton 
              sx={{ 
                textAlign: 'center',
                color: isDarkMode ? 'var(--dark-mode-text)' : '#0d1116',
                fontFamily: '"Lato", sans-serif',
                '&:hover': {
                  backgroundColor: isDarkMode ? 'rgba(228, 228, 228, 0.1)' : 'rgba(13, 17, 22, 0.05)',
                  color: 'var(--icon-bg-color)',
                },
              }} 
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText 
                primary={item[0]}
                primaryTypographyProps={{
                  fontFamily: '"Lato", sans-serif',
                  color: isDarkMode ? 'var(--dark-mode-text)' : '#0d1116',
                  sx: {
                    color: `${isDarkMode ? 'var(--dark-mode-text)' : '#0d1116'} !important`,
                  },
                }}
                sx={{
                  '& .MuiTypography-root': {
                    color: `${isDarkMode ? 'var(--dark-mode-text)' : '#0d1116'} !important`,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
        <Toolbar className='navigation-bar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {mode === 'dark' ? (
            <LightModeIcon onClick={() => modeChange()}/>
          ) : (
            <DarkModeIcon onClick={() => modeChange()}/>
          )}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item[0]} onClick={() => scrollToSection(item[1])} sx={{ color: '#fff' }}>
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              backgroundColor: isDarkMode ? '#0d1116' : '#f8f9fa',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;