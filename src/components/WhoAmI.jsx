import React from 'react';
import { ComicPanel } from './comic/ComicPanel';
import { IssueLabel } from './comic/IssueLabel';
import { SpeechBubble } from './comic/SpeechBubble';
import '../styles/About.css';
import aboutCharacter from '../images/Harshal.png'; // One of the character images provided

function WhoAmI() {
  return (
    <section className="about-section">
      <div className="about-container">
        
        <div className="about-content">
          <IssueLabel issue="ISSUE #003" title="ORIGIN STORY" />
          <h2 className="text-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            THE ENGINEER
          </h2>
          
          <ComicPanel className="about-panel">
            <p className="text-body text-bold" style={{fontSize: '1.1rem'}}>
              I am Harshal Moon, a Software Engineer based in Maharashtra, India.
            </p>
            <p className="text-body">
              My focus is on the backend—Java, Spring Boot, and robust system architecture. However, my curiosity doesn't stop there. 
              I am actively involved in cybersecurity research, serving as the Technical Secretary of CyberCell, where I explore systems 
              from an attacker's perspective to build stronger defenses.
            </p>
            <p className="text-body" style={{marginBottom: 0}}>
              From writing clean code to investigating cache side-channel attacks, I believe great software is a blend of performance, 
              security, and resilience. When I'm not coding, I'm analyzing the next vulnerability or designing my next project.
            </p>
          </ComicPanel>
        </div>

        <div className="about-art">
          <img src={aboutCharacter} alt="Harshal Moon Character" className="about-character-img" />
          <SpeechBubble 
            text="Secure by design, not by accident." 
            className="about-speech-bubble" 
          />
        </div>
        
      </div>
    </section>
  );
}

export default WhoAmI;