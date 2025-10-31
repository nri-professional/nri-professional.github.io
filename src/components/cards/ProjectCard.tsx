import React, { useState, useEffect } from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  imageAlt?: string;
}

function ProjectCard({ title, description, image, link, imageAlt }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Detect current theme mode
    const checkTheme = () => {
      const mainContainer = document.querySelector('.main-container');
      if (mainContainer) {
        setIsDarkMode(mainContainer.classList.contains('dark-mode'));
      }
    };

    checkTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    const mainContainer = document.querySelector('.main-container');
    if (mainContainer) {
      observer.observe(mainContainer, {
        attributes: true,
        attributeFilter: ['class']
      });
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (link) {
      // If link exists, let it navigate naturally
      return;
    }
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cardContent = (
    <div 
      className="project" 
      onClick={handleClick} 
      style={{ cursor: link ? 'pointer' : 'pointer' }}
    >
      {link ? (
        <>
          <a href={link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
            <img src={image} className="zoom" alt={imageAlt || title}/>
          </a>
          <a href={link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
            <h2>{title}</h2>
          </a>
        </>
      ) : (
        <>
          <img src={image} className="zoom" alt={imageAlt || title}/>
          <h2>{title}</h2>
        </>
      )}
      <p>{description}</p>
    </div>
  );

  return (
    <>
      {cardContent}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="project-dialog-title"
        aria-describedby="project-dialog-description"
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: isDarkMode ? '#0d1116' : '#f8f9fa',
            color: isDarkMode ? 'var(--dark-mode-text)' : '#0d1116',
            fontFamily: '"Lato", sans-serif',
          },
        }}
      >
        <DialogTitle 
          id="project-dialog-title"
          sx={{
            color: isDarkMode ? 'var(--dark-mode-text)' : '#0d1116',
            fontFamily: '"Lato", sans-serif',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            paddingBottom: '8px',
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent sx={{ paddingTop: '16px' }}>
          <DialogContentText 
            id="project-dialog-description"
            sx={{
              color: isDarkMode ? 'rgba(228, 228, 228, 0.9)' : 'rgba(13, 17, 22, 0.9)',
              fontFamily: '"Lato", sans-serif',
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '16px',
            }}
          >
            This project was completed during my earlier development work, and unfortunately, 
            no repository or project images are available as these were not documented at the time.
          </DialogContentText>
          <Box
            sx={{
              marginTop: '16px',
              padding: '12px',
              backgroundColor: isDarkMode ? 'rgba(223, 54, 54, 0.1)' : 'rgba(223, 54, 54, 0.05)',
              borderRadius: '4px',
              borderLeft: `3px solid var(--icon-bg-color)`,
            }}
          >
            <DialogContentText
              sx={{
                color: isDarkMode ? 'rgba(228, 228, 228, 0.95)' : 'rgba(13, 17, 22, 0.95)',
                fontFamily: '"Lato", sans-serif',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              I would love to discuss these projects in more detail, as I can 
              still speak about them in depth despite the lack of documentation.
            </DialogContentText>
          </Box>
        </DialogContent>
        <DialogActions sx={{ padding: '16px 24px' }}>
          <Button 
            onClick={handleClose} 
            autoFocus
            sx={{
              color: 'var(--icon-bg-color)',
              fontFamily: '"Lato", sans-serif',
              textTransform: 'none',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: isDarkMode ? 'rgba(223, 54, 54, 0.1)' : 'rgba(223, 54, 54, 0.05)',
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ProjectCard;

