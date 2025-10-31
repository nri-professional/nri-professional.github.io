// React
import React from "react";

// Components
import ProjectCard from './cards/ProjectCard';

// Assets
import noPic from '../assets/images/no_pic.png';

// Styles
import '../assets/styles/Project.scss';

/**
 * PROJECTS DATA
 * 
 * To add/edit projects, simply modify this array.
 * 
 * Fields:
 *   - title (required): Project name
 *   - description (required): Project description
 *   - image (required): Import image at top, or use noPic for placeholder
 *   - link (optional): URL to project repository or live site
 *   - imageAlt (optional): Alt text for image (defaults to title if not provided)
 * 
 * Example with link:
 *   {
 *     title: "My Awesome Project",
 *     description: "A project that does amazing things.",
 *     image: myProjectImage,
 *     link: "https://github.com/username/project"
 *   }
 * 
 * Example without link (shows popup instead):
 *   {
 *     title: "My Project",
 *     description: "Project description here.",
 *     image: noPic
 *   }
 */
const projectsData = [
  {
    title: "Hokie Hotspot",
    description: "Designed a prototype button that, when pressed, would increment a counter that displayed the amount of sick people in the area. The concept was to place these around Virginia Tech's campus and sync them so that people could avoid areas with sick students.",
    image: noPic
    // No link = shows popup dialog when clicked
  },
  {
    title: "QuickNosis",
    description: "Designed and trained a machine learning model for patient diagnosis using TensorFlow and publicly available datasets. Patients would use the mobile app, input their symptoms, and the machine learning model would output a diagnosis based on those symptoms.",
    image: noPic
    // No link = shows popup dialog when clicked
  }
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
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