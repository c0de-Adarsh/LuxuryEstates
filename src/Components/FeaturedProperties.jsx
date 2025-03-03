import { useState } from 'react'
import { motion } from 'framer-motion'
import PropertyCard from './PropertyCard'
import AnimatedSection from './AnimatedSection'
import { properties } from '../Data/properties'

const FeaturedProperties = () => {
  const featuredProperties = properties.filter(property => property.featured).slice(0, 3)

  return (
    <section className="section bg-gray-50 ">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title text-center">Featured Properties</h2>
          <p className="section-subtitle text-center mx-auto">
            Discover our handpicked selection of the most exceptional properties currently available
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProperties.map((property, index) => (
            <AnimatedSection key={property.id} delay={0.2 * (index + 1)}>
              <PropertyCard property={property} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <motion.a 
            href="/properties" 
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Properties
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default FeaturedProperties