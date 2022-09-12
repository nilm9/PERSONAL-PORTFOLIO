

import Header from './components/header/Header'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import {BrouserRouter, Routes, Route} from 'react-router-dom '


function App() {

  return (
    <>
        <Header/>
        <Nav/>
        <About/>

        <Experience/>
        <Services/>
        <Portfolio/>
        <Contact/>

        <Footer/>
    
    
    </>


  )
}

export default App
 