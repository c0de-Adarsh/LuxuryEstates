import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBed, FaBath, FaRuler } from 'react-icons/fa'

const PropertyCard = ({ property }) => {
  const { id, title, price, image, location, beds, baths, area, featured } = property

  return (
    <motion.div 
      className="card group h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden">
        {featured && (
          <div className="absolute top-4 left-4 z-10 bg-accent text-white text-sm font-medium py-1 px-3 rounded-full">
            Featured
          </div>
        )}
        <Link to={`/properties/${id}`}>
          <div className="h-64 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </Link>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium text-primary truncate">
            <Link to={`/properties/${id}`} className="hover:text-accent transition-colors">
              {title}
            </Link>
          </h3>
          <p className="text-accent font-serif font-bold whitespace-nowrap">
            ${price.toLocaleString()}
          </p>
        </div>
        
        <p className="text-gray-600 mb-4 truncate">{location}</p>
        
        <div className="flex justify-between text-gray-500 text-sm">
          <div className="flex items-center">
            <FaBed className="mr-2" />
            <span>{beds} {beds === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="flex items-center">
            <FaBath className="mr-2" />
            <span>{baths} {baths === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div className="flex items-center">
            <FaRuler className="mr-2" />
            <span>{area} sq ft</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PropertyCard