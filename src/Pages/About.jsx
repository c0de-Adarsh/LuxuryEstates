import { motion } from 'framer-motion'
import AnimatedSection from '../Components/AnimatedSection'
import { FaAward, FaUsers, FaHome, FaGlobe } from 'react-icons/fa'

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
            alt="Luxury Real Estate" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container relative z-10 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Luxury<span className="text-accent">Estates</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The premier luxury real estate agency with a focus on exceptional properties and client service.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="section-title">Our Story</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded in 2005, Luxury Estates began with a simple mission: to provide discerning clients with access to the world's most exceptional properties and deliver a level of service that exceeds expectations.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  What started as a boutique agency in Beverly Hills has grown into an international luxury real estate company with a presence in major cities across the globe. Despite our growth, we've maintained our commitment to personalized service and attention to detail.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our team of experienced professionals brings together expertise in real estate, architecture, interior design, and market analysis to provide a comprehensive approach to property acquisition and sales.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                  alt="Luxury Office" 
                  className="rounded-lg shadow-elegant w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-elegant">
                  <p className="text-primary font-serif font-bold text-xl">Est. 2005</p>
                  <p className="text-gray-600">Beverly Hills, CA</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">15+</div>
                <p className="text-gray-600">Years of Experience</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">500+</div>
                <p className="text-gray-600">Properties Sold</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">12</div>
                <p className="text-gray-600">Global Offices</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">98%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title text-center">Our Values</h2>
            <p className="section-subtitle text-center mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-elegant text-center">
                <div className="inline-block p-4 bg-primary bg-opacity-10 rounded-full mb-4">
                  <FaAward className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our business, from property selection to client interactions.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-elegant text-center">
                <div className="inline-block p-4 bg-primary bg-opacity-10 rounded-full mb-4">
                  <FaUsers className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Relationships</h3>
                <p className="text-gray-600">
                  We build lasting relationships with our clients based on trust, integrity, and exceptional service.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-elegant text-center">
                <div className="inline-block p-4 bg-primary bg-opacity-10 rounded-full mb-4">
                  <FaHome className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Expertise</h3>
                <p className="text-gray-600">
                  Our deep knowledge of luxury real estate markets ensures our clients make informed investment decisions.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-elegant text-center">
                <div className="inline-block p-4 bg-primary bg-opacity-10 rounded-full mb-4">
                  <FaGlobe className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">Global Perspective</h3>
                <p className="text-gray-600">
                  With a worldwide presence, we offer a truly international approach to luxury property services.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section bg-gray-50">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title text-center">Meet Our Leadership</h2>
            <p className="section-subtitle text-center mx-auto">
              The visionaries behind Luxury Estates
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-lg shadow-elegant overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                    alt="CEO" 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold">Jonathan Pierce</h3>
                  <p className="text-accent font-medium mb-4">CEO & Founder</p>
                  <p className="text-gray-600">
                    With over 25 years of experience in luxury real estate, Jonathan has established himself as a leader in the industry.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-lg shadow-elegant overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80" 
                    alt="COO" 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold">Alexandra Morgan</h3>
                  <p className="text-accent font-medium mb-4">Chief Operating Officer</p>
                  <p className="text-gray-600">
                    Alexandra's strategic vision has been instrumental in expanding Luxury Estates into new markets.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-lg shadow-elegant overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                    alt="CMO" 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold">Michael Chen</h3>
                  <p className="text-accent font-medium mb-4">Chief Marketing Officer</p>
                  <p className="text-gray-600">
                    Michael's innovative approach to luxury marketing has set new standards in the real estate industry.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Join Us */}
      <section className="section relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
            alt="Luxury Property" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="section-title">Join the Luxury Estates Family</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're looking to buy, sell, or join our team of professionals, we invite you to experience the Luxury Estates difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="/contact" 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
                <motion.a 
                  href="/careers" 
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Careers
                </motion.a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About