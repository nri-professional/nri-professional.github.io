// React
import React from "react";

// Components
import EducationCard from './cards/EducationCard';

// Styles
import '../assets/styles/Education.scss';

/**
 * EDUCATION DATA
 * 
 * To add/edit education entries, simply modify this array.
 * 
 * Fields:
 *   - institution (required): School/university name
 *   - degree (required): Degree name
 *   - period (required): Time period (e.g., "August 2024 - May 2026")
 *   - gpa (optional): GPA as string (will be hidden if not provided)
 * 
 * Example:
 *   {
 *     institution: "University Name",
 *     degree: "Bachelor's in Computer Science",
 *     period: "August 2024 - May 2026",
 *     gpa: "4.0"  // Optional - omit this field if you don't want to show GPA
 *   }
 */
const educationData = [
  {
    institution: "Virginia Tech",
    degree: "Bachelor's in Computer Science",
    period: "August 2024 - May 2026",
    gpa: "4.0"
  },
  {
    institution: "Laurel Ridge",
    degree: "Associate's in General Studies",
    period: "August 2022 - May 2024",
    gpa: "4.0"
  }
];

function Education() {
  return (
    <div className="container" id="education">
      <div className="education-container">
        <h1>Education</h1>
        <div className="education-grid">
          {educationData.map((education, index) => (
            <EducationCard
              key={index}
              institution={education.institution}
              degree={education.degree}
              period={education.period}
              gpa={education.gpa}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;

