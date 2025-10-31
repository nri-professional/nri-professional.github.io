import React from "react";
import EducationCard from './cards/EducationCard';
import '../assets/styles/Education.scss';

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

