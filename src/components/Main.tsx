import React from "react";
import SocialIcons from './SocialIcons';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/u/228733848" alt="Avatar" />
        </div>
        <div className="content">
          <SocialIcons className="social_icons" />
          <h1>Nicholas Ricketts</h1>
          <p>Full-Stack Developer</p>
          <SocialIcons className="mobile_social_icons" />
        </div>
      </div>
    </div>
  );
}

export default Main;