import React from 'react'
import "./header.css"
import CTA from './CTA'
const Header = () => {
  return (
    <header id=''>

        <div className='container header__container'>
          <h5 className='text-light'>Nil Monfort - Fullstack Junior Developer</h5>

            <h1 className='text-3xl md:text-4xl lg:text-5xl'>Developing experiences that make people's lives simple</h1>
            <div className="header-cta">
                  <CTA/>

            </div>
        </div>
    </header>
  )
}

export default Header