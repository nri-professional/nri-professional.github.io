/**
 * Icon Constants
 * 
 * This file provides easy-to-use icon imports for your portfolio.
 * Simply import the icon you need from this file instead of searching through FontAwesome libraries.
 * 
 * Usage:
 *   import { ICONS } from '../utils/icons';
 *   icon: ICONS.briefcase  // For Timeline
 *   icon: ICONS.react      // For Expertise
 */

// Brand icons (from @fortawesome/free-brands-svg-icons)
import { 
  faReact,
  faNodeJs,
  faPython,
  faJs,
  faHtml5,
  faCss3Alt,
  faDocker,
  faGitAlt,
  faGithub,
  faLinkedin,
  faAndroid
} from '@fortawesome/free-brands-svg-icons';

// Solid icons (from @fortawesome/free-solid-svg-icons)
import {
  faBriefcase,
  faCode,
  faRobot,
  faLayerGroup,
  faGraduationCap,
  faLaptopCode,
  faDatabase,
  faMobileAlt,
  faServer,
  faNetworkWired,
  faCog,
  faChartLine,
  faLightbulb,
  faRocket,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

/**
 * Icon Library
 * 
 * Organized by category for easy selection:
 * - Work/Experience: briefcase, code, laptopCode
 * - Education: graduationCap
 * - Skills: react, robot, layerGroup, database, server
 * - General: cog, chartLine, lightbulb, rocket
 */
export const ICONS = {
  // Work & Experience
  briefcase: faBriefcase,
  code: faCode,
  laptopCode: faLaptopCode,
  
  // Education
  graduationCap: faGraduationCap,
  
  // Skills & Technologies
  react: faReact,
  robot: faRobot,
  layerGroup: faLayerGroup,
  database: faDatabase,
  server: faServer,
  network: faNetworkWired,
  mobile: faMobileAlt,
  
  // Programming Languages & Tools
  nodejs: faNodeJs,
  python: faPython,
  javascript: faJs,
  html: faHtml5,
  css: faCss3Alt,
  docker: faDocker,
  git: faGitAlt,
  android: faAndroid,
  
  // Social Media
  github: faGithub,
  linkedin: faLinkedin,
  email: faEnvelope,
  
  // General
  cog: faCog,
  chart: faChartLine,
  lightbulb: faLightbulb,
  rocket: faRocket
} as const;

// Type helper for icon selection
export type IconName = keyof typeof ICONS;

