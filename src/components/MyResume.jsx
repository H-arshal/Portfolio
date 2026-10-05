import React from 'react';
import { Element, scroller } from 'react-scroll';
import { IssueLabel } from './comic/IssueLabel';
import MyPdfViewer from './MyPdfViewer';
import { 
  FaUser, 
  FaShieldHalved, 
  FaGraduationCap, 
  FaJava, 
  FaLeaf, 
  FaReact, 
  FaDatabase, 
  FaEllipsis, 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaDownload, 
  FaPaperclip,
  FaArrowRightLong
} from 'react-icons/fa6';
import '../styles/Resume.css';
import pdfUrl from '../resume/Resume.pdf';

function MyResume() {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  const scrollToProjects = () => {
    scroller.scrollTo('project', {
      smooth: true,
      duration: 500,
      offset: -80,
    });
  };

  return (
    <Element name="resume" className="resume-section">
      <div className="resume-container">
        
        {/* Section Issue Marker & Header */}
        <div className="resume-issue-group">
          <IssueLabel issue="ISSUE #004" title="" />
          <span className="resume-credentials-label">// CREDENTIALS</span>
        </div>

        <div className="resume-header-row">
          <div className="resume-title-box">
            <h2 className="resume-title">
              {'DOSSIER'.split('').map((char, index) => (
                <span key={index} className="hover-letter">{char}</span>
              ))}
            </h2>
            <div className="red-brush-underline"></div>
          </div>

          <div className="resume-subtitle-card">
            <p className="subtitle-card-text">
              A record of my experience, education and technical expertise that <span className="highlight-red">powers real-world impact.</span>
            </p>
          </div>

          <div className="blueprint-arrow-annotation">
            <span className="arrow-text">THE BLUEPRINT<br/>BEHIND THE WORK</span>
            <span className="hand-arrow">↗</span>
          </div>
        </div>

        {/* Main 2-Column Content Grid */}
        <div className="resume-content-grid">
          
          {/* Left Column: Dossier Cards */}
          <div className="resume-left-col">
            
            {/* Card 1: PROFILE STATUS */}
            <div className="resume-dossier-card">
              <div className="card-sticker-label yellow-sticker">PROFILE STATUS</div>
              
              <div className="profile-roles-grid">
                <div className="role-item">
                  <div className="role-icon-box red-icon"><FaUser /></div>
                  <span className="role-name">SOFTWARE ENGINEER</span>
                  <span className="role-sub">BUILDER</span>
                </div>

                <div className="role-item">
                  <div className="role-icon-box blue-icon"><FaShieldHalved /></div>
                  <span className="role-name">CYBERSECURITY ENTHUSIAST</span>
                  <span className="role-sub">RESEARCHER</span>
                </div>

                <div className="role-item">
                  <div className="role-icon-box yellow-icon"><FaGraduationCap /></div>
                  <span className="role-name">M.TECH (CYBER SECURITY)</span>
                  <span className="role-sub">LEARNER</span>
                </div>
              </div>
            </div>

            {/* Card 2: CORE STACK */}
            <div className="resume-dossier-card">
              <div className="card-sticker-label green-sticker">CORE STACK</div>
              
              <div className="stack-items-grid">
                <div className="stack-mini-pill">
                  <FaJava className="stack-icon java-color" />
                  <span>Java</span>
                </div>
                <div className="stack-mini-pill">
                  <FaLeaf className="stack-icon spring-color" />
                  <span>Spring Boot</span>
                </div>
                <div className="stack-mini-pill">
                  <FaReact className="stack-icon react-color" />
                  <span>React</span>
                </div>
                <div className="stack-mini-pill">
                  <FaDatabase className="stack-icon mysql-color" />
                  <span>MySQL</span>
                </div>
                <div className="stack-mini-pill">
                  <FaShieldHalved className="stack-icon sec-color" />
                  <span>Security</span>
                </div>
                <div className="stack-mini-pill">
                  <FaEllipsis className="stack-icon" />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Card 3: CONNECTIONS */}
            <div className="resume-dossier-card">
              <div className="card-sticker-label yellow-sticker">// CONNECTIONS</div>
              
              <div className="connections-grid">
                <button className="social-pill-btn" onClick={() => openLink("https://github.com/h-arshal")}>
                  <FaGithub className="soc-icon" />
                  <span>GitHub</span>
                  <span className="arr">→</span>
                </button>

                <button className="social-pill-btn" onClick={() => openLink("https://www.linkedin.com/in/harshal-moon-064956174/")}>
                  <FaLinkedin className="soc-icon linkedin-blue" />
                  <span>LinkedIn</span>
                  <span className="arr">→</span>
                </button>

                <button className="social-pill-btn" onClick={() => openLink("https://leetcode.com/u/harshal_jaipal/")}>
                  <span className="soc-icon lc-orange">🧩</span>
                  <span>LeetCode</span>
                  <span className="arr">→</span>
                </button>

                <button className="social-pill-btn" onClick={() => openLink("https://www.instagram.com/harshal.moon")}>
                  <FaInstagram className="soc-icon insta-pink" />
                  <span>Instagram</span>
                  <span className="arr">→</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Paper Resume Document Frame */}
          <div className="resume-right-col">
            <div className="paper-dossier-frame">
              
              {/* Paperclip Accent */}
              <div className="paperclip-accent">
                <FaPaperclip />
              </div>

              {/* Taped Updated Badge */}
              <div className="taped-updated-badge">
                <span>UPDATED<br/>2026</span>
              </div>

              {/* Resume Preview Top Badge */}
              <div className="resume-preview-badge">
                <span>RESUME PREVIEW</span>
              </div>

              {/* Embedded PDF Viewer */}
              <div className="pdf-viewer-dossier-wrapper">
                <MyPdfViewer />
              </div>

              {/* Download CTA Button */}
              <div className="download-cta-wrapper">
                <a 
                  href={pdfUrl} 
                  download="Harshal_Moon_Resume.pdf" 
                  className="download-resume-btn"
                >
                  <span>DOWNLOAD RESUME</span>
                  <FaDownload className="dl-icon" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Status & Next Section Bar */}
        <div className="resume-bottom-bar">
          <div className="bottom-system-status">
            <span className="sys-label">// SYSTEM STATUS</span>
            <div className="sys-indicator-row">
              <span className="sys-val">VERIFIED & UPDATED</span>
              <div className="green-signal-bars">
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
                <span className="bar bar4"></span>
              </div>
            </div>
          </div>

          <div className="bottom-quote-callout">
            <span className="quote-mark-red">“</span>
            <span className="quote-text-bold">THE BEST CODE IS WRITTEN WITH PURPOSE AND IMPACT.</span>
            <span className="quote-mark-red">”</span>
          </div>

          <div className="bottom-next-stop" onClick={scrollToProjects}>
            <span className="next-label">NEXT STOP:</span>
            <span className="next-title">CASE FILES</span>
            <FaArrowRightLong className="next-arr" />
          </div>
        </div>

      </div>
    </Element>
  );
}

export default MyResume;
