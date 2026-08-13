import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import PdfViewer from './MyPdfViewer';
import { ComicPanel } from './comic/ComicPanel';
import { IssueLabel } from './comic/IssueLabel';
import '../styles/Resume.css';

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
            <div className="resume-header">
                <IssueLabel issue="ISSUE #004" title="CHARACTER PROFILE" />
                <h2 className="text-display" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)'}}>DOSSIER</h2>
            </div>
            
            <div className="resume-content">
                <aside className="resume-sidebar">
                    <ComicPanel className="social-links-panel">
                        <h3 className="text-body text-bold" style={{marginBottom: '1rem', textTransform: 'uppercase'}}>Connect</h3>
                        <div className="social-links-grid">
                            {socialLinks.map(([name, link, icon], index) => (
                                <div className="comic-social-card" key={index} onClick={() => openLink(link)}>
                                    <div className="comic-social-icon">{icon}</div>
                                    <span className="text-technical" style={{ fontSize: '0.75rem' }}>{name}</span>
                                </div>
                            ))}
                        </div>
                    </ComicPanel>
                </aside>
                
                <main className="resume-viewer-wrapper">
                    <ComicPanel irregular={true} className="resume-viewer-panel">
                        <PdfViewer />
                    </ComicPanel>
                </main>
            </div>
        </section>
    );
}

export default MyResume;
