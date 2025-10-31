# Project Structure Guide

This document explains the organization and structure of this React portfolio project.

## 📁 Directory Structure

```
nri-professional.github.io/
├── public/                 # Static files served directly
│   ├── index.html         # HTML template
│   ├── manifest.json      # PWA manifest
│   └── ...
├── src/                   # Source code
│   ├── assets/           # Static assets
│   │   ├── images/       # Image files
│   │   └── styles/      # SCSS stylesheets
│   │       ├── _variables.scss  # Theme variables (EDIT THIS FOR THEMING)
│   │       ├── Education.scss
│   │       ├── Expertise.scss
│   │       ├── Main.scss
│   │       ├── Project.scss
│   │       ├── Timeline.scss
│   │       └── Footer.scss
│   ├── components/       # React components
│   │   ├── cards/       # Reusable card components
│   │   │   ├── EducationCard.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── SkillCard.tsx
│   │   │   └── TimelineItem.tsx
│   │   ├── Education.tsx      # Education section
│   │   ├── Expertise.tsx      # Skills/Expertise section
│   │   ├── Timeline.tsx       # Experience timeline
│   │   ├── Project.tsx        # Projects section
│   │   ├── Main.tsx           # Hero/About section
│   │   ├── Navigation.tsx     # Navigation bar
│   │   ├── Footer.tsx         # Footer component
│   │   ├── SocialIcons.tsx    # Social media icons
│   │   ├── FadeIn.tsx         # Animation wrapper
│   │   └── index.ts          # Component exports
│   ├── hooks/           # Custom React hooks
│   │   └── useThemeDetection.ts
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts     # Shared interfaces and types
│   ├── utils/           # Utility functions and constants
│   │   ├── constants.ts      # App-wide constants
│   │   ├── icons.ts          # Icon library
│   │   └── themeUtils.ts     # Theme utility functions
│   ├── App.tsx          # Main application component
│   ├── index.tsx        # Application entry point
│   └── index.scss       # Global styles
├── CONTENT_EDITING_GUIDE.md    # How to edit content
├── THEME_CUSTOMIZATION_GUIDE.md # How to customize theme
└── PROJECT_STRUCTURE.md         # This file
```

---

## 📂 Key Directories

### `/src/components`
Main React components. Each section of the portfolio has its own component:
- **Main components**: Large sections (Education, Expertise, Timeline, etc.)
- **cards/**: Reusable card components used by main components
- **index.ts**: Barrel export file for clean imports

### `/src/components/cards`
Reusable card components:
- **EducationCard**: Displays education entries
- **ProjectCard**: Displays project entries (with optional popup dialog)
- **SkillCard**: Displays skill categories with tech stacks
- **TimelineItem**: Displays timeline entries

### `/src/assets/styles`
SCSS stylesheets organized by component:
- **`_variables.scss`**: ⭐ **EDIT THIS** for theme customization
- Component-specific styles: Each component has its own SCSS file
- Uses SASS variables for consistency

### `/src/utils`
Utility functions and constants:
- **constants.ts**: Color constants, section IDs, typography
- **icons.ts**: Centralized icon library (FontAwesome icons)
- **themeUtils.ts**: Theme color helper functions

### `/src/hooks`
Custom React hooks:
- **useThemeDetection**: Hook for detecting and tracking theme changes

### `/src/types`
TypeScript type definitions:
- **index.ts**: Shared interfaces and types used across components

---

## 📝 File Naming Conventions

- **Components**: PascalCase (e.g., `Education.tsx`, `ProjectCard.tsx`)
- **Utils/Hooks**: camelCase (e.g., `themeUtils.ts`, `useThemeDetection.ts`)
- **Styles**: PascalCase matching component (e.g., `Education.scss`)
- **SCSS Variables**: Leading underscore for partials (e.g., `_variables.scss`)
- **Type Files**: `index.ts` in relevant folders

---

## 🔧 Import Organization

Imports follow a consistent pattern:

```typescript
// 1. React imports
import React, { useState } from "react";

// 2. Third-party libraries
import { Dialog } from '@mui/material';

// 3. Components (local)
import ProjectCard from './cards/ProjectCard';

// 4. Hooks (local)
import { useThemeDetection } from '../../hooks/useThemeDetection';

// 5. Utils (local)
import { ICONS } from '../utils/icons';

// 6. Types (local)
import type { ProjectCardProps } from '../../types';

// 7. Styles
import '../assets/styles/Project.scss';

// 8. Assets
import noPic from '../assets/images/no_pic.png';
```

---

## 🎨 Theme Customization

**Location**: `src/assets/styles/_variables.scss`

All theme colors, typography, spacing, and styling values are centralized here. See `THEME_CUSTOMIZATION_GUIDE.md` for details.

---

## 📄 Content Editing

**Locations**:
- **Projects**: `src/components/Project.tsx` → `projectsData` array
- **Education**: `src/components/Education.tsx` → `educationData` array
- **Expertise**: `src/components/Expertise.tsx` → `skillsData` array
- **Timeline**: `src/components/Timeline.tsx` → `timelineData` array

See `CONTENT_EDITING_GUIDE.md` for detailed instructions.

---

## 🔄 Component Architecture

### Component Hierarchy

```
App.tsx
├── Navigation
├── FadeIn
│   ├── Main
│   ├── Expertise
│   ├── Education
│   ├── Timeline
│   └── Project
└── Footer
```

### Component Types

1. **Page Sections** (`Education.tsx`, `Expertise.tsx`, etc.)
   - Contain data arrays
   - Render multiple card components
   - Include section headers

2. **Card Components** (`EducationCard.tsx`, `ProjectCard.tsx`, etc.)
   - Reusable display components
   - Accept props for data
   - Handle their own styling

3. **Utility Components** (`SocialIcons.tsx`, `FadeIn.tsx`)
   - Shared across multiple sections
   - Reusable functionality

---

## 🎯 Best Practices Followed

### Code Organization
- ✅ Consistent file naming
- ✅ Logical directory structure
- ✅ Separation of concerns (components, utils, hooks, types)
- ✅ Barrel exports for clean imports

### TypeScript
- ✅ Centralized type definitions
- ✅ Consistent use of interfaces
- ✅ Type safety throughout

### Styling
- ✅ SCSS variables for theming
- ✅ Component-scoped styles
- ✅ Consistent naming conventions

### React
- ✅ Functional components
- ✅ Custom hooks for reusable logic
- ✅ Props interfaces defined
- ✅ Consistent import organization

---

## 🚀 Quick Navigation

| What you want to edit | File location |
|----------------------|---------------|
| Theme colors | `src/assets/styles/_variables.scss` |
| Projects content | `src/components/Project.tsx` |
| Education content | `src/components/Education.tsx` |
| Skills/Expertise | `src/components/Expertise.tsx` |
| Timeline/Experience | `src/components/Timeline.tsx` |
| Navigation items | `src/components/Navigation.tsx` |
| Social links | `src/components/SocialIcons.tsx` |
| Add new icons | `src/utils/icons.ts` |
| Type definitions | `src/types/index.ts` |

---

## 📚 Additional Documentation

- **`CONTENT_EDITING_GUIDE.md`**: Step-by-step guide for editing content
- **`THEME_CUSTOMIZATION_GUIDE.md`**: Complete guide for customizing theme
- **`README.md`**: Project overview and setup instructions

---

## 🎓 Understanding the Structure

This project follows a **feature-based organization** with separation of concerns:

- **Components** handle UI and presentation
- **Utils** contain business logic and constants
- **Hooks** provide reusable stateful logic
- **Types** ensure type safety
- **Styles** are organized by component

This structure makes it easy to:
- Find what you need quickly
- Make changes without breaking other parts
- Understand the codebase at a glance
- Scale and add new features

---

## ✨ Consistency Standards

1. **Always use** the centralized variables from `_variables.scss`
2. **Always import** components from `./components` using the barrel export
3. **Always define** types in `types/index.ts` for shared interfaces
4. **Always follow** the import organization pattern
5. **Always use** semantic naming (describe purpose, not appearance)

---

This structure is designed to be **maintainable**, **scalable**, and **easy to navigate** for both current and future developers! 🎉

