import React from 'react';
import { Element, scroller } from 'react-scroll';
import '../stylesheet/Hero.css';

function Hero() {
  const scrollToDevStack = () => {
    scroller.scrollTo('devstack', {
      smooth: true,
      duration: 500,
      offset: -25,
    });
  };

  return (
    <Element name="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Harshal.</h1>
        <h2 className="hero-subtitle">Software Architect</h2>
        <p className="hero-description">
          Building scalable, high-performance systems with Java and Spring Boot.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={scrollToDevStack}>
            Explore My Work
          </button>
        </div>
      </div>
    </Element>
  );
}

export default Hero;
