// React
import React from "react";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Third-party
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

// Hooks
import { useThemeDetection } from '../../hooks/useThemeDetection';

// Utils
import { getThemeColors, COLORS } from '../../utils/themeUtils';

// Types
import type { TimelineItemProps } from '../../types';

function TimelineItem({ date, title, subtitle, icon, items }: TimelineItemProps) {
  const isDarkMode = useThemeDetection();
  const themeColors = getThemeColors(isDarkMode);

  const contentBackground = themeColors.contentBackground;
  const contentColor = themeColors.text;
  const arrowColor = themeColors.arrow;
  const iconColor = themeColors.text;

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

