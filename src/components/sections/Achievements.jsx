import { useContext } from 'react'
import { FaTrophy, FaAward, FaCertificate, FaBook } from 'react-icons/fa'
import { ThemeContext } from '../../App'

export default function Achievements() {
  const { isDark } = useContext(ThemeContext)

  const achievements = [
    {
      id: 1,
      title: 'FAER Scholar',
      description: 'Selected as FAER Scholar for academic excellence and AI/ML research contributions',
      icon: FaBook,
      year: '2024',
      badge: '⭐'
    },
    {
      id: 2,
      title: 'AI Innovation Award',
      description: 'Recognized for innovative AI solutions in healthcare sector',
      icon: FaTrophy,
      year: '2024',
      badge: '🏆'
    },
    {
      id: 3,
      title: 'ML Certification',
      description: 'Advanced Machine Learning Specialization - Coursera Verified Certificate',
      icon: FaCertificate,
      year: '2023',
      badge: '🎓'
    },
    {
      id: 4,
      title: 'Hackathon Winner',
      description: 'First place in Inter-college AI/ML Hackathon with healthcare focus',
      icon: FaAward,
      year: '2024',
      badge: '🥇'
    },
  ]

  return (
    <section id="achievements" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-50 to-gray-100'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Achievements & Awards
            </span>
          </h2>
          <p className={`text-lg mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Recognitions and accomplishments in AI/ML and academics
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon
            return (
              <div
                key={achievement.id}
                className={`group p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20'
                    : 'bg-white border-gray-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 rounded-lg ${
                    isDark ? 'bg-blue-900 bg-opacity-30' : 'bg-blue-100'
                  }`}>
                    <Icon className="text-3xl text-blue-400" />
                  </div>
                  <span className="text-4xl">{achievement.badge}</span>
                </div>
                
                <h3 className={`text-2xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {achievement.title}
                </h3>
                
                <p className={`mb-6 text-base leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {achievement.description}
                </p>
                
                <div className="inline-block px-6 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-white">
                  {achievement.year}
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className={`p-8 rounded-2xl text-center border-2 transition-colors duration-300 ${
            isDark
              ? 'bg-gray-800 border-gray-700 hover:border-blue-500'
              : 'bg-white border-gray-300 hover:border-blue-500'
          }`}>
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
              4+
            </div>
            <p className={`text-lg font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Major Achievements
            </p>
          </div>

          <div className={`p-8 rounded-2xl text-center border-2 transition-colors duration-300 ${
            isDark
              ? 'bg-gray-800 border-gray-700 hover:border-blue-500'
              : 'bg-white border-gray-300 hover:border-blue-500'
          }`}>
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
              10+
            </div>
            <p className={`text-lg font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Certifications
            </p>
          </div>

          <div className={`p-8 rounded-2xl text-center border-2 transition-colors duration-300 ${
            isDark
              ? 'bg-gray-800 border-gray-700 hover:border-blue-500'
              : 'bg-white border-gray-300 hover:border-blue-500'
          }`}>
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
              100%
            </div>
            <p className={`text-lg font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Dedication
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
