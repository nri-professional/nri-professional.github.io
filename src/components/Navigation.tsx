// React
import React, { useEffect, useState } from "react";

// Material-UI Components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

// Material-UI Icons
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ListIcon from '@mui/icons-material/List';
import MenuIcon from '@mui/icons-material/Menu';

// Utils
import { getThemeColors, COLORS, TYPOGRAPHY } from '../utils/themeUtils';

// Config
import { getNavItems } from '../config/sections';

// Types
import type { NavigationProps } from '../types';

const drawerWidth = 240;
// Navigation items are automatically synced with section configuration
const navItems: [string, string][] = getNavItems();

function Navigation({ parentToChild, modeChange }: NavigationProps) {
  const { mode } = parentToChild;

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
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDarkMode = mode === 'dark';
  const themeColors = getThemeColors(isDarkMode);

  const drawer = (
    <Box 
      className="navigation-bar-responsive" 
      onClick={handleDrawerToggle} 
      sx={{ 
        textAlign: 'center',
        backgroundColor: themeColors.background,
        height: '100%',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Box
        sx={{
          padding: '16px',
          color: themeColors.text,
          fontFamily: TYPOGRAPHY.fontFamily,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontWeight: 'bold',
          transition: 'color 0.3s ease',
        }}
      >
        <ListIcon 
          sx={{ 
            color: themeColors.text,
            transition: 'transform 0.15s ease-in-out, color 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }} 
        />
        <p className="mobile-menu-top" style={{ margin: 0, color: themeColors.text }}>
          Menu
        </p>
      </Box>
      <Divider sx={{ backgroundColor: themeColors.divider }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton 
              sx={{ 
                textAlign: 'center',
                color: themeColors.text,
                fontFamily: TYPOGRAPHY.fontFamily,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: themeColors.hoverBackground,
                  color: COLORS.theme.accent,
                  transform: 'translateX(4px)',
                },
                '&:focus': {
                  outline: `2px solid ${COLORS.theme.accent}`,
                  outlineOffset: '2px',
                },
                '&:active': {
                  backgroundColor: themeColors.hoverBackground,
                  transform: 'translateX(2px)',
                },
              }} 
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText 
                primary={item[0]}
                primaryTypographyProps={{
                  fontFamily: TYPOGRAPHY.fontFamily,
                  color: themeColors.text,
                  sx: {
                    color: `${themeColors.text} !important`,
                    transition: 'color 0.3s ease',
                  },
                }}
                sx={{
                  '& .MuiTypography-root': {
                    color: `${themeColors.text} !important`,
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
            sx={{ 
              mr: 2, 
              display: { sm: 'none' },
              transition: 'transform 0.15s ease-in-out, color 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              },
              '&:focus': {
                outline: `2px solid ${COLORS.theme.accent}`,
                outlineOffset: '2px',
                borderRadius: '4px',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          {mode === 'dark' ? (
            <LightModeIcon 
              onClick={modeChange}
              aria-label="Switch to light mode"
              sx={{ 
                cursor: 'pointer',
                transition: 'transform 0.15s ease-in-out, color 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
                '&:focus': {
                  outline: `2px solid ${COLORS.theme.accent}`,
                  outlineOffset: '4px',
                  borderRadius: '4px',
                },
              }}
            />
          ) : (
            <DarkModeIcon 
              onClick={modeChange}
              aria-label="Switch to dark mode"
              sx={{ 
                cursor: 'pointer',
                transition: 'transform 0.15s ease-in-out, color 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
                '&:focus': {
                  outline: `2px solid ${COLORS.theme.accent}`,
                  outlineOffset: '4px',
                  borderRadius: '4px',
                },
              }}
            />
          )}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item[0]} onClick={() => scrollToSection(item[1])} sx={{ color: themeColors.text }}>
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
              backgroundColor: themeColors.background,
              transition: 'background-color 0.3s ease, transform 0.3s ease',
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