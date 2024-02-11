import React from "react";
import "./footer.css";

const PDF_FILE_URL = "/cv.pdf"; // Update the PDF file path relative to the public folder

const Footer = () => {
  const handleDownloadCV = () => {
    // Open the PDF file in a new tab
    window.open(PDF_FILE_URL, "_blank");
  };

  return (
    <footer className="footer">
      <button onClick={handleDownloadCV}>Download CV</button>
      <a href="/cv.pdf">download cv</a>
      <div>copyright &#169; 2024 youssef. All right received.</div>
    </footer>
  );
};

export default Footer;