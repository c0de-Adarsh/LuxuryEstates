import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PropertyCard from '../Components/PropertyCard'
import SearchBar from '../Components/SearchBar'
import AnimatedSection from '../Components/AnimatedSection'
import { properties } from '../Data/properties'
import { FaSort, FaFilter } from 'react-icons/fa'

const Properties = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties)
  const [sortOption, setSortOption] = useState('default')
  const [filterOpen, setFilterOpen] = useState(false)
  const [filters, setFilters] = useState({
    priceMin: '',
    priceMax: '',
    beds: '',
    propertyType: ''
  })

  const handleSearch = (searchParams) => {
    let filtered = [...properties]
    
    // Filter by location
    if (searchParams.location) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(searchParams.location.toLowerCase())
      )
    }
    
    // Filter by price range
    if (searchParams.priceRange) {
      const [min, max] = searchParams.priceRange.split('-')
      if (min && max) {
        filtered = filtered.filter(property => 
          property.price >= parseInt(min) && property.price <= parseInt(max)
        )
      } else if (min && min.includes('+')) {
        const minPrice = parseInt(min.replace('+', ''))
        filtered = filtered.filter(property => property.price >= minPrice)
      }
    }
    
    // Filter by bedrooms
    if (searchParams.bedrooms) {
      filtered = filtered.filter(property => 
        property.beds >= parseInt(searchParams.bedrooms)
      )
    }
    
    // Filter by property type
    if (searchParams.propertyType) {
      filtered = filtered.filter(property => 
        property.propertyType === searchParams.propertyType
      )
    }
    
    setFilteredProperties(filtered)
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const applyFilters = () => {
    let filtered = [...properties]
    
    // Filter by min price
    if (filters.priceMin) {
      filtered = filtered.filter(property => property.price >= parseInt(filters.priceMin))
    }
    
    // Filter by max price
    if (filters.priceMax) {
      filtered = filtered.filter(property => property.price <= parseInt(filters.priceMax))
    }
    
    // Filter by bedrooms
    if (filters.beds) {
      filtered = filtered.filter(property => property.beds >= parseInt(filters.beds))
    }
    
    // Filter by property type
    if (filters.propertyType) {
      filtered = filtered.filter(property => property.propertyType === filters.propertyType)
    }
    
    setFilteredProperties(filtered)
    setFilterOpen(false)
  }

  const resetFilters = () => {
    setFilters({
      priceMin: '',
      priceMax: '',
      beds: '',
      propertyType: ''
    })
    setFilteredProperties(properties)
    setFilterOpen(false)
  }

  const handleSort = (option) => {
    setSortOption(option)
    let sorted = [...filteredProperties]
    
    switch (option) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'beds-desc':
        sorted.sort((a, b) => b.beds - a.beds)
        break
      case 'area-desc':
        sorted.sort((a, b) => b.area - a.area)
        break
      default:
        // Default sorting (by ID)
        sorted.sort((a, b) => a.id - b.id)
    }
    
    setFilteredProperties(sorted)
  }

  return (
    <div>
      {/* Page Header */}
      <div className="bg-primary py-24 md:py-32">
        <div className="container">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Explore Our Properties
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Discover our exclusive collection of luxury properties in the most desirable locations.
            </p>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>
      
      {/* Properties Grid */}
      <section className="section bg-gray-50">
        <div className="container">
          {/* Filters and Sorting */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl font-medium text-primary mb-2">
                {filteredProperties.length} Properties
              </h2>
              <p className="text-gray-600">
                {filteredProperties.length === 0 
                  ? "No properties match your criteria" 
                  : "Showing all available properties"}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
              {/* Filter Button */}
              <div className="relative">
                <button 
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="flex items-center btn btn-outline"
                >
                  <FaFilter className="mr-2" />
                  Filter
                </button>
                
                {/* Filter Dropdown */}
                {filterOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg z-20 p-4"
                  >
                    <h3 className="text-lg font-medium mb-4">Filter Properties</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Price Range
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="number"
                            name="priceMin"
                            placeholder="Min"
                            value={filters.priceMin}
                            onChange={handleFilterChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                          />
                          <input
                            type="number"
                            name="priceMax"
                            placeholder="Max"
                            value={filters.priceMax}
                            onChange={handleFilterChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Bedrooms
                        </label>
                        <select
                          name="beds"
                          value={filters.beds}
                          onChange={handleFilterChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="">Any</option>
                          <option value="1">1+</option>
                          <option value="2">2+</option>
                          <option value="3">3+</option>
                          <option value="4">4+</option>
                          <option value="5">5+</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Property Type
                        </label>
                        <select
                          name="propertyType"
                          value={filters.propertyType}
                          onChange={handleFilterChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="">Any</option>
                          <option value="house">House</option>
                          <option value="apartment">Apartment</option>
                          <option value="condo">Condo</option>
                          <option value="villa">Villa</option>
                          <option value="penthouse">Penthouse</option>
                        </select>
                      </div>
                      
                      <div className="flex justify-between pt-2">
                        <button
                          onClick={resetFilters}
                          className="text-gray-600 hover:text-primary"
                        >
                          Reset
                        </button>
                        <button
                          onClick={applyFilters}
                          className="btn btn-primary py-2 px-4"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortOption}
                  onChange={(e) => handleSort(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md py-3 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="default">Sort By</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="beds-desc">Most Bedrooms</option>
                  <option value="area-desc">Largest Area</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FaSort />
                </div>
              </div>
            </div>
          </div>
          
          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <AnimatedSection key={property.id} delay={0.1 * (index % 3)}>
                  <PropertyCard property={property} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No properties found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria</p>
              <button 
                onClick={resetFilters}
                className="btn btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Properties