import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Choose from './Components/Choose/Choose'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Choose/>
      <Contact/>
    </div>
  )
}

export default App
