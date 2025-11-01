/**
 * PORTFOLIO SECTIONS CONFIGURATION
 * 
 * This is the single source of truth for section order and metadata.
 * Update this file to change the order of sections throughout the site.
 * 
 * Both App.tsx (component rendering) and Navigation.tsx (navigation menu) 
 * use this configuration to ensure they stay in sync automatically.
 */

// Section component types
export type SectionComponent = 'Main' | 'Interests' | 'Education' | 'Expertise' | 'Timeline' | 'Project' | 'Contact';

/**
 * Section Configuration
 * 
 * @property label - Display name in navigation
 * @property id - HTML id attribute for scrolling (must match component's id)
 * @property component - Component name to render (must match actual component name)
 */
export interface SectionConfig {
  label: string;
  id: string;
  component: SectionComponent;
}

/**
 * Section order and metadata
 * 
 * The order of items in this array determines:
 * 1. The order components appear on the page (App.tsx)
 * 2. The order items appear in navigation (Navigation.tsx)
 * 
 * To reorder sections, simply rearrange the items in this array.
 */
export const sections: SectionConfig[] = [
  {
    label: 'Interests',
    id: 'interests',
    component: 'Interests'
  },
  {
    label: 'Education',
    id: 'education',
    component: 'Education'
  },
  {
    label: 'Expertise',
    id: 'expertise',
    component: 'Expertise'
  },
  {
    label: 'Experience',
    id: 'history',
    component: 'Timeline'
  },
  {
    label: 'Projects',
    id: 'projects',
    component: 'Project'
  },
  {
    label: 'Contact',
    id: 'contact',
    component: 'Contact'
  }
];

/**
 * Helper: Generate navigation items array format
 * Returns [label, id] tuples for Navigation component
 */
export const getNavItems = (): [string, string][] => {
  return sections.map(section => [section.label, section.id]);
};

