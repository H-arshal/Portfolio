import React from 'react';
import '../stylesheet/Certificates.css';

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
        <section className="certificates-section">
            <h2 className="certificates-heading">My <span>Certificates</span></h2>
            <div className="certificates-grid">
                {certs.map((cert, idx) => (
                    <div className="certificate-card" key={idx}>
                        <div className="certificate-image-wrapper">
                            <img src={cert.img} alt={cert.title} loading="lazy" />
                        </div>
                        <div className="certificate-info">
                            <h3 className="certificate-title">{cert.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certificate;
