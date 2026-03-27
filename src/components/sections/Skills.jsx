import { useState, useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import { ThemeContext } from '../../App'

export default function Skills() {
  const { isDark } = useContext(ThemeContext)
  const [searchTerm, setSearchTerm] = useState('')

  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'Java', 'C++', 'SQL', 'HTML/CSS'],
      color: 'from-blue-400 to-blue-600',
      icon: '💻',
    },
    {
      category: 'AI & Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'Deep Learning'],
      color: 'from-purple-400 to-purple-600',
      icon: '🤖',
    },
    {
      category: 'Web Development',
      skills: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Vite'],
      color: 'from-pink-400 to-pink-600',
      icon: '🌐',
    },
    {
      category: 'Data Science',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Jupyter', 'Power BI'],
      color: 'from-green-400 to-green-600',
      icon: '📊',
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git/GitHub', 'Docker', 'VS Code', 'Google Colab', 'AWS', 'Linux'],
      color: 'from-orange-400 to-orange-600',
      icon: '🔧',
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Communication', 'Leadership', 'Collaboration', 'Research', 'Teaching'],
      color: 'from-red-400 to-red-600',
      icon: '⭐',
    },
  ]

  const proficiencies = [
    { name: 'Python & ML', level: 90, icon: '🐍' },
    { name: 'Web Development', level: 85, icon: '⚛️' },
    { name: 'Data Analysis', level: 88, icon: '📈' },
    { name: 'Problem Solving', level: 92, icon: '🧠' },
    { name: 'Team Collaboration', level: 87, icon: '👥' },
    { name: 'Research & Innovation', level: 89, icon: '🔬' },
  ]

  return (
    <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
        : 'bg-gradient-to-b from-gray-50 to-gray-100'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className={`text-lg mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A comprehensive toolkit spanning AI, full-stack development, and data science
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Search Bar */}
        <div className="mb-16 flex justify-center">
          <div className="relative w-full max-w-lg">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-6 py-4 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDark
                  ? 'bg-gray-800 border-2 border-gray-700 text-white placeholder-gray-500 hover:border-blue-500'
                  : 'bg-white border-2 border-gray-200 text-gray-900 placeholder-gray-400 hover:border-blue-500'
              }`}
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, idx) => {
            const filteredSkills = category.skills.filter(skill =>
              skill.toLowerCase().includes(searchTerm.toLowerCase())
            )
            if (searchTerm && filteredSkills.length === 0) return null
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${category.color} p-1 rounded-2xl hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-2xl`}
              >
                <div className={`rounded-2xl p-8 h-full ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                }`}>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-4xl">{category.icon}</span>
                    <h3 className={`text-2xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {(searchTerm ? filteredSkills : category.skills).map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className={`px-4 py-2 rounded-lg transition transform hover:scale-110 text-sm font-bold border-2 cursor-pointer ${
                          isDark
                            ? 'bg-gray-800 text-blue-300 border-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600'
                            : 'bg-gray-100 text-blue-600 border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Proficiency Bars */}
        <div className={`rounded-2xl p-12 ${
          isDark 
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
            : 'bg-white border-2 border-gray-200'
        }`}>
          <h3 className="text-4xl font-bold mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Proficiency Levels
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {proficiencies.map((proficiency, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{proficiency.icon}</span>
                    <span className={`text-lg font-bold ${
                      isDark ? 'text-gray-200' : 'text-gray-900'
                    }`}>
                      {proficiency.name}
                    </span>
                  </div>
                  <span className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                    {proficiency.level}%
                  </span>
                </div>
                <div className={`w-full h-3 rounded-full overflow-hidden ${
                  isDark ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div
                    className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${proficiency.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
