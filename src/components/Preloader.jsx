import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo-no-bg.png';
import '../styles/Preloader.css';

function Preloader() {
  const [progress, setProgress] = useState(0);
  const [statusLog, setStatusLog] = useState('INITIALIZING SYSTEM ENGINE...');
  const [isFinished, setIsFinished] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const statusMessages = [
      { threshold: 0, text: 'INITIALIZING SYSTEM ENGINE...' },
      { threshold: 25, text: 'LOADING GRAPHIC NOVEL ASSETS...' },
      { threshold: 50, text: 'DECRYPTING SECURITY PROTOCOLS...' },
      { threshold: 75, text: 'PREPARING HERO DOSSIER...' },
      { threshold: 95, text: 'SYSTEM READY. LAUNCHING...' },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 4;
        const currentCap = next > 100 ? 100 : next;

        const matchingMsg = statusMessages
          .slice()
          .reverse()
          .find((msg) => currentCap >= msg.threshold);

        if (matchingMsg) {
          setStatusLog(matchingMsg.text);
        }

        return currentCap;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsFinished(true);
      }, 300);

      const removeTimer = setTimeout(() => {
        setIsRemoved(true);
      }, 1150);

      return () => {
        clearTimeout(timer);
        clearTimeout(removeTimer);
      };
    }
  }, [progress]);

  if (isRemoved) return null;

  return (
    <div className={`preloader-overlay ${isFinished ? 'preloader-exit' : ''}`}>
      <div className="preloader-dossier">
        
        {/* Issue Header Tag */}
        <div className="preloader-badge-row">
          <span className="preloader-badge">ISSUE #000</span>
          <span className="preloader-tech-label">// SYSTEM INITIALIZATION</span>
        </div>

        {/* Brand Logo Emblem */}
        <div className="preloader-logo-wrapper">
          <img src={logoImg} alt="Harshal Moon Logo" className="preloader-logo-img" />
        </div>

        {/* Percentage Counter */}
        <div className="preloader-counter-row">
          <span className="preloader-counter-label">LOADING DATA</span>
          <span className="preloader-percentage">[ {progress}% ]</span>
        </div>

        {/* Comic Progress Bar */}
        <div className="preloader-progress-track">
          <div 
            className="preloader-progress-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Dynamic Status Log */}
        <div className="preloader-status-box">
          <span className="status-blink">&gt;</span> {statusLog}
        </div>

        {/* Footer Identity Label */}
        <div className="preloader-footer">
          <span>HARSHAL MOON • SOFTWARE ENGINEER & CYBERSECURITY RESEARCHER</span>
        </div>

      </div>
    </div>
  );
}

export default Preloader;
