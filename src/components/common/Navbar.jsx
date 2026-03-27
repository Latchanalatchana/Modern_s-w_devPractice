import { useState, useContext } from 'react'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { ThemeContext } from '../../App'
import { navItems } from '../../utils/constants'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, setIsDark } = useContext(ThemeContext)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={`fixed w-full backdrop-blur-md z-50 shadow-lg transition-colors duration-300 ${
      isDark 
        ? 'bg-gray-900 bg-opacity-95' 
        : 'bg-white bg-opacity-95'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Latchana S
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition cursor-pointer ${
                    isDark
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg transition ${
                isDark
                  ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
              title="Toggle dark/light mode"
            >
              {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition ${
                  isDark
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden transition-colors duration-300 ${
          isDark ? 'bg-gray-800' : 'bg-gray-100'
        } px-2 pt-2 pb-3 space-y-1`}>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition cursor-pointer ${
                isDark
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
