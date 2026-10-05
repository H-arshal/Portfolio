import React from 'react';
import { ComicPanel } from './comic/ComicPanel';
import { IssueLabel } from './comic/IssueLabel';
import '../styles/Certificates.css';

import img1 from '../images/certificates/HML_CSS_Advance.jpg';
import img4 from '../images/certificates/IBM_CC0101EN.jpg';
import img5 from '../images/certificates/IBM_CC0103EN.jpg';
import img6 from '../images/certificates/Java_Begineer.jpg';
import img3 from '../images/certificates/Web3.jpg';
import img7 from '../images/certificates/MySQL.jpg';
import img8 from '../images/certificates/QR_Code_Generator.jpg';

function Certificate() {
    const certs = [
        { img: img6, title: "Java for Beginners" },
        { img: img4, title: "Introduction to Cloud" },
        { img: img5, title: "IBM Cloud Essential V3" },
        { img: img7, title: "MySQL" },
        { img: img3, title: "W3EC" },
        { img: img1, title: "HTML & CSS" },
        { img: img8, title: "QR Code Generator" }
    ];

    return (
        <section className="certificates-section" id="certificates">
            <div className="certificates-container">
                <div className="certificates-header">
                    <IssueLabel issue="ISSUE #006" title="ACHIEVEMENT WALL" />
                    <h2 className="text-display" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)'}}>CERTIFICATIONS</h2>
                </div>
                
                <div className="comic-certs-grid">
                    {certs.map((cert, idx) => (
                        <ComicPanel 
                            key={idx} 
                            className="comic-cert-card"
                        >
                            <div className="cert-archive-label">CERTIFICATE ARCHIVE [{String(idx + 1).padStart(2, '0')}]</div>
                            <div className="cert-image-wrapper">
                                <img src={cert.img} alt={cert.title} loading="lazy" />
                            </div>
                            <div className="cert-info">
                                <h3 className="text-body text-bold" style={{textTransform: 'uppercase'}}>{cert.title}</h3>
                            </div>
                        </ComicPanel>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certificate;
