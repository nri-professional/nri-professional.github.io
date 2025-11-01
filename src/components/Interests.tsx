// React
import React from "react";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Utils
import { ICONS } from '../utils/icons';

// Styles
import '../assets/styles/Interests.scss';

/**
 * INTERESTS DATA
 * 
 * Personal interests and passions that drive development choices.
 */
const interests = [
  {
    icon: ICONS.dollarSign,
    title: "Financial Tech",
    description: "Interested in fintech solutions and Excel spreadsheets. Data analysis is fun!"
  },
  {
    icon: ICONS.gamepad,
    title: "Games & Game Development",
    description: "Passionate about building games and telling stories that impact people."
  },
  {
    icon: ICONS.video,
    title: "Streaming & Creator Economy",
    description: "Interested in the creator economy, content creation, streaming, and the software that powers it all."
  },
  {
    icon: ICONS.palette,
    title: "Software for Creatives",
    description: "Love building tools that help artists of every kind bring their vision and passions to life."
  },
  {
    icon: ICONS.heart,
    title: "Software for Good",
    description: "Committed to developing technology that makes a positive impact."
  }
];

function Interests() {
  return (
    <div className="interests-container" id="interests">
      <div className="interests-content">
        <h1>Interests</h1>
        
        <div className="interests-list">
          {interests.map((interest, index) => (
            <div key={index} className="interest-item">
              <div className="interest-icon">
                <FontAwesomeIcon icon={interest.icon} />
              </div>
              <div className="interest-content">
                <span className="interest-title">{interest.title}</span>
                <span className="interest-description">{interest.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Interests;

