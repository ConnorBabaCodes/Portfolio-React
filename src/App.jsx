import React from 'react'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {


  return (
    <div className="App">
      
     <Navbar />
     <Hero />
     <Projects />
     <Testimonials />
     <Contact />
     <Footer />
    </div>
  )
}

export default App
