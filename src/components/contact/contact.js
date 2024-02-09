import './contact.css'
import React, {useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import emailjs from 'emailjs-com';



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs
          .sendForm("service_kcnz7jb", "template_9tmq9eb", form.current, "zVCb1pC8428CtiACI")
          .then((result) => {
            console.log(result.text);
            // Reset the form inputs
            form.current.reset();
          })
          .catch((error) => {
            console.log(error.text);
          });
      };
    return(
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me <FontAwesomeIcon icon={faPhone}/></h1>
                <span className="contactDesc">Please fiil out the form to discuss any questions.</span>
                <form  className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="from_name"/>
                    <input type="email" className="email" placeholder="Your Email" name='your_email' />
                    <input type="text" className="phone" placeholder="Your Phone Number" name="your_phone"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="tel:201119335527"><FontAwesomeIcon icon={faPhone} className="link pho"/></a> 
                        <a href="https://www.facebook.com/SherifElPrinceSayed" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className="link fac"/></a>
                        <a href="https://api.whatsapp.com/send?phone=201119335527" target='_balnk' class="whatsapp-btn ar"><FontAwesomeIcon icon={faWhatsapp} className="link wha"/></a>

                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact