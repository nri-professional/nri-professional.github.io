// React
import React, { useState } from "react";

// Material-UI Components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

// Hooks
import { useThemeDetection } from '../../hooks/useThemeDetection';

// Utils
import { getThemeColors, COLORS, TYPOGRAPHY } from '../../utils/themeUtils';

// Types
import type { ProjectCardProps } from '../../types';

function ProjectCard({ title, description, image, link, imageAlt }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const isDarkMode = useThemeDetection();
  const themeColors = getThemeColors(isDarkMode);

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
      style={{ cursor: 'pointer' }}
    >
      {link ? (
        <>
          <a href={link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <img src={image} className="zoom" alt={imageAlt || title}/>
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
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
            backgroundColor: themeColors.background,
            color: themeColors.text,
            fontFamily: TYPOGRAPHY.fontFamily,
          },
        }}
      >
        <DialogTitle 
          id="project-dialog-title"
          sx={{
            color: themeColors.text,
            fontFamily: TYPOGRAPHY.fontFamily,
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
              color: themeColors.textSoft,
              fontFamily: TYPOGRAPHY.fontFamily,
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
              backgroundColor: isDarkMode ? COLORS.theme.accentHover : COLORS.theme.accentHoverLight,
              borderRadius: '4px',
              borderLeft: `3px solid ${COLORS.theme.accent}`,
            }}
          >
            <DialogContentText
              sx={{
                color: themeColors.textSofter,
                fontFamily: TYPOGRAPHY.fontFamily,
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
              color: COLORS.theme.accent,
              fontFamily: TYPOGRAPHY.fontFamily,
              textTransform: 'none',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: isDarkMode ? COLORS.theme.accentHover : COLORS.theme.accentHoverLight,
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

