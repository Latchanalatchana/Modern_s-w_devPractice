import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';

export const ThemeContext = createContext()

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className={isDark ? 'dark' : ''}>
        <div
          className={`min-h-screen transition-colors duration-300 ${
            isDark
              ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white'
              : 'bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900'
          }`}
        >
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App
