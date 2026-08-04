import React from 'react';
import imgURL from '../images/Harshal.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import PdfViewer from './MyPdfViewer';
import '../stylesheet/Resume.css';

const MyResume = () => {

    function openLink(url) {
        window.open(url, "_blank", "noopener noreferrer");
    }

    const socialLinks = [
        ["LinkedIn", "https://www.linkedin.com/in/harshal-moon-064956174/", <FaLinkedin />],
        ["GitHub", "https://github.com/h-arshal", <FaGithub />],
        ["LeetCode", "https://leetcode.com/u/harshal_jaipal/", <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 13h7.5" /><path d="M9.424 7.268l4.999 -4.999" /><path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" /></svg>],
        ["Instagram", "https://www.instagram.com/harshal.moon", <FaInstagram />],
        ["Facebook", "https://facebook.com", <FaFacebook />],
        ["Twitter", "https://x.com/harshal_moon08", <FaTwitter />],
    ];

    return (
        <section className='resume-container'>
            <h2 className="resume-heading">My <span>Resume</span></h2>
            <div className="resume-content">
                <aside className="resume-sidebar">
                    <div className="resume-photo-wrapper">
                        <img src={imgURL} alt='Harshal Moon' />
                    </div>
                    <div className="social-links-grid">
                        {socialLinks.map(([name, link, icon], index) => (
                            <div className="social-link-card" key={index} onClick={() => openLink(link)}>
                                <div className="social-link-icon">{icon}</div>
                                <span style={{ fontSize: '0.875rem' }}>{name}</span>
                            </div>
                        ))}
                    </div>
                </aside>
                <main className="resume-viewer">
                    <PdfViewer />
                </main>
            </div>
        </section>
    );
}

export default MyResume;
