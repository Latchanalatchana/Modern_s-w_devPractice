import { useState, createContext } from 'react'
import Navbar from './components/common/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'
import Footer from './components/common/Footer'

export const ThemeContext = createContext()

function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className={isDark ? 'dark' : ''}>
        <div className={`min-h-screen transition-colors duration-300 ${
          isDark 
            ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white' 
            : 'bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900'
        }`}>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
