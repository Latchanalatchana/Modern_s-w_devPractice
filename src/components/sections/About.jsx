import { useContext } from 'react'
import { FaGraduationCap, FaRocket, FaBullseye, FaLightbulb, FaBrain, FaCode } from 'react-icons/fa'
import { ThemeContext } from '../../App'

export default function About() {
  const { isDark } = useContext(ThemeContext)

  const highlights = [
    { number: '3+', label: 'Years of Learning', icon: FaGraduationCap },
    { number: '20+', label: 'Projects Delivered', icon: FaRocket },
    { number: '10+', label: 'Technologies', icon: FaCode },
    { number: 'Expert', label: 'Problem Solver', icon: FaBrain },
  ]

  const expertise = [
    { title: 'Machine Learning', description: 'NLP, Computer Vision, Deep Learning' },
    { title: 'Full-Stack Dev', description: 'React, Node.js, Python, Flask' },
    { title: 'Data Science', description: 'Analytics, Visualization, Big Data' },
    { title: 'Healthcare AI', description: 'Medical imaging, predictive modeling' },
  ]

  return (
    <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-b from-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-gray-50 to-gray-100'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About My Journey
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-blue-400">Who I Am</h3>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm <span className="font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">Latchana</span>, a passionate 3rd-year Computer Science student with a specialization in AI & Machine Learning. My mission is to build intelligent systems that solve real-world challenges, particularly in healthcare innovation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-purple-400">My Philosophy</h3>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I believe in the transformative power of technology. Every project is an opportunity to learn, innovate, and contribute meaningfully to society. I approach problems with curiosity, creativity, and a commitment to excellence.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-pink-400">Beyond Code</h3>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Passionate about knowledge sharing, open-source contribution, and mentoring. I'm committed to continuous learning and collaborating with innovators worldwide to create impactful solutions.
              </p>
            </div>
          </div>

          {/* Right Content - Education Box */}
          <div className={`bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-1 rounded-3xl shadow-2xl`}>
            <div className={`rounded-3xl p-10 h-full flex flex-col justify-center transition-colors duration-300 ${
              isDark ? 'bg-gray-900' : 'bg-white'
            }`}>
              <h3 className={`text-3xl font-bold mb-8 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Quick Facts
              </h3>
              
              <div className="space-y-6">
                <div className="pb-6 border-b border-opacity-20 border-gray-400">
                  <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2 text-lg">
                    <FaGraduationCap /> Education
                  </h4>
                  <p className={isDark ? 'text-gray-300 text-base' : 'text-gray-700 text-base'}>
                    B.E in Computer Science<br/>
                    Specialization: AI & ML<br/>
                    <span className="text-sm opacity-75">3rd Year Student</span>
                  </p>
                </div>

                <div className="pb-6 border-b border-opacity-20 border-gray-400">
                  <h4 className="font-bold text-purple-400 mb-2 flex items-center gap-2 text-lg">
                    <FaRocket /> Current Focus
                  </h4>
                  <p className={isDark ? 'text-gray-300 text-base' : 'text-gray-700 text-base'}>
                    Healthcare AI, Deep Learning,<br/>
                    Full-Stack Development,<br/>
                    Research & Innovation
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-pink-400 mb-2 flex items-center gap-2 text-lg">
                    <FaBullseye /> Goal
                  </h4>
                  <p className={isDark ? 'text-gray-300 text-base' : 'text-gray-700 text-base'}>
                    Pioneer transformative AI solutions that revolutionize healthcare and improve lives globally
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Areas of Expertise
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : 'bg-white hover:bg-gray-50'
                } border border-opacity-10 border-blue-400 shadow-lg hover:shadow-xl`}
              >
                <h4 className="font-bold text-lg mb-2 text-blue-400">{item.title}</h4>
                <p className={isDark ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className={`p-8 rounded-xl text-center border transition-all duration-300 hover:scale-110 ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 hover:border-blue-400 hover:bg-gray-600'
                    : 'bg-white border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                } shadow-lg hover:shadow-2xl`}
              >
                <Icon className="text-4xl text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {item.number}
                </div>
                <div className={`text-sm font-semibold mt-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {item.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
