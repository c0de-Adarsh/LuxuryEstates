import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Properties from './pages/Properties'
import PropertyDetails from './Pages/PropertyDetails'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App