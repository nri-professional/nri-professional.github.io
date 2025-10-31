import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineItem from './cards/TimelineItem';
import '../assets/styles/Timeline.scss'

const timelineData = [
  {
    date: "May 2025 - Present",
    title: "Accounting Specialist Intern",
    subtitle: "OPSPro",
    icon: faBriefcase,
    items: [
      "Developed Standard Operating Procedures (SOPs) documenting accounting workflows for 10+ clients.",
      "Managed recurring financial operations, including invoice processing and weekly reconciliations.",
      "Leveraged Microsoft 365 Copilot and AI tools to accelerate documentation while maintaining confidentiality and compliance."
    ]
  },
  {
    date: "August 2024 - August 2025",
    title: "Lead Software Engineer",
    subtitle: "Hokie Hotspot",
    icon: faCode,
    items: [
      "Developed prototype Arduino hardware wiring and firmware code using Arduino C++ variant.",
      "Iterated on software in response to evolving project requirements.",
      "Presented physical prototype in a research symposium alongside a team of 4.",
      "Collaborated with team members to communicate design decisions and project requirements."
    ]
  },
  {
    date: "August 2023 - August 2024",
    title: "Artificial Intelligence App Developer",
    subtitle: "QuickNosis",
    icon: faCode,
    items: [
      "Designed and trained a machine learning model for patient diagnosis using TensorFlow and publicly available datasets.",
      "Built a prototype mobile app in Android Studio with Kotlin and Java to interface with the AI model.",
      "Created an intuitive UI that met MVP standards for usability and clarity.",
      "Led the project independently, handling research, design, coding, and internal app logic.",
      "Presented results at a research symposium."
    ]
  }
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience & Projects</h1>
        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.date}
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              items={item.items}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;