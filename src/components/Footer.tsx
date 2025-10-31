// React
import React from "react";

// Components
import SocialIcons from './SocialIcons';

// Styles
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <SocialIcons emailUrl="mailto:nicholasricketts59@gmail.com" />
      </div>
      <p>Designed & built by Nicholas Ricketts</p>
    </footer>
  );
}

export default Footer;