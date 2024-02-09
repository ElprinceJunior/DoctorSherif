import React from "react";
import './intro.css';
import bg from '../../assets/bg.png';
import { Link } from "react-scroll";

const Intro = () =>{
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">sherif</span> <br/>Doctor-surgeon</span>
                <p className="introPara">I am a surgeon at Al Salam Hospital <br/> and an  assistant professor at bani swif university</p>
                <Link to="about" spy={true} smooth={true} offset={-50} duration={500} ><button className="btn">More About Me</button></Link>
            </div>
            <img src={bg}  alt="img" className="bg"/>

        </section>
    ) 
}

export default Intro;