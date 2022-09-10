import React from 'react'
import './about.css'
import MI from "../../assets/ME3.png"
import Social from '../social/Social'
const About = () => {
  return (
    <section id='about'>
     
      <div className="container about__container pt-4">

        <div className="about__me">
          <div className="about__me-image">
            <img src={MI} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
         <h5>Get To Know</h5>
        <h2>About Me</h2>

          <p className=''>Hi, my name is Nil and currently I'm a Software Engineer student. With more than 2 years of experience I've both been coding for fun and designing websites for customers. <br /><br /> I could create you a custom code website or one done with WordPress. This past couple years I have used HTML, CSS, JS, Java and nowadays I'm really into React JS.</p>

          <p className='text-light mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          <div className="about-social">
            <button className='btn'><a href="#contact">Let's talk</a> </button>
            <Social/>
          </div>
          
        </div>
        
      </div> 

    </section>
  )
}

export default About