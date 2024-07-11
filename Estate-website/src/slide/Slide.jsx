// src/Slide.js

import React, { useState } from 'react';
import './Slide.css';

const Slide = () => {
  const [isSlideIn, setIsSlideIn] = useState(false);

  const toggleSlide = () => {
    setIsSlideIn(!isSlideIn);
  };

  return (
    <div className="container">
      <button onClick={toggleSlide}>Toggle Slide</button>
      <div className={`slide ${isSlideIn ? 'slide-in' : 'slide-out'}`}>
        Slide Content
      </div>
    </div>
  );
};

export default Slide;
