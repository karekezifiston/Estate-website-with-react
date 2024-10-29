import React from 'react'
import './Hero.css'
// import {HilocationMaker} from 'react-icons/hi'
// import CountUp from 'React-CountUp'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="hero-container">
{/* .................left side................................. */}
            <div className="hero-right none-normal">
             <div className="image-container">
                <img src="./hero-image.png" alt="" />
             </div>
                
            </div>
         <div className="hero-left">
         <div className="hero-title">
          <div className="orange-circle"/>
          <h1>
            Discover <br /> Most Suitable <br /> Property
          </h1>
         </div>
         
         <div className="hero-des">
           <p>Find a Varierty of Properties that suit you very easilty Forget all difficulties in finding a residence for you</p>
         </div>
        </div>  
{/* .................right side................................. */}
            <div className="hero-right none-short">
             <div className="image-container">
                <img src="./hero-image.png" alt="" />
             </div>
                
            </div> 

        </div>
        
    </section>
  )
}

export default Hero
