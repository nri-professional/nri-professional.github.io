/**
 * Shared Type Definitions
 * 
 * Central location for TypeScript interfaces and types used across the application.
 * This ensures type consistency and reduces duplication.
 */

/**
 * Theme mode type
 */
export type ThemeMode = 'dark' | 'light';

/**
 * Navigation component props
 */
export interface NavigationProps {
  parentToChild: {
    mode: ThemeMode;
  };
  modeChange: () => void;
}

/**
 * Project card component props
 */
export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  imageAlt?: string;
}

/**
 * Education card component props
 */
export interface EducationCardProps {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
}

/**
 * Skill card component props
 */
export interface SkillCardProps {
  icon: import('@fortawesome/fontawesome-svg-core').IconDefinition;
  title: string;
  description: string;
  techStack: string[];
}

/**
 * Timeline item component props
 */
export interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  icon: import('@fortawesome/fontawesome-svg-core').IconDefinition;
  items: string[];
}

/**
 * Social icons component props
 */
export interface SocialIconsProps {
  className?: string;
  emailUrl?: string; // Optional override for email URL (for Footer which doesn't need cc/subject)
}

