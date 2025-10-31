# Nicholas Ricketts - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and SCSS.

## 🚀 Features

- **Dark/Light Mode**: System-aware theme switching with smooth transitions
- **Responsive Design**: Mobile-first approach with breakpoints
- **Modern Stack**: React 18, TypeScript, Material-UI, FontAwesome
- **Theme Customization**: Centralized SCSS variables for easy theming
- **Content Management**: Simple data arrays for easy content updates
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

## 📁 Project Structure

```
src/
├── components/      # React components
├── assets/         # Images and styles
├── hooks/          # Custom React hooks
├── utils/          # Utilities and constants
└── types/          # TypeScript definitions
```

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed structure documentation.

## 🛠️ Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Deploy

```bash
npm run deploy
```

Deploys to GitHub Pages (configured in `package.json`).

## 📖 Documentation

- **[Content Editing Guide](./CONTENT_EDITING_GUIDE.md)**: How to edit projects, education, skills, and timeline
- **[Theme Customization Guide](./THEME_CUSTOMIZATION_GUIDE.md)**: How to customize colors, fonts, and styling
- **[Project Structure Guide](./PROJECT_STRUCTURE.md)**: Understanding the codebase organization

## 🎨 Customization

### Quick Theme Change

Edit `src/assets/styles/_variables.scss`:

```scss
$theme-accent: #your-color;
```

### Edit Content

- **Projects**: `src/components/Project.tsx`
- **Education**: `src/components/Education.tsx`
- **Skills**: `src/components/Expertise.tsx`
- **Experience**: `src/components/Timeline.tsx`

See [CONTENT_EDITING_GUIDE.md](./CONTENT_EDITING_GUIDE.md) for details.

## 🏗️ Built With

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Material-UI](https://mui.com/) - Component library
- [FontAwesome](https://fontawesome.com/) - Icons
- [SCSS](https://sass-lang.com/) - Styling
- [React Vertical Timeline](https://github.com/stephane-monnot/react-vertical-timeline) - Timeline component

## 📝 Best Practices

This project follows industry best practices:

- ✅ **DRY Principles**: No code duplication
- ✅ **Type Safety**: TypeScript throughout
- ✅ **Component Reusability**: Modular card components
- ✅ **SCSS Best Practices**: Variables, maps, semantic naming
- ✅ **Import Organization**: Consistent import patterns
- ✅ **Documentation**: Comprehensive guides and comments
- ✅ **Accessibility**: ARIA labels, semantic HTML
- ✅ **Performance**: Optimized builds, lazy loading ready

## 📄 License

This project was developed using a template from [yujisatojr/react-portfolio-template](https://github.com/yujisatojr/react-portfolio-template).

## 👤 Author

**Nicholas Ricketts**
- GitHub: [@nri-professional](https://github.com/nri-professional)
- LinkedIn: [nicholasricketts](https://www.linkedin.com/in/nicholasricketts/)
- Email: nicholasricketts59@gmail.com

---

Built with ❤️ using React and TypeScript