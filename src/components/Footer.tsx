import React from "react";
import SocialIcons from './SocialIcons';
import '../assets/styles/Footer.scss'

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