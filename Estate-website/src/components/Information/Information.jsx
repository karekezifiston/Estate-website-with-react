import React from 'react'
import './Information.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='ways'>
        <div className='first-way'>
        <div className='logo-footer'>
          <img src="" alt="" />
          <h2>REAL ESTATE</h2>
       </div>
        </div>
        <div className='two-adress'>
        <div className='second-way'>
          <div className='second'>
            <p>KN 27 St, Nyarugenge,</p>
            <p>Kigali, Rwanda</p>
          </div>
        </div>
        <div className='third-way'>
        <p>karekezifiston30@gmail.com</p> 
          <p>+250 780 377 645</p>
        </div>
        </div>
      </div>
      <div className='other-ways'>
        <p>&copy; Saints 2024 All rights reserved</p>
        {/* <div className='footer-photos'>
          <img src="" width={25} alt="" />
          <img src="" width={25} alt="" />
          <img src="" width={25} alt="" />
          <img src="" width={25} alt="" />
        </div> */}
      </div>
      
    </div>
  )
}

export default Footer
