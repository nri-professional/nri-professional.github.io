import { COLORS, TYPOGRAPHY } from './constants';

// Re-export constants for convenience
export { COLORS, TYPOGRAPHY };

/**
 * Get theme-aware colors based on dark/light mode
 * @param isDarkMode - Whether dark mode is active
 * @returns Object containing all theme-aware colors
 */
export const getThemeColors = (isDarkMode: boolean) => {
  return {
    background: isDarkMode ? COLORS.dark.background : COLORS.light.background,
    text: isDarkMode ? COLORS.dark.text : COLORS.light.text,
    textSoft: isDarkMode ? COLORS.dark.textSoft : COLORS.light.textSoft,
    textSofter: isDarkMode ? COLORS.dark.textSofter : COLORS.light.textSofter,
    contentBackground: isDarkMode ? COLORS.dark.contentBackground : COLORS.light.contentBackground,
    arrow: isDarkMode ? COLORS.dark.arrow : COLORS.light.arrow,
    divider: isDarkMode ? COLORS.dark.divider : COLORS.light.divider,
    hoverBackground: isDarkMode ? COLORS.dark.hoverBackground : COLORS.light.hoverBackground,
  };
};

