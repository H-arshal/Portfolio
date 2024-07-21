import React, { useState, useRef, useEffect } from 'react';
import Headers from '../components/Header';
import img from '../images/DigitalClock.png';
import Vid_URL_Shortner from '../videos/URL_Shortner.mp4';
import Vid_Billing from '../videos/Billing.mp4';
import Vid_Resume_Analyzer from '../videos/Resume_Analyzer.mp4';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const productsList = [
  {
    name: 'Resume Analyzer',
    description: 'Analyzes resumes for key information and metrics.',
    githubLink: 'https://github.com/gunjand01/Major-Project/',
    techStack: [
      'Machine Learning',
      'Python',
      'React.js',
      'Node.js',
    ],
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ,
    videoSrc: Vid_Resume_Analyzer,
  },
  {
    name: 'Online Contact Manager',
    description: 'Manages and organizes contacts securely online.',
    githubLink: 'https://github.com/H-arshal/Online-Contact-Manager',
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ,
    videoSrc: img,
  },
  {
    name: 'URL Shortner',
    description: 'Shortens URLs for easy sharing.',
    githubLink: 'https://github.com/H-arshal/url-shortner',
    techStack: [
      'React.js',
      'Spring Boot',
    ],
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ,
    videoSrc: Vid_URL_Shortner,
  },
  {
    name: 'Billing Management System',
    description: 'Manages invoices, payments, and financial records efficiently.',
    githubLink: 'https://github.com/H-arshal/Billing-Management-System',
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ,
    videoSrc: Vid_Billing,
  },
  {
    name: 'Google Maps Clone',
    description: 'Replicates basic functionality of Google Maps.',
    githubLink: 'https://github.com/H-arshal/Google_Map_Clone',
    techStack: [
      'React.js',
      'Leaflet.js',
      'Node.js',
      'Express.js',
    ],
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ,
    videoSrc: img,
  },
  {
    name: 'Rock Paper Scissors Game (Command Line)',
    description: 'Classic game playable via the command line interface.',
    githubLink: 'https://github.com/H-arshal/Rock_Paper_Scissor',
    techStack: [
      'Python',
    ],
    about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ,
    videoSrc: img,
  }
];

function createSquare() {
  const colors = ['green', 'red', 'yellow', 'blue'];
  const mainContainer = document.querySelector('section');
  const square = document.createElement('span');
  var size = Math.random() * 2;
  const bg = colors[Math.floor(Math.random() * colors.length)];
  square.style.width = 10 + size + 'px';
  square.style.height = 10 + size + 'px';
  square.style.background = bg;
  square.style.position = 'absolute';
  square.style.top = Math.random() * 100 + '%';
  square.style.left = Math.random() * 100 + '%';
  mainContainer.appendChild(square);
  setTimeout(() => {
    square.remove();
  }, 5000);
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const videoRef = useRef();

  useEffect(() => {
    const intervalId = setInterval(createSquare, 10);
    return () => clearInterval(intervalId);
  }, []);

  const setPlayBack = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.5;
    }
  };

  const openDetails = (project) => {
    setSelectedProject(project);
  };

  const closeDetails = () => {
    setSelectedProject(null);
  };

  const openLinks = () => {
    console.log("Here");
  };

  return (
    <section>
      <div className="projects">
        <div className='heading-div'>
          <div className="heading">Projects</div>
          <Headers />
        </div>
        <div className="grid-container">
          {productsList.map((product, index) => (
            <div className="grid-item" key={index} onClick={() => openDetails(product)}>
              {product.videoSrc.endsWith('.mp4') ? (
                <video autoPlay muted loop
                  ref={videoRef}
                  onCanPlay={() => setPlayBack()}>
                  <source src={product.videoSrc} type="video/mp4" />
                </video>
              ) : (
                <img src={product.videoSrc} alt={product.name} />
              )}
              <div className='project-details'>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                {product.techStack && (
                  <div className='tech-stack'>
                    {product.techStack.map((tech, techIndex) => (
                      <div key={techIndex}>{tech}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div className="modal-overlay" onClick={closeDetails}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className='head-name'>
                <button className="close-btn" onClick={closeDetails}>X</button>
                <h2>{selectedProject.name}</h2>
                <p>{selectedProject.description}</p>
              </div>
              <div className='video-tag'>
                {selectedProject.videoSrc.endsWith('.mp4') ? (
                  <video autoPlay muted loop>
                    <source src={selectedProject.videoSrc} type="video/mp4" />
                  </video>
                ) : (
                  <img src={selectedProject.videoSrc} alt={selectedProject.name} />
                )}
              </div>
              <div className='detail-info'>
                <div className='tech-stack'>
                  {selectedProject.techStack.map((tech, index) => (
                    <div key={index}>{tech}</div>
                  ))}
                </div>
                <div className='desc'>
                  <h3>About</h3>
                  <p>{selectedProject.about}</p>
                </div>
                <div className='Links'>
                  <div className='git-hub'>
                    <FaGithub className='icon' />
                    <h3>Github</h3>
                  </div>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">{selectedProject.githubLink}</a>
                </div>
              </div>
            </div>
            <div className='open-project-link' onClick={(e) => e.stopPropagation()}>
              <div className='link' onClick={openLinks}>
                <div>Open Project</div>
                <FaExternalLinkAlt />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='certifications'></div>
    </section>

  );
}

export default Projects;