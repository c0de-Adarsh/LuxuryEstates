import React from 'react'
import NavBar from './Components/NavBar'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   <>
   <div className='flex flex-col min-h-screen'>
   <NavBar/>

   <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </AnimatePresence>
      </main>
   </div>
   
   </>
  )
}

export default App