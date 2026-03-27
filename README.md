# Latchana S - Portfolio

A beautiful, responsive, and interactive portfolio website built with React, Tailwind CSS, and Vite.

## Features

- ✨ **Modern UI/UX** - Stunning gradient designs and smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for optimal load times
- 🎨 **Tailwind CSS** - Beautiful, utility-first styling
- 🔗 **Smooth Navigation** - Seamless scroll navigation between sections
- 📧 **Contact Form** - Functional contact form for inquiries
- 🚀 **Ready to Deploy** - Easy deployment to GitHub Pages

## Sections

- **Navbar** - Fixed navigation with mobile menu
- **Hero** - Eye-catching landing section with CTA buttons
- **About** - Personal information and goals
- **Projects** - Showcase of completed projects with links
- **Skills** - Technical skills and proficiency levels
- **Contact** - Contact information and form
- **Footer** - Social links and copyright

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Deployment

### Deploy to GitHub Pages

1. Update `vite.config.js` with your repository name:
```javascript
base: '/your-repo-name/'
```

2. Create a `.github/workflows/deploy.yml` file:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm install
    - run: npm run build
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

3. Push to GitHub:
```bash
git add .
git commit -m "Deploy portfolio to GitHub Pages"
git push origin main
```

Your portfolio will be live at: `https://yourusername.github.io/repository-name/`

## Customization

### Update Personal Information
Edit the following files with your information:
- `src/components/Hero.jsx` - Name, title, description
- `src/components/About.jsx` - About content and goals
- `src/components/Projects.jsx` - Your projects
- `src/components/Skills.jsx` - Your skills
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Footer links

### Update Colors
Edit `tailwind.config.js` to customize the color scheme.

### Add Projects
Edit the `projects` array in `src/components/Projects.jsx` to add your own projects.

## Technologies Used

- **React** - UI library
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Scroll** - Smooth scrolling
- **React Icons** - Icon library

## License

This project is open source and available under the MIT License.

## Support

If you have any questions or need help, feel free to reach out at latchana@example.com

---

Made with ❤️ by Latchana S
