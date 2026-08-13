import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { productsList } from '../data/projects';
import { ComicPanel } from './comic/ComicPanel';
import { IssueLabel } from './comic/IssueLabel';
import { ComicButton } from './comic/ComicButton';
import '../styles/Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  const openLinks = (url) => {
    if (url && url !== "/emptyPage") {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="projects-section" id="project">
      <div className="projects-container">
        
        <div className="projects-header">
          <IssueLabel issue="ISSUE #005" title="MISSION LOGS" />
          <h2 className="text-display" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)'}}>PROJECTS</h2>
        </div>

        <div className="comic-grid-container">
          {productsList.map((product, index) => (
            <ComicPanel 
              key={index} 
              irregular={index % 3 === 0} 
              className="comic-grid-item" 
              onClick={() => openDetails(product)}
            >
              <div className="project-thumbnail-comic">
                {product.videoSrc && product.videoSrc.endsWith('.mp4') ? (
                  <video autoPlay muted loop playsInline
                    onCanPlay={(e) => { e.target.playbackRate = 1.5; }}>
                    <source src={product.videoSrc} type="video/mp4" />
                  </video>
                ) : (
                  <img src={product.videoSrc} alt={product.name} />
                )}
              </div>
              
              <div className='project-details-comic'>
                <h3 className="text-display" style={{fontSize: '1.5rem', marginBottom: '8px'}}>{product.name}</h3>
                <p className="text-body" style={{marginBottom: '16px'}}>{product.description}</p>
                
                {product.techStack && (
                  <div className='comic-tech-stack'>
                    {product.techStack.map((tech, techIndex) => (
                      <span className="comic-tech-badge" key={techIndex}>{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </ComicPanel>
          ))}
        </div>

        {selectedProject && ReactDOM.createPortal(
          <div className="comic-modal-overlay" onClick={closeDetails}>
            <div className="comic-modal-content" onClick={(e) => e.stopPropagation()}>
              <div className='comic-modal-header'>
                <button className="comic-close-btn" onClick={closeDetails}>&times;</button>
                <IssueLabel issue="CASE FILE" title="DETAILS" />
                <h2 className="text-display">{selectedProject.name}</h2>
                <p className="text-body text-bold">{selectedProject.description}</p>
              </div>
              
              <div className='comic-modal-media'>
                {selectedProject.videoSrc && selectedProject.videoSrc.endsWith('.mp4') ? (
                  <video autoPlay muted loop controls playsInline>
                    <source src={selectedProject.videoSrc} type="video/mp4" />
                  </video>
                ) : (
                  <img src={selectedProject.videoSrc} alt={selectedProject.name} />
                )}
              </div>
              
              <div className='comic-modal-body'>
                <div className='comic-tech-stack' style={{marginBottom: '1rem'}}>
                  {selectedProject.techStack.map((tech, index) => (
                    <span className="comic-tech-badge" key={index}>{tech}</span>
                  ))}
                </div>
                
                <div className='comic-modal-desc'>
                  <h3 className="text-body text-bold">About</h3>
                  <p className="text-body">{selectedProject.about}</p>
                </div>
                
                <div className='comic-modal-links'>
                  <ComicButton variant="secondary" href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GITHUB REPO
                  </ComicButton>
                  
                  {selectedProject.openProject !== "/emptyPage" && (
                    <ComicButton variant="primary" onClick={() => openLinks(selectedProject.openProject)}>
                      <FaExternalLinkAlt /> LAUNCH
                    </ComicButton>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
}

export default Projects;
