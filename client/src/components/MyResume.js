import React from 'react';
import imgURL from '../images/Harshal.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import PdfViewer from './MyPdfViewer';

const MyResume = () => {

    function openLink(url) {
        window.open(url);
    }

    const socialLinks = [
        ["LinkedIn", "https://www.linkedin.com/in/harshal-moon-064956174/", <FaLinkedin />],
        ["GitHub", "https://github.com/h-arshal", <FaGithub />],
        ["LeetCode", "https://leetcode.com/u/harshal_jaipal/", <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-leetcode">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 13h7.5" />
            <path d="M9.424 7.268l4.999 -4.999" />
            <path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" />
        </svg>],
        ["Instagram", "https://www.instagram.com/harshal.moon", <FaInstagram />],
        ["Facebook", "https://facebook.com", <FaFacebook />],
        ["Twitter", "https://x.com/harshal_moon08?t=cn79ZZKS-gnqDPR5O9E4rA&s=08", <FaTwitter />],
    ]; // Example links

    return (
        <div className='resume-section container n-box2 py-5'>
            <div className="resume-my-details">
                <div className="photo">
                    <img src={imgURL} alt='Harshal' />
                </div>
                <div className="social-links">
                    {socialLinks.map(([name, link, icon], index) => (
                        <div className="sub-social-links" key={index} onClick={() => openLink(link)}>
                            <div className="social-icons">
                                {icon}
                            </div>
                            <div className="social-name">
                                {name}
                            </div>
                        </div>
                    ))}
                </div>
                <br />
                <div className="my-summary">
                    {/* Hi, I’m Harshal Moon, a recent graduate in Computer Science and Engineering from Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded. I specialize in Java development, with extensive experience in Spring Boot and related frameworks. I’ve led several projects, including an online contact manager using Spring Boot and Spring Security. Additionally, I have strong skills in front-end development with ReactJS and have worked on a Google Maps clone using this technology.
                    I also have experience in machine learning with Python, having developed a resume analyzer that uses NLP and machine learning algorithms to provide job recommendations and skill gap analysis. My diverse skill set includes advanced Java programming, data structures and algorithms, and full-stack web development. I’m passionate about using my expertise to develop innovative solutions and continuously improving my knowledge through learning and collaboration. */}
               
               My name is Harshal Jaipal Moon, and I am currently pursuing a Master of Technology in Computer Science with a specialization in Cyber Security at COEP Technological University, Pune. I completed my Bachelor of Technology in Computer Science and Engineering from Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded.

Alongside my academic journey, I have developed strong technical skills. I am proficient in Java programming, where I have not only honed my problem-solving abilities but also gained hands-on experience in backend web development using Spring Boot, a powerful Java framework. Additionally, I have explored frontend technologies including HTML, CSS, and React.js, allowing me to work on full-stack projects. I also have a growing interest in Machine Learning and its applications in cybersecurity.

On the non-technical front, I served as the Main Coordinator of the NSS Website Committee during my undergraduate studies, where I led a team to design and develop the official NSS website. Currently, I am the Technical Secretary of COEP CyberCell, the official cybersecurity club of our institute. This role has significantly enhanced my leadership, team management, and organizational skills.
                </div>
            </div>
            <div className="resume-pdf">
                <PdfViewer />
            </div>
        </div>
    );
}

export default MyResume;
