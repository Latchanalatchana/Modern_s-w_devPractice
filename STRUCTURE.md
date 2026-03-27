# Portfolio Project Structure

## Directory Organization

```
src/
├── components/
│   ├── common/              # Reusable components
│   │   ├── Navbar.jsx       # Navigation bar with theme toggle
│   │   └── Footer.jsx       # Footer with social links
│   │
│   └── sections/            # Page sections
│       ├── Hero.jsx         # Hero/Banner section
│       ├── About.jsx        # About me section
│       ├── Projects.jsx     # Projects showcase
│       ├── Skills.jsx       # Skills & proficiency
│       ├── Achievements.jsx # Awards & achievements
│       └── Contact.jsx      # Contact & inquiries
├── hooks/
│   └── useTheme.js          # Theme context hook
├── utils/
│   └── constants.js         # App constants & data
├── styles/
│   └── globals.css          # Global styles
├── App.jsx                  # Main app component
├── main.jsx                 # Entry point
└── index.css                # Tailwind imports
```

## Component Organization Guidelines

### Common Components (`components/common/`)
- **Navbar.jsx** - Fixed navigation with theme toggle
- **Footer.jsx** - Footer with links and social media

### Section Components (`components/sections/`)
- **Hero.jsx** - Landing hero section with CTA
- **About.jsx** - Professional bio and highlights
- **Projects.jsx** - Portfolio projects with details
- **Skills.jsx** - Technical skills categorized
- **Achievements.jsx** - Awards, certifications, recognitions
- **Contact.jsx** - Contact form and information

### Hooks (`hooks/`)
- **useTheme.js** - Dark/light mode context hook

### Utils (`utils/`)
- **constants.js** - All data constants (projects, skills, achievements, etc.)

## Features

✅ Dark/Light Mode Toggle  
✅ Fully Responsive Design  
✅ Smooth Animations & Transitions  
✅ Professional UI/UX  
✅ Organized Component Structure  
✅ Reusable Components  
✅ SEO-Friendly  

## Setup & Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

The portfolio is ready for deployment on:
- **Vercel** - Recommended
- **Netlify**
- **GitHub Pages**

```bash
# Deploy to Vercel
vercel

# Deploy to Netlify
netlify deploy --prod
```
