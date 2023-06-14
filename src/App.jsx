import React from 'react'
import Header from './Componenets/Header/Header.jsx'
import Nav from './Componenets/Nav/Nav.jsx'
import About from './Componenets/About/About.jsx'
import Skills from './Componenets/Skills/Skills.jsx'
import Portfolio from './Componenets/Portfolio/Portfolio.jsx'
import Testimonials from './Componenets/Testimonials/Testimonials.jsx'
import Contact from './Componenets/Contact/Contact.jsx'
import Footer from './Componenets/Footer/Footer.jsx'
const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App