// React
import React, { useState, useEffect } from "react";

// Components
import {
  Main,
  Interests,
  Timeline,
  Expertise,
  Education,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';

// Config
import { sections } from './config/sections';

// Styles
import './index.scss';

// Types
import type { ThemeMode } from './types';
import type { SectionComponent } from './config/sections';

function App() {
    // Initialize mode based on system preference
    const getInitialMode = (): ThemeMode => {
        // Check if user has a saved preference
        const savedMode = localStorage.getItem('theme-mode');
        if (savedMode === 'dark' || savedMode === 'light') {
            return savedMode;
        }
        
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    };

    const [mode, setMode] = useState<ThemeMode>(getInitialMode);

    const handleModeChange = () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        setMode(newMode);
        // Save preference to localStorage
        localStorage.setItem('theme-mode', newMode);
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        
        // Listen for system theme changes (optional - only if no manual preference saved)
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            // Only update if user hasn't manually set a preference
            if (!localStorage.getItem('theme-mode')) {
                setMode(e.matches ? 'dark' : 'light');
            }
        };

        // Modern browsers
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleSystemThemeChange);
            return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
        } else {
            // Fallback for older browsers
            mediaQuery.addListener(handleSystemThemeChange);
            return () => mediaQuery.removeListener(handleSystemThemeChange);
        }
    }, []);

    // Component mapping - maps section component names to actual components
    const componentMap: Record<SectionComponent, React.ComponentType> = {
        Main,
        Interests,
        Education,
        Expertise,
        Timeline,
        Project,
        Contact,
    };

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            {sections.map((section) => {
                const Component = componentMap[section.component];
                return Component ? <Component key={section.id} /> : null;
            })}
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;