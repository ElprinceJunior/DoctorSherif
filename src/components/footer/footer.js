import React, { useRef } from "react";
import "./footer.css";

const PDF_FILE_URL = "http://localhost:3000/cv.pdf";

const Footer = () => {
  const downloadRef = useRef(null);

  const handleDownloadCV = () => {
    // Check if the user is on a mobile device
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobileDevice) {
      // Open the PDF file in a new tab
      window.open(PDF_FILE_URL, "_blank");
    } else {
      // Create a hidden <a> element
      const link = document.createElement("a");
      link.href = PDF_FILE_URL;
      link.target = "_blank";
      link.download = "cv.pdf";

      // Append the link to the document body
      document.body.appendChild(link);

      // Simulate a click event to trigger the download
      link.click();

      // Clean up by removing the link from the document body
      document.body.removeChild(link);
    }
  };

  return (
    <footer className="footer">
      <button onClick={handleDownloadCV}>Download CV</button>
      <div>copyright &#169; 2024 youssef. All right received.</div>
    </footer>
  );
};

export default Footer;