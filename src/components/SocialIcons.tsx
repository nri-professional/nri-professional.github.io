import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactElement;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/nri-professional/",
    icon: <GitHubIcon />
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nicholasricketts/",
    icon: <LinkedInIcon />
  },
  {
    name: "Email",
    url: "mailto:nicholasricketts59@gmail.com?cc=nri@vt.edu&subject=Hey%20Nicholas!",
    icon: <EmailIcon />
  }
];

interface SocialIconsProps {
  className?: string;
  emailUrl?: string; // Optional override for email URL (for Footer which doesn't need cc/subject)
}

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
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;

