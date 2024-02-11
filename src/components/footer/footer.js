import React from "react";
import "./footer.css";

const PDF_FILE_URL = process.env.PUBLIC_URL + "/cv.pdf";

const Footer = () => {
  const handleDownloadCV = () => {
    // Open the PDF file in a new tab
    window.open(PDF_FILE_URL, "_blank");
  };

  return (
    <footer className="footer">
      <button onClick={handleDownloadCV}>Download CV</button>
      <div>copyright &#169; 2024 youssef. All right received.</div>
    </footer>
  );
};

export default Footer;