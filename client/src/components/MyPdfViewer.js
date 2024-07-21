import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'; // Optional: for default styles
import pdfURL from '../resume/Resume.pdf';

const PdfViewer = () => {

    return (
        <div className='MyPdfViewer' style={{ width: '100%' }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js">
                <Viewer className="MyPdfViewer" fileUrl={pdfURL}  />
            </Worker>
        </div>
    );
};

export default PdfViewer;
