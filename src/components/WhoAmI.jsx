import React from 'react';
import { Element } from 'react-scroll';
import { IssueLabel } from './comic/IssueLabel';
import { FaGraduationCap, FaServer, FaShieldAlt, FaRocket, FaQuoteLeft } from 'react-icons/fa';
import '../styles/About.css';
import researchArt from '../assets/hero/hero-research.png';

function WhoAmI() {
  const chapters = [
    {
      num: "01",
      tag: "FOUNDATION",
      title: "Education & Algorithms",
      icon: <FaGraduationCap />,
      description: "Based in Maharashtra, India. Grounded in Computer Science & Engineering principles, data structures, and fundamental software design."
    },
    {
      num: "02",
      tag: "BACKEND ARCHITECTURE",
      title: "Java, Spring & Microservices",
      icon: <FaServer />,
      description: "Focusing on high-throughput backend infrastructure, RESTful APIs, Spring Boot, and robust relational & non-relational database design."
    },
    {
      num: "03",
      tag: "CYBERSECURITY",
      title: "CyberCell Secretary & Vulnerability Research",
      icon: <FaShieldAlt />,
      description: "Serving as Technical Secretary of CyberCell. Investigating system security from an attacker's lens, exploring cache side-channel attacks & defensive architecture."
    },
    {
      num: "04",
      tag: "REAL-WORLD IMPACT",
      title: "Production Systems & Engineering",
      icon: <FaRocket />,
      description: "Transforming complex engineering problems into clean, secure, and performant production applications built for real-world reliability."
    }
  ];

  return (
    <Element name="myself" className="about-section">
      <div className="about-container">
        
        {/* Left Column - Journey Timeline & Philosophy */}
        <div className="about-content">
          <div className="about-issue-group">
            <IssueLabel issue="ISSUE #003" title="" />
            <span className="about-origin-label">// ORIGIN STORY</span>
          </div>

          <h2 className="about-title">
            <span className="word-wrap">
              {'THE'.split('').map((char, index) => (
                <span key={index} className="hover-letter">{char}</span>
              ))}
            </span>
            <span className="word-wrap">
              {"ENGINEER'S".split('').map((char, index) => (
                <span key={index} className="hover-letter">{char}</span>
              ))}
            </span>
            <span className="word-wrap">
              {'JOURNEY'.split('').map((char, index) => (
                <span key={index} className="hover-letter">{char}</span>
              ))}
            </span>
          </h2>

          <p className="about-subtitle">
            From writing clean code to investigating system vulnerabilities — building resilient software step by step.
          </p>

          {/* 4-Chapter Origin Timeline Grid */}
          <div className="journey-grid">
            {chapters.map((chapter, idx) => (
              <div key={idx} className="chapter-card">
                <div className="chapter-card-header">
                  <span className="chapter-number">// CHAPTER {chapter.num}</span>
                  <span className="chapter-tag">{chapter.tag}</span>
                </div>
                <div className="chapter-title-row">
                  <span className="chapter-icon">{chapter.icon}</span>
                  <h3 className="chapter-title">{chapter.title}</h3>
                </div>
                <p className="chapter-desc">{chapter.description}</p>
              </div>
            ))}
          </div>

          {/* Philosophy Dossier Card */}
          <div className="philosophy-card">
            <div className="philosophy-header">
              <FaQuoteLeft className="quote-icon" />
              <span className="philosophy-label">THE PHILOSOPHY</span>
            </div>
            <p className="philosophy-text">
              I believe great software is a blend of performance, security, and resilience. 
              <strong> Secure by design, not by accident.</strong>
            </p>
          </div>
        </div>

        {/* Right Column - Research Artwork & Speech Bubble */}
        <div className="about-art-column">
          <div className="about-art-wrapper">
            
            {/* Comic Frame Artwork */}
            <div className="research-art-frame">
              <img src={researchArt} alt="Harshal Moon - Cybersecurity Research Pose" className="about-research-img" />
            </div>

            {/* Speech Bubble */}
            <div className="about-speech-bubble">
              <span className="quote-mark">“</span>
              <p className="speech-text">SECURE BY DESIGN,<br/>NOT BY ACCIDENT.</p>
              <span className="quote-mark">”</span>
            </div>

            {/* Decorative Comic Badge */}
            <div className="research-badge">
              <span>CYBERCELL TECHNICAL SECRETARY</span>
            </div>

          </div>
        </div>

      </div>
    </Element>
  );
}

export default WhoAmI;