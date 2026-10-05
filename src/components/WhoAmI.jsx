import React from 'react';
import { Element, scroller } from 'react-scroll';
import { IssueLabel } from './comic/IssueLabel';
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaBullseye, 
  FaCode, 
  FaShieldHalved, 
  FaRocket,
  FaBookOpen,
  FaSchool,
  FaMicrochip,
  FaChartLine
} from 'react-icons/fa6';
import '../styles/About.css';
import dotTexture from '../assets/dot.png';
import ironMan from '../assets/about/iron-man.png';
import resumePdf from '../resume/Resume.pdf';

function WhoAmI() {
  // Timeline in Reverse Chronological Order (Most Recent at Top)
  const timelineEvents = [
    {
      year: "2024 – 2026",
      title: "M.Tech Cyber Security & CyberCell Secretary",
      icon: <FaShieldHalved />,
      description: "COEP Technological University, Pune. Researching cache side-channel attacks, hardware security & serving as Technical Secretary of CyberCell."
    },
    {
      year: "2023 – 2026",
      title: "Offensive Security & Advanced Backend",
      icon: <FaRocket />,
      description: "Explored vulnerability research, Spring Boot microservices, RESTful APIs, and secure software architecture."
    },
    {
      year: "2020 – 2024",
      title: "B.Tech in Computer Science & Engineering",
      icon: <FaGraduationCap />,
      description: "Built strong engineering fundamentals in data structures, algorithms, database management, and object-oriented design."
    },
    {
      year: "2019 – 2020",
      title: "Higher Secondary (12th Science)",
      icon: <FaBookOpen />,
      description: "Nirala Junior College. Specialized in Science and Mathematics."
    },
    {
      year: "2017",
      title: "Secondary School Certificate (10th)",
      icon: <FaSchool />,
      description: "Agragami High School. Solid academic foundation."
    }
  ];

  const scrollToResume = () => {
    scroller.scrollTo('resume', {
      smooth: true,
      duration: 500,
      offset: -80,
    });
  };

  return (
    <Element name="myself" className="about-section">
      <div className="about-container">
        
        {/* Section Issue Marker */}
        <div className="about-issue-group">
          <IssueLabel issue="ISSUE #003" title="" />
          <span className="about-origin-label">// ORIGIN STORY</span>
        </div>

        {/* Main 3-Column Grid */}
        <div className="about-three-column-grid">
          
          {/* Column 1: ABOUT ME Dossier */}
          <div className="about-col about-me-dossier">
            <span className="col-tech-tag">// ABOUT ME</span>
            
            <h2 className="about-dossier-title">
              <span className="word-wrap">
                {'TURNING'.split('').map((char, index) => (
                  <span key={index} className="hover-letter">{char}</span>
                ))}
              </span>
              <span className="word-wrap">
                {'IDEAS'.split('').map((char, index) => (
                  <span key={index} className="hover-letter">{char}</span>
                ))}
              </span>
              <span className="word-wrap">
                {'INTO'.split('').map((char, index) => (
                  <span key={index} className="hover-letter">{char}</span>
                ))}
              </span>
              <br />
              <span className="word-wrap red-text">
                {'IMPACTFUL'.split('').map((char, index) => (
                  <span key={index} className="hover-letter">{char}</span>
                ))}
              </span>
              <span className="word-wrap red-text">
                {'SYSTEMS'.split('').map((char, index) => (
                  <span key={index} className="hover-letter">{char}</span>
                ))}
              </span>
            </h2>

            <p className="about-bio-text">
              I'm a Computer Science graduate student specialising in Cyber Security at COEP Technological University, Pune. 
              I enjoy building robust backend systems, researching security challenges, and delivering solutions that create real-world impact.
            </p>

            <div className="about-details-list">
              <div className="detail-item">
                <div className="detail-icon-box"><FaGraduationCap /></div>
                <div className="detail-info">
                  <span className="detail-label">EDUCATION</span>
                  <p className="detail-val-primary">M.Tech in CS (Cyber Security) — COEP Tech Pune</p>
                  <p className="detail-val-sub">12th: Nirala Jr. College | 10th: Agragami High School</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-box"><FaBriefcase /></div>
                <div className="detail-info">
                  <span className="detail-label">FOCUS AREAS</span>
                  <p className="detail-val-primary">Backend Development, Security Research, System Design, DevOps</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-box"><FaBullseye /></div>
                <div className="detail-info">
                  <span className="detail-label">CURRENTLY</span>
                  <p className="detail-val-primary">Researching Cache Side-Channel Attacks & Building Scalable Applications</p>
                </div>
              </div>
            </div>

            <button onClick={scrollToResume} className="about-cta-btn">
              KNOW MORE ABOUT ME →
            </button>
          </div>

          {/* Column 2: JOURNEY TIMELINE (Reverse Chronological Order) */}
          <div className="about-col journey-timeline-card">
            <div className="timeline-header-badge">// JOURNEY TIMELINE</div>
            
            <div className="timeline-nodes-wrapper">
              {timelineEvents.map((evt, idx) => (
                <div key={idx} className="timeline-node-item">
                  <div className="timeline-node-dot">
                    {evt.icon}
                  </div>
                  <div className="timeline-node-content">
                    <span className="timeline-year">{evt.year}</span>
                    <h3 className="timeline-event-title">{evt.title}</h3>
                    <p className="timeline-event-desc">{evt.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="timeline-footer-link" onClick={scrollToResume}>
              <span>VIEW FULL JOURNEY →</span>
            </div>
          </div>

          {/* Column 3: QUOTE, AT A GLANCE & CORE SPECIALIZATIONS */}
          <div className="about-col about-right-col">
            
            {/* Top Quote Card */}
            <div className="yellow-quote-dossier">
              <img src={dotTexture} alt="" className="quote-dot-texture" />
              <span className="quote-mark-lg">“</span>
              <p className="quote-body-text">
                The goal isn't just to build software that works. The goal is to build software that lasts.
              </p>
              <span className="quote-author-name">— Harshal Moon</span>
            </div>

            {/* Middle At A Glance Stat Grid */}
            <div className="at-a-glance-card">
              <div className="at-a-glance-label">// AT A GLANCE</div>
              
              <div className="glance-stats-grid">
                <div className="stat-cell">
                  <span className="stat-number">17+</span>
                  <span className="stat-name">PROJECTS</span>
                </div>
                <div className="stat-cell">
                  <span className="stat-number">3+</span>
                  <span className="stat-name">YEARS CODING</span>
                </div>
                <div className="stat-cell">
                  <span className="stat-number">5+</span>
                  <span className="stat-name">TECH STACKS</span>
                </div>
                <div className="stat-cell">
                  <span className="stat-number">∞</span>
                  <span className="stat-name">LEARNING</span>
                </div>
              </div>
            </div>

            {/* Bottom Core Specializations Card */}
            <div className="specializations-card">
              <div className="at-a-glance-label">// CORE SPECIALIZATIONS</div>
              <div className="specializations-grid">
                <div className="spec-pill"><FaCode className="spec-icon" /> SOFTWARE ENG</div>
                <div className="spec-pill"><FaShieldHalved className="spec-icon" /> CYBERSECURITY</div>
                <div className="spec-pill"><FaMicrochip className="spec-icon" /> SYSTEMS RESEARCH</div>
                <div className="spec-pill"><FaChartLine className="spec-icon" /> DATA & ANALYTICS</div>
              </div>
            </div>

          </div>

        </div>

        {/* Iron Man Comic Accent */}
        <img src={ironMan} alt="Iron Man Accent" className="ironman-accent-img" />

      </div>
    </Element>
  );
}

export default WhoAmI;