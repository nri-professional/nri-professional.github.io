import { useState, useEffect } from 'react';

/**
 * Custom hook to detect and track theme mode changes
 * Watches for changes to the main-container class to detect dark/light mode switches
 * @returns {boolean} isDarkMode - true if dark mode is active, false if light mode
 */
export function useThemeDetection(): boolean {
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

  return isDarkMode;
}

