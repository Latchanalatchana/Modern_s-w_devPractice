import { useState, useContext } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { ThemeContext } from '../../App'

export default function Contact() {
  const { isDark } = useContext(ThemeContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'latchanalatchana2@gmail.com',
      link: 'mailto:latchanalatchana2@gmail.com',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '6369357399',
      link: 'tel:6369357399',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Name',
      value: 'Latchana',
      link: '#',
      color: 'from-pink-400 to-pink-600',
    },
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Latchanalatchana', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/%F0%9D%99%BB%F0%9D%9A%8A%F0%9D%9A%9D%F0%9D%9A%8C%F0%9D%9A%91%F0%9D%9A%8A%F0%9D%9A%97%F0%9D%9A%8A-%F0%9D%9A%82-a3b7163b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
  ]

  return (
    <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-b from-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-gray-50 to-gray-100'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className={`text-lg mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I'm always excited to work on interesting projects and collaborate with passionate individuals. Whether you have a question, project opportunity, or just want to connect, feel free to reach out. I'll get back to you as soon as possible.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon
                return (
                  <a
                    key={idx}
                    href={info.link}
                    className={`block p-6 rounded-xl transition-all duration-300 hover:scale-105 border-2 ${
                      isDark
                        ? 'bg-gray-800 border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20'
                        : 'bg-white border-gray-200 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-lg bg-gradient-to-br ${info.color} shadow-lg`}>
                        <Icon size={32} className="text-white" />
                      </div>
                      <div>
                        <div className={`text-sm font-semibold ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {info.label}
                        </div>
                        <div className={`text-lg font-bold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Social Links */}
            <div className={`pt-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
              <p className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Follow me on social media
              </p>
              <div className="flex gap-6">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
                        isDark
                          ? 'bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white'
                      }`}
                      title={social.label}
                    >
                      <Icon size={28} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`rounded-2xl p-10 transition-all duration-300 border-2 ${
            isDark
              ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20'
              : 'bg-white border-gray-200 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20'
          }`}>
            <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Send me a Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="text-6xl mb-4 animate-bounce">✅</div>
                <h4 className="text-2xl font-bold text-green-400 mb-2">Message Sent!</h4>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-bold mb-3 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-5 py-3 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDark
                        ? 'bg-gray-800 border-2 border-gray-700 text-white placeholder-gray-500'
                        : 'bg-gray-100 border-2 border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-bold mb-3 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-5 py-3 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDark
                        ? 'bg-gray-800 border-2 border-gray-700 text-white placeholder-gray-500'
                        : 'bg-gray-100 border-2 border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className={`block text-sm font-bold mb-3 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-5 py-3 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDark
                        ? 'bg-gray-800 border-2 border-gray-700 text-white placeholder-gray-500'
                        : 'bg-gray-100 border-2 border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-bold mb-3 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={`w-full px-5 py-3 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                      isDark
                        ? 'bg-gray-800 border-2 border-gray-700 text-white placeholder-gray-500'
                        : 'bg-gray-100 border-2 border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2 group text-lg"
                >
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
