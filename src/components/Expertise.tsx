// React
import React from "react";

// FontAwesome
import '@fortawesome/free-regular-svg-icons';

// Components
import SkillCard from './cards/SkillCard';

// Utils
import { ICONS } from '../utils/icons';

// Styles
import '../assets/styles/Expertise.scss';

/**
 * EXPERTISE DATA
 * 
 * To add/edit skill categories, simply modify this array.
 * 
 * Fields:
 *   - icon (required): Use ICONS from '../utils/icons' (see icons.ts for available options)
 *   - title (required): Category title
 *   - description (required): Description of your expertise in this area
 *   - techStack (required): Array of technologies/skills
 * 
 * Available Icons (from ICONS):
 *   - react, robot, layerGroup, database, server, network, mobile
 *   - code, laptopCode, briefcase
 *   - nodejs, python, javascript, html, css, docker, git, android
 *   - chart, lightbulb, rocket, cog
 * 
 * Example:
 *   {
 *     icon: ICONS.react,
 *     title: "Web Development",
 *     description: "I build amazing websites...",
 *     techStack: ["React", "TypeScript", "Node.js"]
 *   }
 */
const skillsData = [
    {
        icon: ICONS.react,
        title: "Full Stack Web Development",
        description: "I've built many full-stack web applications using modern technologies like React, TypeScript, and Flask. I'm comfortable using or not using AI depending on team preference.",
        techStack: [
            "React",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "SASS",
            "Flask",
            "Python",
            "Node.js",
            "Express",
            "MongoDB",
            "Material UI",
            "SQL",
            "Jekyll",
            "Docker",
            "Git",
            "JSON"
        ]
    },
    {
        icon: ICONS.robot,
        title: "Machine Learning & Data",
        description: "I've designed and trained machine learning models using TensorFlow for weather prediction and patient diagnosis. I'm comfortable working with AI tools and can adapt to different development workflows.",
        techStack: [
            "TensorFlow",
            "Kotlin",
            "Java",
            "Android Studio",
            "Machine Learning",
            "AI Development",
            "Mobile App Development",
            "UI/UX Design",
            "C#",
            "JUnit",
            "MATLAB"
        ]
    },
    {
        icon: ICONS.layerGroup,
        title: "Flexibility & Diversity",
        description: "I've worked with high-level, low-level, and multi-paradigm development. I'm familiar with Von Neumann and ARM architecture design, and enjoy working with new technologies.",
        techStack: [
            "Arduino",
            "C/C++",
            "Rust",
            "Hardware Prototyping",
            "Firmware Development",
            "Embedded Systems",
            "Bash",
            "Shell",
            "Lua",
            "Haskell",
            "Racket"
        ]
    }
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <SkillCard
                        key={index}
                        icon={skill.icon}
                        title={skill.title}
                        description={skill.description}
                        techStack={skill.techStack}
                    />
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;