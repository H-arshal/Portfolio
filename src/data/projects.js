import Vid_URL_Shortner from '../videos/URL_Shortner.mp4';
import Vid_Billing from '../videos/Billing.mp4';
import Vid_Resume_Analyzer from '../videos/Resume_Analyzer.mp4';
import Img_Pdf from '../videos/Img_Pdf.mp4';
import NSS from '../videos/NSS.mp4';
import img from '../images/DigitalClock.png';

export const productsList = [
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
    about: "A billing management system application is designed to automate and streamline the process of managing billing and invoices for businesses. It typically handles tasks such as generating invoices, processing payments, tracking customer information, and maintaining records of transactions. In your case, you used Java AWT (Abstract Window Toolkit) for the user interface and advanced Java applications for additional functionality.Create and print invoices with details such as item descriptions, quantities, prices, and totals.Customer Management: Store and manage customer information, including contact details and transaction history.Payment Processing: Handle different payment methods and update records accordingly.Reporting: Generate reports for sales, payments, and other financial metrics.Data Storage: Maintain records of transactions and customer details in a database.",
    videoSrc: Vid_Billing,
    openProject: "/emptyPage"
  },
  {
    name: "Img PDF Converter",
    description: "Converts images to PDFs and PDFs to images seamlessly.",
    githubLink: "https://github.com/H-arshal/Img-PDF-Converter",
    techStack: [
      "React",
      "Spring Boot",
      "Apache PDFBox",
      "iText PDF Library",
      "Java",
      "Maven"
    ],
    about: "The Img PDF Converter is a versatile web application that allows users to easily convert images to PDFs and vice versa. Utilizing React for a responsive and intuitive frontend, and Spring Boot for robust backend processing, the application provides seamless conversion capabilities. The backend is powered by Apache PDFBox and iText PDF Library to handle PDF manipulation efficiently. This combination ensures high performance and a user-friendly experience for managing and converting document formats.",
    videoSrc: Img_Pdf,
    openProject: "https://img-pdf-converter.onrender.com/index.html"
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
