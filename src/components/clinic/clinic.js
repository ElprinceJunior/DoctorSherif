import React from "react";
import './clinic.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faHospitalUser } from "@fortawesome/free-solid-svg-icons";



const Clinic = ()=>{
    
    return(
        <section id="clinic">
            <span className="clinicTitle">My Clinic <FontAwesomeIcon icon={faHospital}/></span>
            <span className="clinicDesc">
                We are here to provide you the best medical experience; You can take a look at the clinic's information
              </span>
            <div className="clinicBars">


                <div className="clinicBar">
                    <div className="clinicBartText">
                        <h2>Services <FontAwesomeIcon icon={faHospitalUser}/></h2>
                        <p>Examination, Diagnosis of a disease, Writing a treatment </p>
                    </div>
                </div>

                <div className="clinicBar">
                    <div className="clinicBartText">
                        <h2>Appointments <FontAwesomeIcon icon={faCalendarCheck}/></h2>
                        <p><span className="clinicBarStyle">|</span> Friday:closed <span className="clinicBarStyle">|</span> Saturday:4-6pm 
                        <span className="clinicBarStyle">|</span> Monday:4-6pm <span className="clinicBarStyle">|</span>
                         Sunday:4-6pm <span className="clinicBarStyle">|</span>
                        Wednesday:4-6pm <span className="clinicBarStyle">|</span> Thursday:closed <span className="clinicBarStyle">|</span>
                        </p>
                    </div>
                </div>

                <div className="clinicBar">
                    <div className="clinicBartText">
                        <h2>Location <FontAwesomeIcon icon={faLocationDot}/></h2>
                        <p>5 Al-Qasr Al-Ainy Street - in front of the Oncology Institute <a href="https://maps.app.goo.gl/ow87e1Qwc9HCb6T76" target="_blank" rel="noopener noreferrer" className="loacationLink">click</a> </p>
                    </div>
                </div>

                <div className="clinicBar">
                    <div className="clinicBartText">
                        <h2>Contact us <FontAwesomeIcon icon={faPhone}/></h2>
                        <p>you can click this button to contact the clinic <a href="tel:201098425644" class="call-btn">Call</a> </p>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Clinic