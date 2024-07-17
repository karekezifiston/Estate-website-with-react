import React from 'react' 
import './Header.css'

const Header = () => {
  return (
 
    <section className='h-wrapper'>
        <div className="h-container">

            <img src="logo.png" alt="logo pic"width={100} />
            <h1 className='logo-name'>Urwagasabo  Estate</h1>

             <div className="h-menu">
                <a href="#residencies"
                >
               Residencies

                </a>

               <a href="#our-value">Our Value</a>
                <a href="#get-started">Get Started</a>
                <button className='button'>
                <a href="#contact">Contact</a>
                </button>
                
             </div>
        </div>
    </section>
  )
}

export default Header
