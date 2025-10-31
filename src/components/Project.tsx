import React from "react";
import ProjectCard from './cards/ProjectCard';
import noPic from '../assets/images/no_pic.png';
import '../assets/styles/Project.scss';

const projectsData = [
  {
    title: "Hokie Hotspot",
    description: "Designed a prototype button that, when pressed, would increment a counter that displayed the amount of sick people in the area. The concept was to place these around Virginia Tech's campus and sync them so that people could avoid areas with sick students.",
    image: noPic
  },
  {
    title: "QuickNosis",
    description: "Designed and trained a machine learning model for patient diagnosis using TensorFlow and publicly available datasets. Patients would use the mobile app, input their symptoms, and the machine learning model would output a diagnosis based on those symptoms.",
    image: noPic
  }
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects & Experience</h1>
        <div className="projects-grid">
            {projectsData.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                />
            ))}
        </div>
    </div>
    );
}

export default Project;