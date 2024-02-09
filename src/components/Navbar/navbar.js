import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import message from '../../assets/message.png'
import {Link } from 'react-scroll';
import menu from '../../assets/menu.png';

 

const Navbar = () =>{
    const[showMenu, setShowMenu] = useState(false)
    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="clinic" spy={true} smooth={true} offset={-60} duration={500}  className="desktopMenuListItem" >Clinic</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}  className="desktopMenuListItem">Contact me</Link>

            </div>
            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <img src={message} className="desktopMenuImg"/>Contact Me</button>

                <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link  activeClass="active" to="clinic" spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>clinic</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>Contact me</Link>

            </div>
        </nav>
    )
}

export default Navbar;