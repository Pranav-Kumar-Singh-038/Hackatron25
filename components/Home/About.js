import { infoConfig } from "../../config/info";
import React from "react";
import Image from "next/image";


const About = () => {
  const { about } = infoConfig;
  return (
    <section
      id="about"
      className="section about-section wow animate__animated animate__fadeInUp"
      data-wow-duration="1s"
    >
      <div className="abbox">
        <h2 className="section-title">ABOUT US</h2>
        <div className="paraDiv ">
          {about.map((d) => (
            <React.Fragment key={d.id}>
              <p>{d.data}</p>
              <br />
            </React.Fragment>
          ))}
          <div className="rstar">
            <img
              className="topstar"
              src="/images/images/spaceship.png"
              alt="Hackatron Hackathon Star"
            />
          </div>
          <div className="frm about-frm">
            <img
              className="botstar"
              src="/images/About/planet.webp"
              alt="Hackatron Hackathon Planet"
            />
          </div>
        </div>
      </div>
      <div className="pattern7">
        <Image
          src="/images\Constillations\Moon.svg"
          alt="Hackatron const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default About;
