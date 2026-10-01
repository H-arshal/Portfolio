import React from 'react';
import { Element, scroller } from 'react-scroll';
import { ComicButton } from './comic/ComicButton';
import { IssueLabel } from './comic/IssueLabel';
import '../styles/Hero.css';
import heroCharacter from '../assets/hero/hero.png'; 
import blackPaintStain from '../assets/black-paint-stain.png';
import artTower from '../assets/art-tower.png';
import edgePart from '../assets/edge-part.png';
import resumePdf from '../resume/Harshal_Dev.pdf'; 

function Hero() {
  const scrollToProjects = () => {
    scroller.scrollTo('project', {
      smooth: true,
      duration: 500,
      offset: -80,
    });
  };

  return (
    <Element name="home" className="hero-section">
      {/* Bottom-left Comic Halftone Texture Asset */}
      <img src={edgePart} alt="" className="hero-edge-part" />

      <div className="hero-container">
        
        {/* Left Content Column - Primary Visual Hierarchy */}
        <div className="hero-content">
          
          {/* Issue Marker */}
          <div className="hero-issue-group">
            <IssueLabel issue="ISSUE #001" title="" className="hero-issue" />
            <span className="origin-label">// ORIGIN</span>
          </div>
          
          {/* Main Name */}
          <div className="hero-title-group">
            <h1 className="hero-title-first">
              {'HARSHAL'.split('').map((char, index) => (
                <span key={index} className="hover-letter">{char}</span>
              ))}
            </h1>
            <h1 className="hero-title-last">
              {'MOON'.split('').map((char, index) => (
                <span key={index} className="hover-letter">{char}</span>
              ))}
            </h1>
          </div>
          
          {/* Professional Identity Badges */}
          <div className="hero-identity">
            <div className="identity-badge blue-badge">SOFTWARE ENGINEER</div>
            <div className="identity-badge blue-badge">CYBERSECURITY RESEARCHER</div>
          </div>
          
          {/* Positioning Statement Card */}
          <div className="positioning-card">
            <p className="positioning-text">
              I build scalable systems, explore security, and turn ideas into working software.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <ComicButton variant="primary" onClick={scrollToProjects} className="hero-btn-primary">
              EXPLORE MY WORK →
            </ComicButton>
            <ComicButton variant="secondary" href={resumePdf} target="_blank" rel="noopener noreferrer" className="hero-btn-secondary">
              DOWNLOAD RESUME <span style={{ marginLeft: '6px' }}>↓</span>
            </ComicButton>
          </div>

          {/* Technical Strip */}
          <div className="hero-tech-strip">
            <span className="tech-item">// JAVA</span>
            <span className="tech-item">// SPRING BOOT</span>
            <span className="tech-item">// REACT</span>
            <span className="tech-item">// MYSQL</span>
            <span className="tech-item">// CYBERSECURITY</span>
          </div>
        </div>
        
        {/* Right Column - Character Illustration & Storytelling Elements */}
        <div className="hero-art-column">
          <div className="character-wrapper">
            
            {/* Background Graphic Accents & Skyscraper Blueprint */}
            <div className="character-bg-halo"></div>
            <img src={artTower} alt="" className="hero-art-tower" />

            {/* Handwritten Code Deploy Repeat Annotation */}
            <div className="code-deploy-annotation">
              CODE<br/>DEPLOY<br/>REPEAT ↘
            </div>

            {/* Character Image */}
            <img 
              src={heroCharacter} 
              alt="Harshal Moon - Software Engineer & Cybersecurity Researcher" 
              className="hero-character-img" 
            />

            {/* Black Paint Stain Asset directly below shoes */}
            <img 
              src={blackPaintStain} 
              alt="" 
              className="shoes-black-stain" 
            />

            {/* Current Focus Dossier Card */}
            <div className="current-focus-card">
              <div className="focus-badge">CURRENT FOCUS</div>
              <ul className="focus-list">
                <li>SYSTEM DESIGN</li>
                <li>CYBERSECURITY</li>
                <li>RESEARCH</li>
                <li>FULL STACK DEV</li>
              </ul>
            </div>

            {/* Primary Speech Bubble */}
            <div className="hero-speech-bubble">
              <span className="quote-mark">“</span>
              <p className="speech-text">EVERY LINE OF CODE TELLS A STORY.</p>
              <span className="quote-mark">”</span>
            </div>

            {/* Restrained Comic Tag */}
            <div className="character-tag">
              <span>Java Developer</span>
            </div>
            
          </div>
        </div>
        
      </div>
    </Element>
  );
}

export default Hero;
