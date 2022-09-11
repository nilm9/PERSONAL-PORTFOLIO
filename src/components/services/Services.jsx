import React from 'react'
import './services.css'
import RING from "../../assets/ring.png"
import RING2 from "../../assets/ring2.png"
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"


const Services = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})  

  },[])
  return (  <section className='services-sect' id='services'>
  <div className="container ">

    <div className="title-serv">    
        <h5>How Can I Help You?</h5>
        <h2>My Services</h2>  
    </div>


    
    <div className="containers__serv" data-aos="fade-up"> 
            <div className="container__serv ">
                <div className="ct1">
                    <h2><span className='span-exp'>WEB  </span> DEVELOPMENT</h2>
                    <p>I could design and develop a website with multiple tools such as WordPress (Elementor) or just in plain code, for a more custom project. Ecommerce websites could also be developed.</p>
                    <button className='btn'><a href="#portfolio">View more</a> </button>
                </div>
                <div className="ct2">                
                  <img src={RING} alt="" />
                </div>

            </div> 
            <div className="container__serv " data-aos="fade-up">
                <div className="ct1">
                   <h2><span className='span-exp'>APP </span> DEVELOPMENT</h2>
                    <p>I could build a custom application for your business. It's a nice solution for managing customers and bills. Usually I use MERN for building the frond and backend.</p>
                    <button className='btn'><a href="#portfolio">View more</a> </button>
                </div>
                <div className="ct2">                
                  <img src={RING2} alt="" />
                </div>                    
            </div>           
            
            {/* <div className="container__serv">
                    
                    <h2><span className='span-exp'>UI/UX </span> DESIGN</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique officiis quia eaque quos exercitationem nulla iure cum fugit, debitis saepe, eveniet eius qui quasi. Molestiae, accusantium beatae. Facilis, voluptatem laborum.</p>

            </div>  */}




    </div>
  </div>



</section>)
}

export default Services