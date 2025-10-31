// React
import React from "react";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Material-UI
import Chip from '@mui/material/Chip';

// Types
import type { SkillCardProps } from '../../types';

function SkillCard({ icon, title, description, techStack }: SkillCardProps) {
  return (
    <div className="skill">
      <FontAwesomeIcon icon={icon} size="3x"/>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="flex-chips">
        <span className="chip-title">Tech stack:</span>
        {techStack.map((label, index) => (
          <Chip key={index} className='chip' label={label} />
        ))}
      </div>
    </div>
  );
}

export default SkillCard;

