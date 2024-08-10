import React from 'react' 
import './Header.css'

const Header = () => {
  return (
 
    <section className='h-wrapper'>
        <div className="h-container">
            <div className='logo-container'>
            <img src="logo.png" alt="logo pic"width={100} />
            <h1 className='logo-name'>Urwagasabo  Estate</h1>
            </div>
            
            <div className="h-menu">
            <ul>
             <li>
             <a href="#residencies" className='a'
                >
               Residencies

               </a>
             </li>

               
               <li> <a href="#our-value" className='a'>Our Value</a></li>
               <li> <a href="#get-started" className='a'>Get Started</a></li>
                <button className='button'>
                <li><a href="#contact">Contact</a></li>
                </button>
                </ul>  
             </div>
            

 
        </div>
    </section>
  )
}

export default Header
