import { useContext } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { ThemeContext } from '../../App'

export default function Hero() {
  const { isDark } = useContext(ThemeContext)

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-gradient-to-b ${
        isDark
          ? 'from-gray-900 to-gray-800'
          : 'from-gray-50 to-gray-100'
      }`}
    >
      <div className="max-w-5xl w-full text-center">
        {/* Animated Badge */}
        <div className="mb-8 inline-block animate-pulse">
          <span className={`inline-block px-6 py-2 rounded-full text-sm font-bold tracking-wider ${
            isDark
              ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-purple-300 border border-purple-500/30'
              : 'bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 border border-purple-300'
          }`}>
            ✨ AI/ML ENGINEER ASPIRING
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Latchana S
          </span>
        </h1>

        {/* Subheading */}
        <h2 className={`text-xl md:text-2xl lg:text-3xl font-semibold mb-6 ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`}>
          3rd Year CSE Student | AI & ML Innovator
        </h2>

        {/* Main Tagline */}
        <p className={`text-lg md:text-xl mb-2 font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent`}>
          Building AI Solutions for Real-World Healthcare Problems
        </p>

        {/* Description */}
        <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Passionate about leveraging machine learning and deep learning to create impactful solutions. 
          Experienced in full-stack development, data science, and AI research.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="projects"
            smooth={true}
            offset={-70}
            duration={500}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105 cursor-pointer text-lg"
          >
            Explore Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
            className={`px-8 py-4 border-2 rounded-lg font-bold transition-all transform hover:scale-105 cursor-pointer text-lg ${
              isDark
                ? 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
          >
            Let's Collaborate
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16">
          {[
            { icon: FaGithub, href: 'https://github.com/Latchanalatchana', label: 'GitHub' },
            { icon: FaLinkedin, href: 'https://www.linkedin.com/in/%F0%9D%99%BB%F0%9D%9A%8A%F0%9D%9A%9D%F0%9D%9A%8C%F0%9D%9A%91%F0%9D%9A%8A%F0%9D%9A%97%F0%9D%9A%8A-%F0%9D%9A%82-a3b7163b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
            { icon: FaEnvelope, href: 'mailto:latchanalatchana2@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full transition-all transform hover:scale-125 ${
                isDark
                  ? 'bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white'
                  : 'bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white'
              }`}
              title={label}
            >
              <Icon size={28} />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center animate-bounce mt-20">
          <FaArrowDown className="text-blue-400 text-2xl" />
        </div>
      </div>
    </section>
  )
}
