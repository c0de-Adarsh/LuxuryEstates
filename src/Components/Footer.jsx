import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Luxury<span className="text-accent">Estates</span></h3>
            <p className="text-gray-300 mb-4">
              Providing premium real estate solutions with a focus on luxury properties and exceptional client service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-accent transition-colors">Properties</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-accent transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-accent transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-accent" />
                <span className="text-gray-300">123 Luxury Lane, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-accent" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-accent" />
                <span className="text-gray-300">info@luxuryestates.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest property updates.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button type="submit" className="w-full btn bg-accent hover:bg-opacity-90 text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LuxuryEstates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer