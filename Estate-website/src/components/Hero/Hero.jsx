import React from 'react'
import './Hero.css'
// import {HilocationMaker} from 'react-icons/hi'
// import CountUp from 'React-CountUp'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="hero-container">
{/* .................left side................................. */}
         <div className="hero-left">
         <div className="hero-title">
          <div className="orange-circle"/>
          <h1>
            Discover <br /> Most Suitable <br /> Property
          </h1>
         </div>
         
         <div className="hero-des">
          <span>Find a Varierty of Properties that suit you very easilty <br /></span>
          <span>Forget all difficulties in finding a residence for you </span>
         </div>
         <div className="search-bar">
          {/* <HilocationMaker color="var(--blue)"size={25}/> */}
          <input type="text" />
          <button className="button">Search</button>
         </div>
         {/* <div className="stats">
          <div className="stat">
            <span>CountUp start={8800} end={9000}  duration={4}</span>
            <span>+</span>
          </div>
         </div> */}
        </div>  
{/* .................right side................................. */}
            <div className="hero-right">
             <div className="image-container">
                <img src="./hero-image.png" alt="" />
             </div>
                
            </div> 

        </div>
        
    </section>
  )
}

export default Hero
