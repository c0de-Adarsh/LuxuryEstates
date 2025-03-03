import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'

const testimonials = [
  {
    id: 1,
    name: 'Jennifer Lawrence',
    role: 'Homeowner',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Working with Luxury Estates was an absolute pleasure. Their attention to detail and understanding of our needs made finding our dream home effortless. The entire process was smooth and professional.',
  },
  {
    id: 2,
    name: 'Michael Johnson',
    role: 'Property Investor',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'As an investor, I appreciate the market insights and professional guidance provided by the Luxury Estates team. They helped me secure properties with excellent ROI potential. Highly recommended!',
  },
  {
    id: 3,
    name: 'Sophia Williams',
    role: 'First-time Buyer',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Being a first-time buyer was intimidating, but the team at Luxury Estates made it simple and stress-free. They explained every step and found us a beautiful home within our budget.',
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section bg-primary text-white">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title text-center text-white">What Our Clients Say</h2>
          <p className="section-subtitle text-center mx-auto text-gray-300">
            Hear from our satisfied clients about their experience working with Luxury Estates
          </p>
        </AnimatedSection>

        <div className="mt-12 relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12"
            >
              <FaQuoteLeft className="text-accent text-4xl mb-6" />
              <p className="text-lg md:text-xl mb-8">{testimonials[currentIndex].text}</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-medium">{testimonials[currentIndex].name}</h4>
                  <p className="text-accent">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-accent' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials