import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <Hero/>
        <About/>
        <Portfolio/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App