import React from "react";
import './Carousel.css';
import { useMediaQuery } from 'react-responsive';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const isMobile = useMediaQuery({ query: '(max-width: 1150px)' });
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 9820,
    cssEase: "linear"
  };

  return (
    <section className='r-wrapperr' id='residencies'>
      <div className="r-container">
        <div className="r-head">
          <span className='orangeText'>Best Choices</span><br />
          <span className='PrimaryText'>Popular Residencies</span>
        </div>
        <div className="section-one">
        <div className="slider-container">
          <Slider {...settings}>
            {[
              { src: "house 1.jpg", price: "40M", location: "Kicukiro" },
              { src: "house 2.jpg", price: "50M", location: "Gacuriro" },
              { src: "house 3.jpg", price: "55M", location: "Kibagabaga" },
              { src: "house 4.jpg", price: "55M", location: "Gacuriro" },
              { src: "house 2.jpg", price: "55M", location: "Kimironko" },
              { src: "house 6.jpg", price: "70M", location: "Nyarutarama" }
            ].map((house, index) => (
              <div className="Trend" key={index}>
                <div className="card">
                  <img className="ll" src={house.src} alt={`House ${index + 1}`} />
                  <div className="twos">
                  <h3>{house.price}<span>(FRW)</span></h3>
                  <h4>Location: <span>{house.location}</span></h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        </div>
        
      </div>
    </section>
  );
}

export default Carousel;
