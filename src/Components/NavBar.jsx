import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`text-2xl font-serif font-bold ${scrolled ? 'text-primary' : 'text-white'}`}>
              Luxury<span className="text-accent">Estates</span>
            </h1>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center mx-auto gap-8 rounded-md font-semibold space-x-1">
          <NavLink to="/" className={({ isActive }) => 
            `nav-link rounded-md py-2   bg-white ${isActive ? 'active' : ''} ${scrolled ? 'text-gray-700' : 'text-white'}`
          }>
            Home
          </NavLink>
          <NavLink to="/properties" className={({ isActive }) => 
            `nav-link  rounded-md py-2  bg-white ${isActive ? 'active' : ''} ${scrolled ? 'text-gray-700' : 'text-white'}`
          }>
            Properties
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            `nav-link  rounded-md py-2   bg-white ${isActive ? 'active' : ''} ${scrolled ? 'text-gray-700' : 'text-white'}`
          }>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            `nav-link  rounded-md py-2  bg-white ${isActive ? 'active' : ''} ${scrolled ? 'text-gray-700' : 'text-white'}`
          }>
            Contact
          </NavLink>
          
        </nav>
        <Link to="/contact" className=" hidden md:flex text-white bg-primary px-6 py-3 rounded-md font-medium transition-all duration-300  ">
            Get in Touch
          </Link>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden text-2xl focus:outline-none ${scrolled ? 'text-primary' : 'text-white'}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white absolute top-full left-0 w-full shadow-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-4 flex flex-col space-y-3">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/properties" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              Properties
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
            <Link 
              to="/contact" 
              className="btn btn-primary text-center"
              onClick={toggleMenu}
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default NavBar