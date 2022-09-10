import React from 'react'
import './footer.css'
import Social from '../social/Social'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container ft">
        <h5>Monfort Dev </h5>
        <div className="social"><Social/></div>
        <p>Copyright &copy; All Rights Reserved</p>
      </div>

    </footer>
  )
}

export default Footer