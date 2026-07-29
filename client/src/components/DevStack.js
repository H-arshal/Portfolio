import React from 'react';
import '../stylesheet/DevStack.css';

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
    <section className="skills-section">
      <h2 className="skills-heading">My <span>DevStack</span></h2>
      <div className="bento-grid">
        {stacks.map((stack, idx) => (
          <div className="bento-card" key={idx}>
            <div className="bento-icon">{stack.icon}</div>
            <h3 className="bento-title">{stack.title}</h3>
            <div className="skill-tags">
              {stack.skills.map((skill, sIdx) => (
                <span className="skill-tag" key={sIdx}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DevStack;