import React from "react";
import './about.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor,faAward,faStethoscope,faCrown } from "@fortawesome/free-solid-svg-icons";







const About = () =>{
    const PDF_FILE_URL = 'http://localhost:3000/cv.pdf';
    const downloadFileAtURL=(url)=>{
        fetch(url).then(response=>response.blob()).then(blob=>{
            const blobURL = window.URL.createObjectURL(new Blob([blob]))
            const fileName = url.split('/').pop()
            const aTag =document.createElement('a')
            aTag.href=blobURL;
            aTag.setAttribute('download',fileName)
            document.body.appendChild(aTag)
            aTag.click();
            aTag.remove();
        })


    }
    return(
        <section id="about">
            <span className="aboutTitle">About me <FontAwesomeIcon icon={faUserDoctor}/></span>
            <span className="aboutDesc">Hi there my name is Sherif el Prince;i am 49 years old;to learn more about me, you can continue reading
              </span>
              <div className="aboutBars">

                <div className="aboutBar">
                    <div className="aboutBartText">
                        <h2>Experience <FontAwesomeIcon icon={faCrown}/></h2>
                        <p>23 years Experience in Surgical oncology and general surgey operations                        <button className="downloadCvBtn" onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}>
                Download CV
        </button> </p>

                    </div>
                </div>

                <div className="aboutBar">
                    <div className="aboutBartText">
                        <h2>Education <FontAwesomeIcon icon={faAward}/></h2>
                        <p>MD<span className="aboutBarStyle">......</span>MRCS<span className="aboutBarStyle">......</span></p>
                    </div>
                </div>

                <div className="aboutBar">
                    <div className="aboutBartText">
                        <h2>Surgeries <FontAwesomeIcon icon={faStethoscope}/></h2>
                        <p>i have made more than 35 types of operations:
                             Oncology operations: and General surgery operations</p>
                    </div>
                </div>

                <div className="aboutBar">
                    <div className="aboutBartText">
                        <h2>Current positon <FontAwesomeIcon icon={faUserDoctor}/> </h2>
                        <p>consultant general surgey and Surgical oncology at AL Salam Hospital 
                            and an Assitant professor surgical oncology</p>
                    </div>
                </div>



              </div>
        </section>
    )
}

export default About;

