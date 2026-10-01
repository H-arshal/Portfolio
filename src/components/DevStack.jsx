import React from 'react';
import { Element } from 'react-scroll';
import { IssueLabel } from './comic/IssueLabel';
import { FaServer, FaCode, FaDatabase, FaShieldAlt, FaJava, FaLeaf, FaReact, FaJs, FaHtml5, FaCss3Alt, FaAws, FaDocker, FaGitAlt, FaStar, FaBolt, FaLock } from 'react-icons/fa';
import '../styles/DevStack.css';
import spiderMan from '../assets/myarsenal/spider-man-hanging-upside.png';

function DevStack() {
  const stacks = [
    {
      title: "Backend & Cloud",
      badgeText: "PRIMARY FOCUS",
      badgeIcon: <FaStar />,
      badgeClass: "yellow-badge",
      icon: <FaServer className="stack-card-icon" />,
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <FaLeaf /> },
        { name: "Hibernate", icon: <FaServer /> },
        { name: "REST APIs", icon: <FaCode /> },
        { name: "Microservices", icon: <FaServer /> },
        { name: "AWS", icon: <FaAws /> }
      ]
    },
    {
      title: "Frontend & UI Systems",
      badgeText: "UI & APPS",
      badgeIcon: <FaBolt />,
      badgeClass: "blue-badge",
      icon: <FaCode className="stack-card-icon" />,
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "TailwindCSS", icon: <FaCode /> },
        { name: "Vite", icon: <FaCode /> }
      ]
    },
    {
      title: "Databases & Security",
      badgeText: "SECURITY & TOOLS",
      badgeIcon: <FaLock />,
      badgeClass: "red-badge",
      icon: <FaDatabase className="stack-card-icon" />,
      skills: [
        { name: "MySQL", icon: <FaDatabase /> },
        { name: "PostgreSQL", icon: <FaDatabase /> },
        { name: "Cybersecurity", icon: <FaShieldAlt /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Maven", icon: <FaCode /> }
      ]
    }
  ];

  return (
    <Element name="stack" className="devstack-section">
      {/* Spider-Man Hanging Upside Down from Section Separator Line */}
      <img src={spiderMan} alt="Spider-Man Hanging Upside Down" className="spiderman-hanging-img" />

      <div className="devstack-container">
        
        {/* Section Header */}
        <div className="devstack-header">
          <div className="devstack-issue-group">
            <IssueLabel issue="ISSUE #002" title="" />
            <span className="devstack-origin-label">// SUPERPOWERS</span>
          </div>

          <h2 className="devstack-title">
            <span className="word-wrap">
              {'MY'.split('').map((char, index) => (
                <span key={index} className="hover-letter">{char}</span>
              ))}
            </span>
            <span className="word-wrap">
              {'ARSENAL'.split('').map((char, index) => (
                <span key={index} className="hover-letter">{char}</span>
              ))}
            </span>
          </h2>

          <p className="devstack-subtitle">
            The tools, frameworks, and technologies I use to build secure, scalable, and real-world software systems.
          </p>
        </div>

        {/* 3-Column Capability Panels */}
        <div className="devstack-grid">
          {stacks.map((stack, idx) => (
            <div key={idx} className="devstack-card">
              <div className="devstack-card-header">
                <span className={`stack-badge ${stack.badgeClass}`}>
                  <span className="badge-icon-span">{stack.badgeIcon}</span>
                  {stack.badgeText}
                </span>
                <div className="stack-icon-wrapper">{stack.icon}</div>
              </div>
              
              <h3 className="stack-card-title">{stack.title}</h3>
              
              <div className="skill-tags-wrapper">
                {stack.skills.map((skill, sIdx) => (
                  <span className="arsenal-skill-badge" key={sIdx}>
                    <span className="skill-icon-span">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Technical Status Bar */}
        <div className="devstack-status-bar">
          <span className="status-label">// CAPABILITY INDEX:</span>
          <span className="status-value">100% OPERATIONAL • VERIFIED TECH STACK</span>
        </div>

      </div>
    </Element>
  );
}

export default DevStack;