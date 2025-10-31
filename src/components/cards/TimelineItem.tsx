import React from "react";
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
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
      contentArrowStyle={{ borderRight: '7px solid  white' }}
      date={date}
      iconStyle={{ background: 'var(--icon-bg-color)', color: 'rgb(39, 40, 34)' }}
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

