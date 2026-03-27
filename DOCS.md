# Latchana's Portfolio - Documentation

A modern, responsive AI/ML engineer portfolio website built with React, Tailwind CSS, and Vite. Features dark/light theme switching, smooth scrolling navigation, and interactive components showcasing projects, skills, and achievements.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Installation & Setup](#installation--setup)
5. [Project Structure](#project-structure)
6. [Component Guide](#component-guide)
7. [Configuration](#configuration)
8. [Customization](#customization)
9. [Deployment](#deployment)
10. [Troubleshooting](#troubleshooting)

---

## Project Overview

This portfolio showcases the work and skills of Latchana S, a 3rd-year Computer Science student specializing in AI & Machine Learning. The website is designed to be:

- **Modern & Professional:** Clean, gradient-based design with smooth animations
- **Fully Responsive:** Optimized for mobile, tablet, and desktop devices
- **Dark/Light Mode:** Theme switching with persistent state
- **Interactive:** Smooth scrolling, modals, forms, and filtering
- **Performance Optimized:** Built with Vite for fast development and production builds

---

## Features

### 🎨 Interactive Components
- **Hero Section:** Eye-catching landing with animated badge and CTAs
- **About Section:** Multi-part bio with quick facts and expertise grid
- **Skills Section:** 6 skill categories with search functionality and proficiency bars
- **Projects Section:** 6 featured projects with category filtering and detailed modals
- **Achievements Section:** Awards and recognitions with stats
- **Contact Section:** Contact information cards and working contact form
- **Footer:** 4-column layout with quick navigation and social links

### 🌓 Theme System
- Dark mode (default) and light mode
- Smooth theme transitions
- React Context-based state management
- Persistent theme preference

### 🎯 User Experience
- Smooth scrolling navigation
- Responsive design (mobile-first)
- Animated buttons and hover effects
- Form validation and success states
- Modal popups for project details
- Search functionality in skills section

### 📱 Responsive Design
- Mobile: Single column, optimized spacing
- Tablet: 2-column grids where applicable
- Desktop: 3-column layouts with full features

---

## Technology Stack

### Frontend
- **React 18:** UI library with hooks and context API
- **Vite 5.4.21:** Lightning-fast build tool and dev server
- **Tailwind CSS 3:** Utility-first CSS framework
- **React Scroll:** Smooth scrolling library
- **React Icons:** Icon library (Font Awesome)

### Development Tools
- **Node.js & npm:** Package management
- **PostCSS:** CSS processing
- **ESLint:** Code linting (optional)

### Styling
- Custom gradient utilities
- Responsive breakpoints (sm, md, lg)
- Dark mode with CSS variables
- Smooth transitions and animations

---

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git (optional)

### Steps

1. **Navigate to portfolio directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Development: `http://localhost:5173`
   - Production: Build and deploy files (see Deployment section)

### Build for Production

```bash
npm run build
```

This creates an optimized `dist` folder ready for deployment.

---

## Project Structure

```
portfolio/
├── index.html                 # HTML entry point
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── README.md                 # Project README
├── DOCS.md                   # This file
├── public/                   # Static assets
│   └── (favicon, images, etc.)
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Main App component with ThemeContext
    ├── index.css             # Global styles
    └── components/
        ├── common/
        │   ├── Navbar.jsx    # Navigation bar with theme toggle
        │   └── Footer.jsx    # Footer with links and social
        └── sections/
            ├── Hero.jsx      # Landing hero section
            ├── About.jsx     # About/bio section
            ├── Skills.jsx    # Skills showcase with search
            ├── Projects.jsx  # Projects grid with filtering
            ├── Achievements.jsx # Awards and stats
            └── Contact.jsx   # Contact form and info
```

---

## Component Guide

### Navbar.jsx
**Location:** `src/components/common/Navbar.jsx`

**Purpose:** Main navigation bar with theme toggle and smooth scrolling links

**Features:**
- Logo/brand name
- Navigation links (Home, About, Projects, Skills, Contact)
- Theme toggle button (sun/moon icon)
- Responsive mobile menu (collapsible)
- Sticky positioning

**Props:** None (uses ThemeContext)

**Theme Context Usage:**
```jsx
const { isDark, setIsDark } = useContext(ThemeContext)
```

---

### Hero.jsx
**Location:** `src/components/sections/Hero.jsx`

**Purpose:** Landing section with introduction and CTAs

**Features:**
- 8xl responsive heading
- Animated pulsing badge
- Main tagline and description
- Two CTA buttons (Explore Projects, Collaborate)
- Social media links (GitHub, LinkedIn, Email)
- Animated scroll indicator

**Customization Points:**
```jsx
// Badge text
<span className="...">✨ AI/ML ENGINEER ASPIRING</span>

// Main heading
<span className="...">Latchana S</span>

// Tagline
<p>Building AI Solutions for Real-World Healthcare Problems</p>

// Social links (modify URLs and icons)
{ icon: FaGithub, href: 'https://github.com', label: 'GitHub' }
```

---

### About.jsx
**Location:** `src/components/sections/About.jsx`

**Purpose:** Professional biography and expertise showcase

**Features:**
- Three narrative sections (Who I Am, Philosophy, Beyond Code)
- Quick facts card (Education, Focus, Goals)
- Expertise grid (4 items)
- Highlight statistics

**Modify About Content:**
```jsx
// Edit the highlights array
const highlights = [
  { number: '3+', label: 'Years of Learning', icon: FaGraduationCap },
  { number: '20+', label: 'Projects Delivered', icon: FaRocket },
  // ... add more
]

// Edit expertise array
const expertise = [
  { title: 'Machine Learning', description: 'NLP, Computer Vision, Deep Learning' },
  // ... add more
]
```

---

### Skills.jsx
**Location:** `src/components/sections/Skills.jsx`

**Purpose:** Technical skills showcase with search and proficiency bars

**Features:**
- 6 skill categories with emoji icons
- Search functionality to filter skills
- 3-column grid layout (responsive)
- Proficiency bars with percentages
- Smooth animations

**Add/Edit Skills:**
```jsx
const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'Java', 'C++', 'SQL', 'HTML/CSS'],
    color: 'from-blue-400 to-blue-600',
    icon: '💻',
  },
  // ... add more categories
]

const proficiencies = [
  { name: 'Python & ML', level: 90, icon: '🐍' },
  // ... add more
]
```

---

### Projects.jsx
**Location:** `src/components/sections/Projects.jsx`

**Purpose:** Portfolio projects showcase with filtering and details

**Features:**
- 6 projects with category tags
- Filter buttons (All, AI/ML, Web, Data)
- Project cards with gradients and icons
- Modal popup for detailed project info
- Technology stack tags
- GitHub and Live demo links

**Add/Edit Projects:**
```jsx
const projects = [
  {
    id: 1,
    title: 'AI Healthcare Chatbot',
    description: 'Short description...',
    longDescription: 'Detailed description...',
    tech: ['Python', 'TensorFlow', 'NLP', 'Flask'],
    category: 'AI/ML',
    github: 'https://github.com/your-repo',
    live: 'https://demo-link.com',
    icon: '🤖',
    image: 'bg-gradient-to-br from-blue-500 to-purple-600'
  },
  // ... add more projects
]
```

---

### Contact.jsx
**Location:** `src/components/sections/Contact.jsx`

**Purpose:** Contact information and contact form

**Features:**
- 3 contact info cards (Email, Phone, Location)
- Working contact form with validation
- Success message animation
- Social media links
- Form auto-clears after submission
- Fully styled inputs

**Modify Contact Info:**
```jsx
const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'latchana@example.com',
    link: 'mailto:latchana@example.com',
    color: 'from-blue-400 to-blue-600',
  },
  // ... edit other contact methods
]
```

---

### Achievements.jsx
**Location:** `src/components/sections/Achievements.jsx`

**Purpose:** Awards, certifications, and recognitions

**Features:**
- 4 achievement cards with icons
- Achievement statistics grid
- Year badges
- Responsive layout

**Add/Edit Achievements:**
```jsx
const achievements = [
  {
    id: 1,
    title: 'FAER Scholar',
    description: 'Selected as FAER Scholar...',
    icon: FaBook,
    year: '2024',
    badge: '⭐'
  },
  // ... add more achievements
]
```

---

### Footer.jsx
**Location:** `src/components/common/Footer.jsx`

**Purpose:** Site footer with navigation and social links

**Features:**
- Brand section with description
- Quick navigation links
- Resources section
- Social media links
- Copyright and back-to-top button

**Modify Footer Content:**
```jsx
const quickLinks = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  // ... edit navigation links
]

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  // ... edit social links
]
```

---

## Configuration

### Vite Configuration
**File:** `vite.config.js`

Default configuration includes React plugin and optimizations. Modify if needed:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false,
  }
})
```

### Tailwind Configuration
**File:** `tailwind.config.js`

Customize colors, spacing, and extensions:

```javascript
export default {
  theme: {
    extend: {
      // Add custom colors, fonts, etc.
    },
  },
  plugins: [],
}
```

### Environment Variables
Create `.env` file if needed for API endpoints:

```
VITE_API_URL=http://localhost:5000
VITE_GITHUB_URL=https://github.com/your-username
```

Access in components:
```jsx
const apiUrl = import.meta.env.VITE_API_URL
```

---

## Customization

### Change Brand Name & Info
Edit in multiple files:
- **Hero.jsx:** Main heading and tagline
- **Navbar.jsx:** Logo/brand text
- **Footer.jsx:** Brand section
- **About.jsx:** Bio content
- **Contact.jsx:** Contact details

### Update Social Links
Modify social URLs in:
- **Hero.jsx:** Social links array
- **Contact.jsx:** Social links array
- **Footer.jsx:** Social links array

Example:
```jsx
{ icon: FaGithub, href: 'https://github.com/your-username', label: 'GitHub' }
```

### Modify Colors & Gradients
All components use Tailwind gradients. Common gradients:
```jsx
// Blue to purple to pink (primary)
from-blue-400 via-purple-500 to-pink-500

// Individual color ranges
from-blue-400 to-blue-600
from-purple-400 to-purple-600
```

Edit in individual components or create Tailwind utilities in `index.css`.

### Change Theme Colors
Modify theme context behavior in `App.jsx`:
```jsx
const [isDark, setIsDark] = useState(true) // Default to dark mode
```

Toggle between light/dark in component classes:
```jsx
className={isDark ? 'bg-gray-900' : 'bg-white'}
```

---

## Deployment

### Build for Production
```bash
npm run build
```

Creates optimized files in `dist/` folder.

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

### Deploy to Netlify

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Drag & drop `dist` folder** to Netlify dashboard, or:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

### Deploy to GitHub Pages

1. **Update `vite.config.js`:**
   ```javascript
   export default defineConfig({
     base: '/portfolio/',
     // ... other config
   })
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   git add dist/
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

### Custom Server Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Copy `dist` folder to server**

3. **Serve with server:**
   ```bash
   # Node.js
   npx serve -s dist
   
   # Nginx/Apache
   Point root to dist/ folder
   ```

---

## Troubleshooting

### Dev Server Issues

**Port Already in Use:**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :5173   # Windows (find PID then taskkill /PID <PID> /F)
```

**Import Errors in Console:**
- Ensure component files are in correct directories:
  - `src/components/sections/` (Hero, About, Projects, Skills, Contact, Achievements)
  - `src/components/common/` (Navbar, Footer)

**Styling Not Loading:**
- Clear cache: `npm run dev` then hard refresh browser (Ctrl+Shift+R)
- Verify Tailwind CSS in `package.json` and `tailwind.config.js`

### Build Issues

**Build Fails:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Large Bundle:**
- Check for unused imports
- Use dynamic imports for large components
- Enable gzip compression on server

### Performance Issues

**Slow Page Load:**
- Optimize images (use webp format)
- Enable production mode: `NODE_ENV=production npm run build`
- Use CSS minification (automatic with Vite)

**Smooth Scrolling Not Working:**
- Ensure `react-scroll` is installed: `npm install react-scroll`
- Check Link component imports in components

---

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 13+, Chrome 90+

---

## Contributing

To contribute improvements:

1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

---

## License

This portfolio is the personal project of Latchana S. Feel free to use as inspiration for your own portfolio, but ensure you customize all content.

---

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [React Scroll Documentation](https://www.npmjs.com/package/react-scroll)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## Support

For questions or issues:
- Email: latchana@example.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

**Last Updated:** March 2026  
**Version:** 1.0.0
