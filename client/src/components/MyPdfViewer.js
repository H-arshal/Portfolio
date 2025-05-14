// import React from 'react';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import pdfUrl from '../resume/Harshal_Dev.pdf'; 

// const PdfViewer = () => {
//   return (
//     <div style={{ height: '1110px' }}>
//       <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
//         <Viewer fileUrl={pdfUrl} />
//       </Worker>
//     </div>
//   );
// };

// export default PdfViewer;


import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import pdfUrl from '../resume/Resume_001.pdf';

const PdfViewer = () => {
  return (
    <div style={{ height: '1110px' }}>

      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
        <Viewer fileUrl={pdfUrl} />
      </Worker>

      <div style={{ marginBottom: '10px', textAlign: 'right' }}>
        <a
          href={pdfUrl}
          download="Harshal_Resume.pdf"
          style={{
            textDecoration: 'none',
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default PdfViewer;
