import React from "react";
import './footer.css';
const PDF_FILE_URL = 'http://localhost:3000/cv.pdf';

const Footer = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = PDF_FILE_URL;
    link.download = 'cv.pdf';
    link.target = '_blank';
    link.click();
  };

  return (
    <footer className="footer">
      <button onClick={handleDownloadCV}>
        Download CV
      </button>
      <div>
        copyright &#169; 2024 youssef. All right received.
      </div>
    </footer>
  );
};

export default Footer;