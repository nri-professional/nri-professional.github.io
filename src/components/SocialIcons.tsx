// React
import React from "react";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Utils
import { ICONS } from '../utils/icons';

// Types
import type { SocialIconsProps } from '../types';

interface SocialLink {
  name: string;
  url: string;
  icon: typeof ICONS.github | typeof ICONS.linkedin | typeof ICONS.email;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/nri-professional/",
    icon: ICONS.github
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nicholasricketts/",
    icon: ICONS.linkedin
  },
  {
    name: "Email",
    url: "mailto:nicholasricketts59@gmail.com?cc=nri@vt.edu&subject=Hey%20Nicholas!",
    icon: ICONS.email
  }
];

/**
 * Social Icons Component
 * 
 * Displays social media links (GitHub, LinkedIn, Email) with consistent styling.
 * 
 * @param className - Optional CSS class for styling
 * @param emailUrl - Optional email URL override (used in Footer without cc/subject)
 */
function SocialIcons({ className, emailUrl }: SocialIconsProps) {
  const links = socialLinks.map(link => {
    // Use custom emailUrl if provided (for Footer), otherwise use default
    if (link.name === "Email" && emailUrl) {
      return { ...link, url: emailUrl };
    }
    return link;
  });

  return (
    <div className={className}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${link.name} profile`}
        >
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;

