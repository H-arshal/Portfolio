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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ height: '950px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
          <Viewer fileUrl={pdfUrl} />
        </Worker>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <a
          href={pdfUrl}
          download="Harshal_Resume.pdf"
          className="btn-primary"
          style={{ textDecoration: 'none' }}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default PdfViewer;
