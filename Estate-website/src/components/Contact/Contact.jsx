import React,{useState} from 'react'
import './Contact.css'


const Contact = () => {
  return (
    <section className='contact' id='contact'> 
          <div className='zombi'>
          <div className='iyambere'>
          <div className='ibiri'>
            <h3>Contact Us</h3>
            <h1>Easy to reach us</h1>
            <p>We always ready to make everything look easy to you
                by proving best service and make your wishes come true
            </p>

          </div>
          <div className='ebyiri'>
            <div className='inform' >
                <div className='call-chat'>
                    <div className='call'>
                        <h4>Call</h4>
                        <p>+250 780 377 645</p>
                        <a href="">Call now</a>
                    </div>
                     <div className='chat'>
                        <h4>Chat</h4>
                        <p>+250 780 377 645</p>
                        <a href="">Chat now</a>
                     </div>
                </div>
                <div className='call-chat'>
                    <div className='call'>
                        <h4>Video Call</h4>
                        <p>+250 780 377 645</p>
                        <a href="">Call now</a>
                    </div>
                     <div className='chat message'>
                        <h4>Message</h4>
                        <p>+250 780 377 645</p>
                        <a href="">Message now</a>
                     </div>
                </div>

            </div>
            </div>
            </div>
            <div className='iyindi'>
              <div className="image-containerr">
                <img src="./hero-image.png" alt="" />
              </div>
          </div>
          </div>
          
    </section>
  )
}

export default Contact
