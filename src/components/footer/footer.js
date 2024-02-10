import React from "react";
import './footer.css';
const PDF_FILE_URL = 'http://localhost:3000/cv.pdf'

const Footer = () => {
  const downloadFileAtURL = (url) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]))
        const fileName = url.split('/').pop()

        if (isMobileDevice()) {
          // For mobile devices, open the file in a new tab
          window.open(blobURL)
        } else {
          // For non-mobile devices, trigger the file download
          const aTag = document.createElement('a')
          aTag.href = blobURL
          aTag.setAttribute('download', fileName)
          document.body.appendChild(aTag)
          aTag.click()
          aTag.remove()
        }
      })
  }

  const isMobileDevice = () => {
    return window.innerWidth <= 768; // Adjust the breakpoint as per your needs
  }

  return (
    <footer className="footer">
      <button onClick={() => { downloadFileAtURL(PDF_FILE_URL) }}>
        Download CV
      </button>
      <div>
        copyright &#169; 2024 youssef. All right received.
      </div>
    </footer>
  )
}

export default Footer