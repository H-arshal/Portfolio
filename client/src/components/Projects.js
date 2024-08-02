import React, { useState, useRef, useEffect } from 'react';
import img from '../images/DigitalClock.png';
import Vid_URL_Shortner from '../videos/URL_Shortner.mp4';
import Vid_Billing from '../videos/Billing.mp4';
import Vid_Resume_Analyzer from '../videos/Resume_Analyzer.mp4';
import NSS from '../videos/NSS.mp4'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const productsList = [
  {
    name: 'Resume Analyzer',
    description: 'Analyzes resumes for key information and metrics.',
    githubLink: 'https://github.com/gunjand01/Major-Project/',
    techStack: [
      "Spacy",
      "Python",
      "MongoDB",
      "React",
      "Node",
      "Git",
    ],
    about: "In the increasingly complex landscape of job recruitment, managing the high volume of resumes and diverse job requirements presents significant challenges. Our research addresses these issues by introducing an advanced resume analyzing and job recommendation system that integrates Natural Language Processing (NLP) through Spacy. This system excels in accurately extracting and parsing critical resume information, including candidate details, qualifications, and work experience. Additionally, it pioneers the use of video resumes by incorporating visual and audio processing techniques to assess candidates' presentation skills and qualifications comprehensively. Experimental results confirm the system’s effectiveness, demonstrating high accuracy in information retrieval and showcasing its potential to revolutionize the recruitment process by merging traditional resume parsing with innovative video analysis.",
    videoSrc: Vid_Resume_Analyzer,
    openProject: "/emptyPage"
  },
  {
    name: 'URL Shortner',
    description: 'Shortens URLs for easy sharing.',
    githubLink: 'https://github.com/H-arshal/url-shortner',
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    about: "A URL shortener is a web application that converts long URLs into shorter, more manageable links. This project involves using React for the front-end to create a dynamic user interface where users can input long URLs and receive shortened versions. Node.js, along with Express.js, is used for the back-end to handle HTTP requests, process URL shortening logic, and communicate with the MongoDB database, which stores URL mappings. Key features of the application include URL shortening, which converts long URLs into short links; redirection, which ensures that shortened URLs redirect users to the original URLs; link management, allowing users to view and manage their shortened links (if user authentication is implemented); and optional analytics to track the usage and statistics of shortened URLs.",
    videoSrc: Vid_URL_Shortner,
    openProject: "https://url-shortner-t2r4.onrender.com/"

  },
  {
    name: 'NSS Website',
    description: 'The NSS Committee website is an interactive platform o showcase activities, manage information, and enhance communication and engagement within the committee.',
    githubLink: 'https://github.com/H-arshal/NSS-Web',
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "MongoDB"
    ],
    about: "developed an interactive website for the National Service Scheme (NSS) Committee at our college, using HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. The site features a modern and responsive design that effectively showcases our committee's activities, events, and initiatives. It includes dynamic displays for upcoming events, member information management, and interactive sections for announcements and news. This platform significantly enhances our communication and engagement within the committee, serving as a central hub for updates and information. It also streamlines volunteer coordination and boosts visibility for our initiatives. Plus, ongoing maintenance and updates ensure the website stays current and continues to meet our needs effectively.",
    videoSrc: NSS,
    openProject: "https://nssweb.onrender.com/"

  },
  {
    name: 'Billing Management System',
    description: 'Manages invoices, payments, and financial records efficiently.',
    githubLink: 'https://github.com/H-arshal/Billing-Management-System',
    techStack: [
      "Java",
      "Java AWT",
      "JDBC",
      "SQL",
      "Advanced Java Concepts"
    ],
    about: "A billing management system application is designed to automate and streamline the process of managing billing and invoices for businesses. It typically handles tasks such as generating invoices, processing payments, tracking customer information, and maintaining records of transactions. In your case, you used Java AWT (Abstract Window Toolkit) for the user interface and advanced Java applications for additional functionality.Create and print invoices with details such as item descriptions, quantities, prices, and totals.Customer Management: Store and manage customer information, including contact details and transaction history.Payment Processing: Handle different payment methods and update records accordingly.Reporting: Generate reports for sales, payments, and other financial metrics.Data Storage: Maintain records of transactions and customer details in a database."
    ,
    videoSrc: Vid_Billing,
    openProject: "/emptyPage"
  },
  {
    name: 'Online Contact Manager',
    description: 'Manages and organizes contacts securely online.',
    githubLink: 'https://github.com/H-arshal/Online-Contact-Manager',
    techStack: [
      "Spring Boot",
      "Thymeleaf",
      "Spring Data JPA",
      "Java",
      "Maven",
      "Thymeleaf",
    ],
    about: "The online contact manager is a web application designed to simplify and streamline the management of contact information. Leveraging the robust capabilities of Spring Boot and Thymeleaf, this application provides a user-friendly interface for adding, viewing, editing, and deleting contact details. The backend, built with Spring Boot, handles data processing and storage, while Thymeleaf integrates seamlessly to render dynamic web pages. This combination ensures a responsive and efficient application that supports efficient contact management and enhances user experience.",
    videoSrc: img,
    openProject: "/emptyPage"
    
  },
  {
    name: 'Google Maps Clone',
    description: 'Replicates basic functionality of Google Maps.',
    githubLink: 'https://github.com/H-arshal/Google_Map_Clone',
    techStack: [
      "React.js",
      "Google Maps API",
      "Travel Advisory API",
      "CSS3",
    ],
    about: "This project involves creating a clone of Google Maps, designed to replicate core functionalities such as map visualization, location search, and travel advisories. The application uses React.js to build a dynamic and interactive user interface, integrating with the Google Cloud Maps API for map rendering, geocoding, and directions, and the Travel Advisory API from RapidAPI to provide travel safety information. Key features include an interactive map display that utilizes the Google Cloud Maps API to render dynamic maps with zoom, pan, and marker functionalities; location search capabilities allowing users to find and view locations on the map; and travel advisories providing up-to-date safety and security information via the RapidAPI. The application also supports custom markers and layers to highlight specific locations or areas of interest, offering a comprehensive and user-friendly mapping solution.",
    videoSrc: img,
    openProject: "/emptyPage"
    

  },

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

  const openLinks = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    console.log("ok")
  };

  return (
    <section>
      <div className="projects">
        <div className='heading-div'>
          <div className="heading">Projects</div>
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
              <div className='link' onClick={() => openLinks(selectedProject.openProject)}>
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