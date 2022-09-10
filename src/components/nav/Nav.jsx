import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BsBookHalf} from 'react-icons/bs'
import {FaUserAstronaut} from 'react-icons/fa'
import {RiServiceLine} from 'react-icons/ri'
import {TiContacts} from 'react-icons/ti'
import { useState } from 'react'

const Nav = () => {
  const [active, setActive] = useState('');
  return (
    <nav id='nav'>
      <a href="#" onClick={()=>setActive('#') } className={active === '#' ? 'active' : ''} ><AiFillHome/></a>
      <a href="#about" onClick={()=>setActive('#about') } className={active === '#about' ? 'active' : ''}><FaUserAstronaut/></a>
      <a href="#experience" onClick={()=>setActive('#experience') } className={active === '#experience' ? 'active' : ''}><BsBookHalf/></a>
      {/* <a href="#services" onClick={()=>setActive('#services') } className={active === '#services' ? 'active' : ''}><RiServiceLine/></a> */}
      <a href="#portfolio" onClick={()=>setActive('#portfolio') } className={active === '#portfolio' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActive('#contact') } className={active === '#contact' ? 'active' : ''}><TiContacts/></a>

    </nav>
  )
}

export default Nav