
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Auth from './layout/Auth'
import Login from './layout/Login'
import Header from './components/header/Header'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'

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
 