import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Luxury Home" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/40"></div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover Your Dream <span className="text-accent">Luxury</span> Home
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our exclusive collection of premium properties in the most desirable locations.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/properties" className="btn btn-primary">
              View Properties
            </Link>
            <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="flex flex-col items-center text-white">
          <p className="mb-2 text-sm">Scroll to explore</p>
          <motion.div 
            className="w-1 h-8 bg-white/30 rounded-full overflow-hidden"
            animate={{ 
              background: ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.3)'] 
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity 
            }}
          >
            <motion.div 
              className="w-full bg-white"
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity 
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero