/**
 * Color constants for consistent theming across the application
 */
export const COLORS = {
  dark: {
    background: '#0d1116',
    text: 'var(--dark-mode-text)',
    textSoft: 'rgba(228, 228, 228, 0.9)',
    textSofter: 'rgba(228, 228, 228, 0.95)',
    contentBackground: 'rgba(228, 228, 228, 0.1)',
    arrow: 'rgba(228, 228, 228, 0.1)',
    divider: 'rgba(228, 228, 228, 0.1)',
    hoverBackground: 'rgba(228, 228, 228, 0.1)',
  },
  light: {
    background: '#f8f9fa',
    text: '#0d1116',
    textSoft: 'rgba(13, 17, 22, 0.9)',
    textSofter: 'rgba(13, 17, 22, 0.95)',
    contentBackground: 'white',
    arrow: 'white',
    divider: 'rgba(13, 17, 22, 0.1)',
    hoverBackground: 'rgba(13, 17, 22, 0.05)',
  },
  theme: {
    accent: 'var(--icon-bg-color)',
    accentHover: 'rgba(223, 54, 54, 0.1)',
    accentHoverLight: 'rgba(223, 54, 54, 0.05)',
  },
  timeline: {
    dark: 'rgba(228, 228, 228, 0.15)',
    light: 'rgba(0, 0, 0, 0.08)',
  },
} as const;

/**
 * Section IDs for navigation - ensures consistency across the app
 */
export const SECTION_IDS = {
  EXPERTISE: 'expertise',
  EDUCATION: 'education',
  EXPERIENCE: 'history',
  PROJECTS: 'projects',
} as const;

/**
 * Typography constants
 */
export const TYPOGRAPHY = {
  fontFamily: '"Lato", sans-serif',
} as const;

