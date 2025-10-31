import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/u/228733848" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/nri-professional/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nicholasricketts/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:nicholasricketts59@gmail.com?cc=nri@vt.edu&subject=Hey%20Nicholas!" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Nicholas Ricketts</h1>
          <p>Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/nri-professional/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nicholasricketts/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:nicholasricketts59@gmail.com?cc=nri@vt.edu&subject=Hey%20Nicholas!" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;