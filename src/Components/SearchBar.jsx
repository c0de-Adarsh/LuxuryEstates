import { useState } from 'react'
import { FaSearch, FaMapMarkerAlt, FaDollarSign, FaBed } from 'react-icons/fa'

const SearchBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    priceRange: '',
    bedrooms: '',
    propertyType: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setSearchParams(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchParams)
  }

  return (
    <div className="bg-white rounded-lg shadow-elegant p-6">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaMapMarkerAlt className="text-gray-400" />
            </div>
            <input
              type="text"
              name="location"
              value={searchParams.location}
              onChange={handleChange}
              placeholder="Location"
              className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaDollarSign className="text-gray-400" />
            </div>
            <select
              name="priceRange"
              value={searchParams.priceRange}
              onChange={handleChange}
              className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
            >
              <option value="">Price Range</option>
              <option value="0-500000">$0 - $500,000</option>
              <option value="500000-1000000">$500,000 - $1,000,000</option>
              <option value="1000000-2000000">$1,000,000 - $2,000,000</option>
              <option value="2000000-5000000">$2,000,000 - $5,000,000</option>
              <option value="5000000+">$5,000,000+</option>
            </select>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaBed className="text-gray-400" />
            </div>
            <select
              name="bedrooms"
              value={searchParams.bedrooms}
              onChange={handleChange}
              className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
            >
              <option value="">Bedrooms</option>
              <option value="1">1+ Bedroom</option>
              <option value="2">2+ Bedrooms</option>
              <option value="3">3+ Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
              <option value="5">5+ Bedrooms</option>
            </select>
          </div>

          <div>
            <select
              name="propertyType"
              value={searchParams.propertyType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
            >
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="villa">Villa</option>
              <option value="penthouse">Penthouse</option>
            </select>
          </div>
        </div>

        <button 
          type="submit" 
          className="mt-4 w-full btn btn-primary flex items-center justify-center"
        >
          <FaSearch className="mr-2" />
          Search Properties
        </button>
      </form>
    </div>
  )
}

export default SearchBar