import React from 'react' 
import './Header.css'

const Header = () => {


     // BURGER MENU FUNCTION
     const toggleMobileMenu = () => {
      const menu_btn = document.querySelector('.hamburger');
      const mobile_panel = document.querySelector('.Mobile_panel');
  
      menu_btn.classList.toggle('is-active');
      mobile_panel.classList.toggle('is-active');
  
    };
    const handleLinkClick = () => {
      toggleMobileMenu(false);
    };
  return (
 
    <section className='h-wrapper'>
        <div className="h-container">
            <div className='logo-container'>
            
            <h1 className='logo-name'>REAL ESTATE</h1>
            </div>
            
            <div className="Mobile_panel ">
            <ul className='menu-items'> 
             <li>
             <a onClick={handleLinkClick} href="#residencies" className='a menu-option'
                >
               Residencies

               </a>
             </li>

               
               <li> <a onClick={handleLinkClick}  href="#our-value" className='a menu-option'>Our Value</a></li>
               <li> <a onClick={handleLinkClick}  href="#get-started" className='a menu-option'>Get Started</a></li>
                <button className='button'>
                <li><a onClick={handleLinkClick}  className='menu-option' href="#contact">Contact</a></li>
                </button>
                </ul>  
             </div>



            <div className="h-menu">
            <ul className='navlink'>
             <li>
             <a href="#residencies" className='a ki'
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
             <div className="hamburger_container">
              <button className="hamburger" onClick={toggleMobileMenu}>
                  <div className="bar"></div>
              </button>
          </div>

 
        </div>
    </section>
  )
}

export default Header
