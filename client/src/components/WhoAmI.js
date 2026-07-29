import React from 'react';
import '../stylesheet/About.css';

function WhoAmI() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-heading">Who is <span>Harshal?</span></h2>
          <p className="about-text">
            I am a passionate Software Architect and Backend Engineer based in Maharashtra, India. With a deep focus on Java and Spring Boot ecosystems, I specialize in architecting scalable, resilient, and highly available web services.
          </p>
          <p className="about-text">
            I believe that great software is a blend of clean code, robust architecture, and seamless user experiences. When I'm not writing code, I'm exploring new technologies to push the boundaries of what I can build.
          </p>
        </div>
        <div className="about-image-wrapper">
          <div className="about-placeholder">
            <span>{'</>'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoAmI;