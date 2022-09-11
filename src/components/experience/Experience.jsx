import React from 'react'
import './experience.css'
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"



const Experience = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})  
    
      },[])
  return (
    <section className='exp-sect' id='experience'>
        <div className="container align-mobile-exp">
            
        <h5>What Skills I Have</h5>
        <h2>My experience</h2>

        <div className="containers-exp  mt-4">
            <div className="flex flex-col gap-2  lg:flex-row lg:gap-10 lg:place-content-between ">
            <div className="language-container" data-aos="fade">
                <h2> <span className='span-exp'>FRONT-END</span>  skills</h2>
                <div className="language-p">
                        <div className="name-language">
                            <h3>WORDPRESS</h3>
                            <h3>80%</h3>
                        </div>
                        <div className="bar">
                            <div className="inner-bar wp">
                            </div>
                        </div>
                </div>
                <div className="language-p">
                        <div className="name-language">
                            <h3>HTML & CSS </h3>
                            <h3>70%</h3>
                        </div>
                        <div className="bar">
                            <div className="inner-bar html">
                            </div>
                        </div>
                </div>
                <div className="language-p">
                                <div className="name-language">
                                    <h3>JAVASCRIPT</h3>
                                    <h3>60%</h3>
                                </div>
                                <div className="bar">
                                    <div className="inner-bar js">
                                    </div>
                                </div>
                        </div>
                    <div className="language-p">
                                <div className="name-language">
                                    <h3>REACT</h3>
                                    <h3>50%</h3>
                                </div>
                                <div className="bar">
                                    <div className="inner-bar react">
                                    </div>
                                </div>
                        </div>
                



                </div>
                <div className="language-container animate-down" data-aos="fade">
                    <h2> <span className='span-exp'>BACK-END</span>  skills</h2>
                    <div className="language-p">
                        <div className="name-language">
                            <h3>NODE</h3>
                            <h3>60%</h3>
                        </div>
                        <div className="bar">
                            <div className="inner-bar node">
                            </div>
                        </div>
                    </div>
                    <div className="language-p">
                        <div className="name-language">
                            <h3>MONGO DB</h3>
                            <h3>70%</h3>
                        </div>
                        <div className="bar">
                            <div className="inner-bar mongo">
                            </div>
                        </div>
                    </div>
                    <div className="language-p">
                        <div className="name-language">
                            <h3>MYSQL</h3>
                            <h3>50%</h3>
                        </div>
                        <div className="bar">
                            <div className="inner-bar sql">
                            </div>
                        </div>
                    </div>



                </div>
                <div className="language-container animate-up" data-aos="fade">
                        <h2><span className='span-exp'>Language </span> skills</h2>
                        <div className="language-p">
                                <div className="name-language">
                                    <h3>ENGLISH</h3>
                                    <h3>80%</h3>
                                </div>
                                <div className="bar">
                                    <div className="inner-bar eng">
                                    </div>
                                </div>
                            </div>
                            <div className="language-p">
                                <div className="name-language">
                                    <h3>GERMAN</h3>
                                    <h3>70%</h3>
                                </div>
                                <div className="bar">
                                    <div className="inner-bar deu">
                                    </div>
                                </div>
                            </div>
                            <div className="language-p">
                                <div className="name-language">
                                    <h3>SPANISH</h3>
                                    <h3>100%</h3>
                                </div>
                                <div className="bar">
                                    <div className="inner-bar es">
                                    </div>
                                </div>
                            </div>
                            <div className="language-p">
                                <div className="name-language">
                                    <h3>CATALAN</h3>
                                    <h3>100%</h3>
                                </div>
                                <div className="bar">
                                    <div className="inner-bar cat">
                                    </div>
                                </div>
                            </div>


                </div> 
            </div>
        </div>

        </div>
            


    </section>
  )
}

export default Experience