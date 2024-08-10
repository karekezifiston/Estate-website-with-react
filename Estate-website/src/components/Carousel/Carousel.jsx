import React from "react";
import './Carousel.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1000,
    autoplaySpeed:9820,
    cssEase: "linear"
  };
  
  return (
    <section className='r-wrapperr' id='residencies'>
    <div>
       <div className="r-container">
        <div className="r-head">
          <span className='orangeText'>Best Choices</span><br />
          <span className='PrimaryText'>Popular Residencies</span>
        </div>
        
       </div>
      <div className="section-one">
        {/* <h1>This for the infinite slider, and the hand slider (app.jsx).</h1> */}
        <div className="slider-container">
          <Slider {...settings}>
            <div className="Trend">
              <div className="card"><img className="ll" src="house 1.jpg" alt=""width={1100} height={0} /><h3>40M<span>(FRW)</span></h3><h4>Location: <span>Kicukiro</span> </h4></div>
            </div>
            <div className="Trend">
              <div className="card"><img className="ll" src="house 2.jpg" alt=""width={110} height={560} /><h3>50M<span>(FRW)</span></h3><h4>Location: <span>Gacuriro</span> </h4></div>
            </div>
            <div className="Trend">
              <div className="card"><img className="ll" src="house 3.jpg" alt=""width={510} height={360} /><h3>55M <span>(FRW)</span></h3><h4>Location: <span>Kibagabaga</span> </h4></div>
            </div>
            <div className="Trend">
              <div className="card"><img className="ll" src="house 4.jpg" alt=""width={510} height={360} /><h3>55M <span>(FRW)</span></h3><h4>Location: <span>Gacuriro</span> </h4></div>
            </div>
            <div className="Trend">
              <div className="card"><img className="ll" src="house 2.jpg" alt="" width={110} height={10}/><h3>55M <span>(FRW)</span></h3><h4>Location: <span>Kimironko</span> </h4></div>
            </div>
            <div className="Trend">
              <div className="card"><img className="ll" src="house 6.jpg" alt=""width={645}  /><h3>70M <span>(FRW)</span></h3><h4>Location: <span>Nyarutarama</span> </h4></div>
            </div>
            {/* <div className="Trend">
              <div className=""><img src="house 7.jpg" alt="" /></div>
            </div> */}
            {/* <div className="Trend">
              <div className="card">8</div>
            </div>
            <div className="Trend">
              <div className="card">9</div>
            </div> */}
          </Slider>
        </div>
      </div>
    </div>
  </section>
  );
}

export default  Carousel;
