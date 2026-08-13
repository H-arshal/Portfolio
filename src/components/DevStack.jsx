import React from 'react';
import { ComicPanel } from './comic/ComicPanel';
import { IssueLabel } from './comic/IssueLabel';
import '../styles/DevStack.css';
import laptopImg from '../assets/laptop.png'; // One of the provided decorative images

function DevStack() {
  const stacks = [
    {
      title: "Backend & Cloud",
      icon: "⚙️",
      skills: ["Java", "Spring Boot", "Hibernate", "REST APIs", "Microservices", "AWS"]
    },
    {
      title: "Frontend UI",
      icon: "🖥️",
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "TailwindCSS"]
    },
    {
      title: "Database & Tools",
      icon: "🗄️",
      skills: ["MySQL", "PostgreSQL", "Git", "Docker", "Maven"]
    }
  ];

  return (
    <section className="devstack-section">
      <div className="devstack-container">
        
        <div className="devstack-header">
          <IssueLabel issue="ISSUE #002" title="SUPERPOWERS" />
          <h2 className="text-display">MY ARSENAL</h2>
          <p className="text-body">The tools and technologies I use to build secure and scalable systems.</p>
        </div>

        <div className="devstack-grid">
          {stacks.map((stack, idx) => (
            <ComicPanel key={idx} irregular={idx % 2 !== 0} className="devstack-card">
              <div className="devstack-icon">{stack.icon}</div>
              <h3 className="text-body text-bold" style={{fontSize: '1.25rem', marginBottom: '1rem', textTransform: 'uppercase'}}>{stack.title}</h3>
              <div className="skill-tags">
                {stack.skills.map((skill, sIdx) => (
                  <span className="skill-badge" key={sIdx}>{skill}</span>
                ))}
              </div>
            </ComicPanel>
          ))}
        </div>
        
        {/* Optional decorative image */}
        <div className="devstack-decoration">
            <img src={laptopImg} alt="Laptop Illustration" className="devstack-decor-img" />
        </div>
      </div>
    </section>
  );
}

export default DevStack;