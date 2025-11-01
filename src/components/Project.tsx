// React
import React from "react";

// Components
import ProjectCard from './cards/ProjectCard';

// Assets
import noPic from '../assets/images/no_pic.png';

// Styles
import '../assets/styles/Project.scss';

// Types
import type { ProjectCardProps } from '../types';

/**
 * PROJECTS DATA
 * 
 * To add/edit projects, simply modify this array.
 * 
 * Fields:
 *   - title (required): Project name
 *   - description (required): Project description
 *   - image (optional): Import image at top, or use noPic for placeholder. Not needed if videoUrl is provided.
 *   - link (optional): Valid URL to project repository or live site (must be a complete URL starting with http:// or https://)
 *   - imageAlt (optional): Alt text for image (defaults to title if not provided)
 *   - videoUrl (optional): YouTube embed URL (format: "https://www.youtube.com/embed/VIDEO_ID")
 *   - techStack (optional): Array of technologies used in the project (e.g., ["React", "TypeScript", "Node.js"])
 * 
 * Example with link:
 *   {
 *     title: "My Awesome Project",
 *     description: "A project that does amazing things.",
 *     image: myProjectImage,
 *     link: "https://github.com/username/project",
 *     techStack: ["React", "TypeScript", "Node.js"]
 *   }
 * 
 * Example with YouTube video (image not needed):
 *   {
 *     title: "My Project",
 *     description: "Project description here.",
 *     videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
 *     techStack: ["React", "CSS", "JavaScript"]
 *   }
 * 
 * Example without link or video (shows popup instead):
 *   {
 *     title: "My Project",
 *     description: "Project description here.",
 *     image: noPic,
 *     techStack: ["Python", "Flask"]
 *   }
 */
const projectsData: Array<Omit<ProjectCardProps, 'title' | 'description'> & { title: string; description: string }> = [
  {
    title: "Expolis",
    description: "Collaboratively designed a mobile app for people to find events to attend. Planned support for hosts to create events as well. Was designed as part of a Human Computer Interaction course, so the project was not implemented.",
    videoUrl: "https://www.youtube.com/embed/OEDrTYJHPeQ",
    techStack: ["UI/UX Design", "Figma", "Prototyping"] // TODO: Update with actual technologies used
    // No image needed - will use YouTube thumbnail or demo.png fallback
    // No link = no repo link will be displayed
  },
  {
    title: "Hokie Hotspot",
    description: "Designed a prototype button that, when pressed, would increment a counter that displayed the amount of sick people in the area. The concept was to place these around Virginia Tech's campus and sync them so that people could avoid areas with sick students.",
    image: noPic,
    techStack: ["Arduino", "C++", "Hardware Prototyping", "Embedded Systems"] // TODO: Update with actual technologies used
    // No link = shows popup dialog when clicked
  },
  {
    title: "QuickNosis",
    description: "Designed and trained a machine learning model for patient diagnosis using TensorFlow and publicly available datasets. Patients would use the mobile app, input their symptoms, and the machine learning model would output a diagnosis based on those symptoms.",
    image: noPic,
    techStack: ["TensorFlow", "Kotlin", "Java", "Android Studio", "Machine Learning", "Mobile Development"] // TODO: Update with actual technologies used
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
                    {...(project.image && { image: project.image })}
                    link={project.link}
                    imageAlt={project.imageAlt}
                    videoUrl={project.videoUrl}
                    techStack={project.techStack}
                />
            ))}
        </div>
    </div>
    );
}

export default Project;