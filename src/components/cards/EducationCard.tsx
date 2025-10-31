// React
import React from "react";

// FontAwesome
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Utils
import { ICONS } from '../../utils/icons';

// Types
import type { EducationCardProps } from '../../types';

function EducationCard({ institution, degree, period, gpa }: EducationCardProps) {
  return (
    <div className="education-card">
      <div className="education-icon">
        <FontAwesomeIcon icon={ICONS.graduationCap} size="3x"/>
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

