import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ShootingStars from "../utils/ShootingStars.json";
import Telescope from "../utils/Telescope.json";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#home">
          <img src="/images/logo/hncc.png" alt="Hackatron" />
        </a>
      </div>
      <ul className="nav-links">
        <li className="nav-btn"><a href="#home">HOME</a></li>
        <li className="nav-btn"><a href="#about">ABOUT</a></li>
        <li className="nav-btn"><a href="#venue">VENUE</a></li>
        <li className="nav-btn"><a href="#schedule">SCHEDULE</a></li>
        <li className="nav-btn"><a href="#prizes">PRIZES</a></li>
        <li className="nav-btn"><a href="#sponsors">SPONSORS</a></li>
        <li className="nav-btn"><a href="#faqs">FAQS</a></li>
        <li className="nav-btn"><a href="#contact">CONTACT</a></li>
      </ul>
      <div className="logo1">
        <a href="#home">
          <img src="/images/logo/hackatron.png" alt="Hackatron" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
