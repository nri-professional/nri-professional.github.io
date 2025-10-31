import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

interface EducationCardProps {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
}

function EducationCard({ institution, degree, period, gpa }: EducationCardProps) {
  return (
    <div className="education-card">
      <div className="education-icon">
        <FontAwesomeIcon icon={faGraduationCap} size="3x"/>
      </div>
      <div className="education-content">
        <h2>{institution}</h2>
        <h3>{degree}</h3>
        <p className="education-period">{period}</p>
        {gpa && (
          <div className="education-details">
            <div className="gpa">
              <span className="gpa-label">GPA:</span>
              <span className="gpa-value">{gpa}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EducationCard;

