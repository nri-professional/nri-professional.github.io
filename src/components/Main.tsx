// React
import React from "react";

// Components
import SocialIcons from './SocialIcons';

// Styles
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="profile-card">
          <div className="profile-avatar">
            <img src="https://avatars.githubusercontent.com/u/228733848" alt="Nicholas Ricketts profile picture" />
          </div>
          <div className="profile-content">
            <SocialIcons className="profile-social-icons" />
            <h1 className="profile-name">Nicholas Ricketts</h1>
            <p className="profile-subtitle">Full-Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;