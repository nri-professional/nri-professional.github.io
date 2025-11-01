// React
import React, { useState } from "react";

// Material-UI Components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Chip } from '@mui/material';

// Components
import VideoEmbed from '../VideoEmbed';

// Assets
import demoPic from '../../assets/images/demo.png';

// Hooks
import { useThemeDetection } from '../../hooks/useThemeDetection';

// Utils
import { getThemeColors, COLORS, TYPOGRAPHY } from '../../utils/themeUtils';
import { getYouTubeThumbnailFromUrl } from '../../utils/youtubeUtils';

// Types
import type { ProjectCardProps } from '../../types';

/**
 * Checks if a string is a valid URL
 */
function isValidUrl(url?: string): boolean {
  if (!url) return false;
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}

function ProjectCard({ title, description, image, link, imageAlt, videoUrl, techStack }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const isDarkMode = useThemeDetection();
  const themeColors = getThemeColors(isDarkMode);

  // Check if link is a valid URL
  const hasValidLink = isValidUrl(link);

  // Use YouTube thumbnail if videoUrl is provided, fallback to demo.png for videos
  // If no video, use provided image or fallback to demoPic if none provided
  const displayImage = videoUrl 
    ? (getYouTubeThumbnailFromUrl(videoUrl, 'maxresdefault') || demoPic)
    : (image || demoPic);

  const handleClick = (e: React.MouseEvent) => {
    // If there's a video, always open the dialog to play video when clicking the card
    if (videoUrl) {
      e.preventDefault();
      setOpen(true);
      return;
    }
    
    if (hasValidLink) {
      // If valid link exists but no video, let it navigate naturally
      return;
    }
    
    // No video and no valid link, open dialog with default message
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Handle link clicks - if there's a video, open dialog instead of navigating
  const handleLinkClick = (e: React.MouseEvent) => {
    if (videoUrl) {
      e.preventDefault();
      e.stopPropagation();
      setOpen(true);
    } else {
      // Let the link navigate naturally if no video
      e.stopPropagation();
    }
  };

  const cardContent = (
    <div 
      className="project" 
      onClick={handleClick} 
      style={{ cursor: 'pointer' }}
    >
      {hasValidLink ? (
        <>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={handleLinkClick}
          >
            <img src={displayImage} className="zoom" alt={imageAlt || title}/>
          </a>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={handleLinkClick}
          >
            <h2>{title}</h2>
          </a>
        </>
      ) : (
        <>
          <img src={displayImage} className="zoom" alt={imageAlt || title}/>
          <h2>{title}</h2>
        </>
      )}
      <p>{description}</p>
      
      {/* Tech Stack Chips */}
      {techStack && techStack.length > 0 && (
        <div className="project-tech-stack">
          {techStack.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{
                fontFamily: TYPOGRAPHY.fontFamily,
                fontSize: '0.75rem',
                height: '24px',
                margin: '4px 4px 4px 0',
                backgroundColor: isDarkMode 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(0, 0, 0, 0.08)',
                color: themeColors.text,
                border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)'}`,
                '&:hover': {
                  backgroundColor: isDarkMode 
                    ? COLORS.theme.accentHover 
                    : COLORS.theme.accentHoverLight,
                  borderColor: COLORS.theme.accent,
                },
              }}
            />
          ))}
        </div>
      )}
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
            {description}
          </DialogContentText>
          
          {/* Tech Stack in Dialog */}
          {techStack && techStack.length > 0 && (
            <Box sx={{ marginBottom: '16px' }}>
              <DialogContentText 
                sx={{
                  color: themeColors.textSoft,
                  fontFamily: TYPOGRAPHY.fontFamily,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  marginBottom: '8px',
                }}
              >
                Technologies Used:
              </DialogContentText>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {techStack.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    size="small"
                    sx={{
                      fontFamily: TYPOGRAPHY.fontFamily,
                      fontSize: '0.75rem',
                      backgroundColor: isDarkMode 
                        ? COLORS.theme.accentHover 
                        : COLORS.theme.accentHoverLight,
                      color: themeColors.text,
                      border: `1px solid ${COLORS.theme.accent}`,
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}
          
          {/* Video embed if provided */}
          {videoUrl && (
            <Box sx={{ marginTop: '16px', marginBottom: '16px' }}>
              <VideoEmbed 
                url={videoUrl} 
                title={`${title} Video Demo`}
              />
            </Box>
          )}
          
          {/* Show default message only if no video or valid link */}
          {!videoUrl && !hasValidLink && (
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
                This project was completed during my earlier development work, and unfortunately, 
                no repository or project images are available as these were not documented at the time.
                I would love to discuss these projects in more detail, as I can 
                still speak about them in depth despite the lack of documentation.
              </DialogContentText>
            </Box>
          )}
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

