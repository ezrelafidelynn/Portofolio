import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'contact', label: 'Contact', icon: '📬' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-panel backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-blue flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">Ezrela</h1>
              <p className="text-xs text-gray-400">Full-Stack Developer</p>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-neon-purple to-neon-cyan text-white shadow-neon-purple'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="glass-panel p-3 rounded-full text-gray-400 hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Status Indicator */}
          <div className="hidden lg:flex items-center space-x-2 glass-panel px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Available for work</span>
          </div>
        </div>
      </div>

      {/* Floating Navigation Dots (Mobile) */}
      <div className="md:hidden fixed bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="glass-panel p-2 rounded-full flex space-x-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-neon-purple to-neon-cyan text-white shadow-neon-purple'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar