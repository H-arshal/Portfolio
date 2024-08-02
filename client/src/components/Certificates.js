import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../images/certificates/HML_CSS_Advance.jpg';
import img4 from '../images/certificates/IBM_CC0101EN.jpg';
import img5 from '../images/certificates/IBM_CC0103EN.jpg';
import img6 from '../images/certificates/Java_Begineer.jpg';
import img3 from '../images/certificates/Web3.jpg';
import img7 from '../images/certificates/MySQL.jpg';
import img8 from '../images/certificates/QR_Code_Generator.jpg';


function Certificate() {
    return (
        <div className="carousel-container">
            <h1 style={{ color: '#0097a7' }}>Certificates</h1>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                autoPlay={true}
                interval={5000}
            >
                <div>
                    <img src={img6} alt="Slide 3" />
                    <p className="legend">Java for Begineer</p>
                </div>
                <div>
                    <img src={img3} alt="Slide 3" />
                    <p className="legend">W3EC</p>
                </div>
                <div>
                    <img src={img4} alt="Slide 1" />
                    <p className="legend">Introduction to Cloud</p>
                </div>
                <div>
                    <img src={img5} alt="Slide 2" />
                    <p className="legend">IBM Cloud Essential V3</p>
                </div>
                <div>
                    <img src={img1} alt="Slide 1" />
                    <p className="legend">HTML & CSS for Begineers</p>
                </div>


                <div>
                    <img src={img7} alt="Slide 3" />
                    <p className="legend">MySQL</p>
                </div>
                <div>
                    <img src={img8} alt="Slide 3" />
                    <p className="legend">QR Code Generator</p>
                </div>
            </Carousel>
        </div>
    );
}

export default Certificate;
