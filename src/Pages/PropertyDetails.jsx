import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBed, FaBath, FaRuler, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import AnimatedSection from '../Components/AnimatedSection'
import ContactForm from '../Components/ContactForm'
import { properties } from '../Data/properties'

const PropertyDetails = () => {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundProperty = properties.find(p => p.id === parseInt(id))
      setProperty(foundProperty)
      setLoading(false)
    }, 500)
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-medium mb-4">Property Not Found</h2>
        <p className="text-gray-600 mb-6">The property you're looking for doesn't exist or has been removed.</p>
        <Link to="/properties" className="btn btn-primary">
          Back to Properties
        </Link>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div>
      {/* Property Images Slider */}
      <div className="relative h-[50vh] md:h-[70vh] bg-gray-900">
        <motion.img
          key={currentImageIndex}
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-colors"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-colors"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1} / {property.images.length}
        </div>
      </div>
      
      {/* Property Details */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                      {property.title}
                    </h1>
                    <p className="flex items-center text-gray-600 text-lg">
                      <FaMapMarkerAlt className="mr-2 text-accent" />
                      {property.location}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <p className="text-3xl font-serif font-bold text-accent">
                      ${property.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              
              {/* Property Features */}
              <AnimatedSection delay={0.1}>
                <div className="bg-gray-50 rounded-lg p-6 mb-8 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <FaBed className="text-primary text-2xl" />
                    </div>
                    <p className="text-gray-600">Bedrooms</p>
                    <p className="text-xl font-medium">{property.beds}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <FaBath className="text-primary text-2xl" />
                    </div>
                    <p className="text-gray-600">Bathrooms</p>
                    <p className="text-xl font-medium">{property.baths}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <FaRuler className="text-primary text-2xl" />
                    </div>
                    <p className="text-gray-600">Area</p>
                    <p className="text-xl font-medium">{property.area} sq ft</p>
                  </div>
                </div>
              </AnimatedSection>
              
              {/* Description */}
              <AnimatedSection delay={0.2}>
                <div className="mb-8">
                  <h2 className="text-2xl font-medium text-primary mb-4">Description</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {property.description}
                  </p>
                </div>
              </AnimatedSection>
              
              {/* Amenities */}
              <AnimatedSection delay={0.3}>
                <div className="mb-8">
                  <h2 className="text-2xl font-medium text-primary mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <svg className="h-5 w-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
              
              {/* Location Map */}
              <AnimatedSection delay={0.4}>
                <div>
                  <h2 className="text-2xl font-medium text-primary mb-4">Location</h2>
                  <div className="bg-gray-200 rounded-lg overflow-hidden h-80">
                    <div className="h-full w-full flex items-center justify-center bg-gray-300">
                      <p className="text-gray-600">Map would be displayed here</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Contact Form */}
              <AnimatedSection>
                <div className="sticky top-24">
                  <div className="bg-white rounded-lg shadow-elegant overflow-hidden mb-8">
                    <div className="bg-primary p-6">
                      <h3 className="text-xl font-medium text-white">Interested in this property?</h3>
                      <p className="text-gray-200 mt-2">Fill out the form below and our agent will contact you shortly</p>
                    </div>
                    <div className="p-6">
                      <ContactForm />
                    </div>
                  </div>
                  
                  {/* Agent Info */}
                  <div className="bg-white rounded-lg shadow-elegant p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src="https://randomuser.me/api/portraits/men/85.jpg" 
                        alt="Agent" 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-medium">David Anderson</h3>
                        <p className="text-accent">Senior Real Estate Agent</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <a href="tel:+15551234567" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                        <FaPhone className="mr-3" />
                        (555) 123-4567
                      </a>
                      <a href="mailto:david@luxuryestates.com" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                        <FaEnvelope className="mr-3" />
                        david@luxuryestates.com
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* Similar Properties */}
      <section className="section bg-gray-50">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Similar Properties</h2>
            <p className="section-subtitle">You might also be interested in these properties</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {properties
              .filter(p => p.id !== property.id && p.propertyType === property.propertyType)
              .slice(0, 3)
              .map((similarProperty, index) => (
                <AnimatedSection key={similarProperty.id} delay={0.1 * (index + 1)}>
                  <Link to={`/properties/${similarProperty.id}`} className="block h-full">
                    <div className="card group h-full">
                      <div className="relative overflow-hidden">
                        <div className="h-64 overflow-hidden">
                          <img 
                            src={similarProperty.image} 
                            alt={similarProperty.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-medium text-primary truncate">
                            {similarProperty.title}
                          </h3>
                          <p className="text-accent font-serif font-bold whitespace-nowrap">
                            ${similarProperty.price.toLocaleString()}
                          </p>
                        </div>
                        
                        <p className="text-gray-600 mb-4 truncate">{similarProperty.location}</p>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PropertyDetails