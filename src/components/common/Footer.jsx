import { useContext } from 'react'
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { ThemeContext } from '../../App'

export default function Footer() {
  const { isDark } = useContext(ThemeContext)
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Projects', href: 'projects' },
    { label: 'Skills', href: 'skills' },
    { label: 'Contact', href: 'contact' },
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:latchana@example.com', label: 'Email' },
  ]

  return (
    <footer className={`transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 to-black border-t border-gray-800' 
        : 'bg-gradient-to-b from-gray-100 to-gray-50 border-t border-gray-300'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              LS
            </div>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Passionate AI/ML engineer building innovative solutions for real-world challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`transition-colors cursor-pointer font-semibold ${
                      isDark 
                        ? 'text-gray-400 hover:text-blue-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className={`text-lg font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Portfolio', href: '#' },
                { label: 'Blog', href: '#' },
                { label: 'Resume', href: '#' },
                { label: 'Contact', href: '#contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href}
                    className={`transition-colors font-semibold ${
                      isDark 
                        ? 'text-gray-400 hover:text-blue-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className={`text-lg font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-all transform hover:scale-110 ${
                      isDark
                        ? 'bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white'
                        : 'bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white'
                    }`}
                    title={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t ${isDark ? 'border-gray-800' : 'border-gray-300'} pt-8`}>
          {/* Footer Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className={`flex items-center gap-2 font-semibold text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Made with <FaHeart className="text-red-500 animate-pulse" size={18} /> by Latchana S
            </p>
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              © {currentYear} Latchana S. All rights reserved.
            </p>
            <Link
              to="home"
              smooth={true}
              offset={-70}
              duration={500}
              className={`p-3 rounded-full transition-all transform hover:scale-110 cursor-pointer ${
                isDark
                  ? 'bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white'
                  : 'bg-gray-200 hover:bg-blue-600 text-gray-700 hover:text-white'
              }`}
              title="Back to Top"
            >
              <FaArrowUp size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
