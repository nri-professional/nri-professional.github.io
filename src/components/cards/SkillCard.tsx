import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Chip from '@mui/material/Chip';

interface SkillCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
  techStack: string[];
}

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

