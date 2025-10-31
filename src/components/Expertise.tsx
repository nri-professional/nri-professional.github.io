import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faRobot, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import SkillCard from './cards/SkillCard';
import '../assets/styles/Expertise.scss';

const skillsData = [
    {
        icon: faReact,
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
        icon: faRobot,
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
        icon: faLayerGroup,
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