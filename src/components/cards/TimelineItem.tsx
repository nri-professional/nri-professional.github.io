import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  icon: IconDefinition;
  items: string[];
}

function TimelineItem({ date, title, subtitle, icon, items }: TimelineItemProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Detect current theme mode
    const checkTheme = () => {
      const mainContainer = document.querySelector('.main-container');
      if (mainContainer) {
        setIsDarkMode(mainContainer.classList.contains('dark-mode'));
      }
    };

    checkTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    const mainContainer = document.querySelector('.main-container');
    if (mainContainer) {
      observer.observe(mainContainer, {
        attributes: true,
        attributeFilter: ['class']
      });
    }

    return () => observer.disconnect();
  }, []);

  const contentBackground = isDarkMode ? 'rgba(228, 228, 228, 0.1)' : 'white';
  const contentColor = isDarkMode ? 'var(--dark-mode-text)' : 'rgb(39, 40, 34)';
  const arrowColor = isDarkMode ? 'rgba(228, 228, 228, 0.1)' : 'white';
  const iconColor = isDarkMode ? 'var(--dark-mode-text)' : 'rgb(39, 40, 34)';

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: contentBackground, color: contentColor }}
      contentArrowStyle={{ borderRight: `7px solid ${arrowColor}` }}
      date={date}
      iconStyle={{ background: 'var(--icon-bg-color)', color: iconColor }}
      icon={<FontAwesomeIcon icon={icon} />}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

export default TimelineItem;

