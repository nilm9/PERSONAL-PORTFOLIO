import React from 'react'
import './contact.css'
import FINGER from "../../assets/finger.png"
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

const Contact = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})  

  },[])
  return (
    <section className='contact__sec ' id='contact'>
      <div className="container cont-contact">
        <div className="img-sec" data-aos="fade-down">
          <img src={FINGER} alt="img contact" />
          <div className="bg-img"></div>
        </div>
        <form  className=''  action="https://formsubmit.co/08c21f7144ed9f44b504bf44e0d560a1" method='POST' data-aos="fade-up">
          <h5>Get in Touch</h5>
          <h2>Contact Me</h2>
          <input type="text" name='name' placeholder='Your Name'  required />
          <input type="email" name="email" placeholder='Your Email'  required/>
          <input type="hidden" name="_next" value="https://kaleidoscopic-pegasus-955f2c.netlify.app/thanks.html"/>
          <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn'>Send</button>
        </form>
      </div>

    </section>
  )
}

export default Contact