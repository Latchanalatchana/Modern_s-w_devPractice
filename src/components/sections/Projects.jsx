import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import { useState, useContext } from 'react'
import { ThemeContext } from '../../App'

export default function Projects() {
  const { isDark } = useContext(ThemeContext)
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'FAER Project (Hackathon)',
      description: 'Full-stack AI-enabled emergency response system for hackathon.',
      longDescription: 'Developed for a hackathon, this project integrates AI for emergency detection and response, featuring real-time data processing and alerting.',
      tech: ['React', 'Node.js', 'Python', 'AI'],
      category: 'AI/ML',
      github: 'https://github.com/Latchanalatchana/Hackathon',
      live: 'https://github.com/Latchanalatchana/Hackathon',
      icon: '🚨',
      image: 'bg-gradient-to-br from-red-500 to-yellow-600'
    },
    {
      id: 2,
      title: 'Medical Image Classification',
      description: 'CNN model for medical imaging achieving 94% accuracy. Classifies X-rays and medical scans using PyTorch.',
      longDescription: 'Deep learning model trained on medical imaging datasets. Achieves 94% accuracy on unseen test data with explainability features for medical professionals.',
      tech: ['Python', 'PyTorch', 'OpenCV', 'Keras'],
      category: 'AI/ML',
      github: 'https://github.com',
      live: 'https://example.com',
      icon: '🖼️',
      image: 'bg-gradient-to-br from-pink-500 to-red-600'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio with dark/light mode, smooth animations, and full-stack architecture.',
      longDescription: 'Professional portfolio website built with React and Tailwind CSS. Features theme switching, smooth scrolling, project filtering, and contact form integration.',
      tech: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
      category: 'Web',
      github: 'https://github.com',
      live: 'https://example.com',
      icon: '🌐',
      image: 'bg-gradient-to-br from-green-500 to-teal-600'
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: 'Interactive real-time dashboard with data visualization using Plotly and Flask backend.',
      longDescription: 'Comprehensive data analytics dashboard with real-time updates, multiple chart types, and interactive filtering capabilities for business intelligence.',
      tech: ['Python', 'Pandas', 'Plotly', 'Flask'],
      category: 'Data',
      github: 'https://github.com',
      live: 'https://example.com',
      icon: '📊',
      image: 'bg-gradient-to-br from-yellow-500 to-orange-600'
    },
    {
      id: 5,
      title: 'ML Pipeline Automation',
      description: 'End-to-end machine learning pipeline with preprocessing, training, and evaluation automation.',
      longDescription: 'Automated ML pipeline that handles data cleaning, feature engineering, model training, hyperparameter tuning, and performance evaluation with minimal manual intervention.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      category: 'AI/ML',
      github: 'https://github.com',
      live: 'https://example.com',
      icon: '⚙️',
      image: 'bg-gradient-to-br from-indigo-500 to-blue-600'
    },
    {
      id: 6,
      title: 'Sentiment Analysis Tool',
      description: 'NLP tool analyzing sentiment from social media data with 92% accuracy using transformers.',
      longDescription: 'Advanced sentiment analysis system using transformer models and VADER sentiment analysis. Processes social media data to extract meaningful insights about public opinion.',
      tech: ['Python', 'NLP', 'VADER', 'Transformers'],
      category: 'AI/ML',
      github: 'https://github.com',
      live: 'https://example.com',
      icon: '💬',
      image: 'bg-gradient-to-br from-purple-500 to-pink-600'
    },
  ]

  const categories = ['All', 'AI/ML', 'Web', 'Data']
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
        : 'bg-gradient-to-b from-gray-50 to-gray-100'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className={`text-lg mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore my portfolio of innovative AI/ML and full-stack development projects
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3 justify-center mb-16 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl shadow-blue-500/50'
                  : isDark
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border-2 border-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 cursor-pointer ${
                isDark
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-500 hover:shadow-blue-500/20'
                  : 'bg-white border-gray-300 hover:border-blue-500 hover:shadow-blue-500/20'
              }`}
            >
              {/* Project Header */}
              <div className={`h-40 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
                <span className="text-6xl relative">{project.icon}</span>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className={`text-2xl font-bold transition ${
                  isDark 
                    ? 'text-white group-hover:text-blue-400' 
                    : 'text-gray-900 group-hover:text-blue-600'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs font-bold border ${
                        isDark
                          ? 'bg-blue-600/20 text-blue-300 border-blue-600/50'
                          : 'bg-blue-100 text-blue-600 border-blue-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition flex-1 justify-center text-sm ${
                      isDark
                        ? 'bg-gray-700 hover:bg-blue-600 text-gray-300 hover:text-white'
                        : 'bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white'
                    }`}
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg text-white rounded-lg font-bold transition flex-1 justify-center text-sm"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
            <div className={`rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border-2 ${
              isDark
                ? 'bg-gray-900 border-blue-500/50'
                : 'bg-white border-blue-500/50'
            }`}>
              <div className={`sticky top-0 ${selectedProject.image} p-6 flex justify-between items-center`}>
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{selectedProject.icon}</span>
                  <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-white hover:text-gray-300 transition transform hover:scale-110 bg-black/30 p-2 rounded-full"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              <div className="p-8 space-y-6">
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {selectedProject.longDescription}
                </p>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-blue-400">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech, idx) => (
                      <span key={idx} className={`px-5 py-2 rounded-lg font-bold text-sm ${
                        isDark
                          ? 'bg-blue-600/30 text-blue-300 border border-blue-600/50'
                          : 'bg-blue-100 text-blue-600 border border-blue-300'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className={`flex-1 px-6 py-3 rounded-lg font-bold transition text-center ${
                    isDark
                      ? 'bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white'
                      : 'bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white'
                  }`}>
                    <FaGithub className="inline mr-2" /> View Code
                  </a>
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg text-white rounded-lg font-bold transition text-center">
                    <FaExternalLinkAlt className="inline mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
