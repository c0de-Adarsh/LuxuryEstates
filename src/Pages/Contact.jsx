import { motion } from 'framer-motion'
import AnimatedSection from '../Components/AnimatedSection'
import ContactForm from '../Components/ContactForm'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
            alt="Contact Us" 
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
              Contact Us
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get in touch with our team of luxury real estate experts
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="section-title">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and one of our representatives will get back to you as soon as possible.
                </p>
                <ContactForm />
              </AnimatedSection>
            </div>
            
            {/* Contact Info */}
            <div>
              <AnimatedSection delay={0.2}>
                <h2 className="text-2xl font-medium text-primary mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <FaMapMarkerAlt className="text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Main Office</h3>
                      <p className="text-gray-600 mt-1">123 Luxury Lane, Beverly Hills, CA 90210</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <FaPhone className="text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                      <p className="text-gray-600">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <FaEnvelope className="text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600 mt-1">info@luxuryestates.com</p>
                      <p className="text-gray-600">sales@luxuryestates.com</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <FaClock className="text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                      <p className="text-gray-600 mt-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title text-center">Our Locations</h2>
            <p className="section-subtitle text-center mx-auto">
              Visit one of our luxury offices around the world
            </p>
          </AnimatedSection>
          
          <div className="mt-12 bg-white rounded-lg shadow-elegant overflow-hidden">
            <div className="h-[500px] bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Interactive map would be displayed here</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <AnimatedSection delay={0.1}>
              <div className="card p-6">
                <h3 className="text-xl font-medium text-primary mb-2">Beverly Hills</h3>
                <p className="text-gray-600 mb-4">123 Luxury Lane, Beverly Hills, CA 90210</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-600">beverlyhills@luxuryestates.com</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="card p-6">
                <h3 className="text-xl font-medium text-primary mb-2">New York</h3>
                <p className="text-gray-600 mb-4">456 Park Avenue, New York, NY 10022</p>
                <p className="text-gray-600">+1 (555) 234-5678</p>
                <p className="text-gray-600">newyork@luxuryestates.com</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="card p-6">
                <h3 className="text-xl font-medium text-primary mb-2">Miami</h3>
                <p className="text-gray-600 mb-4">789 Ocean Drive, Miami, FL 33139</p>
                <p className="text-gray-600">+1 (555) 345-6789</p>
                <p className="text-gray-600">miami@luxuryestates.com</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title text-center">Frequently Asked Questions</h2>
            <p className="section-subtitle text-center mx-auto">
              Find answers to common questions about our services
            </p>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <AnimatedSection delay={0.1}>
              <div className="card p-6">
                <h3 className="text-xl font-medium text-primary mb-2">How do I schedule a property viewing?</h3>
                <p className="text-gray-600">
                  You can schedule a property viewing by contacting us directly through our contact form, calling our office, or sending an email. One of our agents will get back to you promptly to arrange a convenient time.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="card p-6">
                <h3 className="text-xl font-medium text-primary mb-2">What areas do you serve?</h3>
                <p className="text-gray-600">
                  Luxury Estates has offices in major cities across the United States and internationally. Our primary markets include Beverly Hills, New York, Miami, London, Paris, and Dubai, but we can assist with luxury properties worldwide through our network of partners.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="card p-6">
                <h3 className="text-xl font-medium text-primary mb-2">How long does the buying process typically take?</h3>
                <p className="text-gray-600">
                  The timeline for purchasing a luxury property varies depending on several factors, including financing, property condition, and negotiation complexity. On average, the process takes 30-60 days from offer acceptance to closing, but our team works diligently to ensure a smooth and efficient transaction.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="card p-6">
                <h3 className="text-xl font-medium text-primary mb-2">Do you offer property management services?</h3>
                <p className="text-gray-600">
                  Yes, we offer comprehensive property management services for luxury homes and investment properties. Our services include tenant screening, maintenance coordination, financial reporting, and more. Contact us for a customized property management solution.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact