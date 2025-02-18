import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ShootingStars from "../utils/ShootingStars.json";
import Telescope from "../utils/Telescope.json";
import {Link} from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
      
        <a href="#home">
          <img src="/images/logo/BIT-Sindri-LOGO.png" alt="Hackatron" />
        </a>
        <a href="#home">
          <img src="/images/logo/hncc.png" alt="Hackatron" style={{ paddingRight: "20px", paddingLeft: "20px" }} />
        </a>
        

      </div>
     

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <ul>
        <li className="nav-btn"><Link to="home" smooth={true} spy={true} offset={-70} duration={700} onClick={toggleMenu}>HOME</Link></li>
          <li className="nav-btn"><Link to="about" smooth={true} spy={true} offset={-70} duration={700} onClick={toggleMenu}>ABOUT</Link></li>
          <li className="nav-btn"><Link to="venue" smooth={true} spy={true} offset={-70} duration={700} onClick={toggleMenu}>VENUE</Link></li>
          <li className="nav-btn"><Link to="schedule" smooth={true} spy={true} offset={-70} duration={700} onClick={toggleMenu}>SCHEDULE</Link></li>
          <li className="nav-btn"><Link to="prizes" smooth={true} spy={true} offset={-70} duration={700} onClick={toggleMenu}>PRIZES</Link></li>
          <li className="nav-btn"><Link to="sponsors" smooth={true} spy={true} offset={-70} duration={700} onClick={toggleMenu}>SPONSORS</Link></li>
          <li className="nav-btn"><Link to="faqs" smooth={true} spy={true} offset={-70} duration={700} onClick={toggleMenu}>FAQS</Link></li>
          <li className="nav-btn"><Link to="contact" smooth={true} spy={true} offset={-70} duration={700} onClick={toggleMenu}>CONTACT</Link></li>
        </ul>
      </div>

      <div className="logo1">
        <a href="#home">
          <img src="/images/logo/hackatron.png" alt="Hackatron" />
        </a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? (
          <span className="close-icon">✖</span>
        ) : (
          <>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
