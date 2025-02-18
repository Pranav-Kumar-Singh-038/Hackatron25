import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer id="contact" className="footer-section" style={{ color: "#fff" }}>
        <div className="imgHolder">
        <Link href="/">
              <img src="/images/logo/BIT-Sindri-LOGO.png" alt="Hackatron" style={{ width: "100px", height: "auto" }}  />
        </Link>
            
            <Link href="https://www.hnccbits.com/">
              <img src="/images/logo/hncc.png" alt="Hackatron" style={{ width: "100px", height: "auto", paddingLeft: "20px"}} />
            </Link> 
            <Link href="/">
              <img src="/images/logo/hackatron.png" alt="Hackatron" style={{ width: "148px", height: "auto" , paddingLeft: "20px"}}  />
        </Link>
            
                     
        </div>
        <div className="docs">
          <h3 className="footer-title">Explore</h3>

          <ul>
            <li>
              <Link
                href="https://www.hnccbits.com/"
                target="https://www.hnccbits.com/"
              >
                HnCC BITS
              </Link>
            </li>
            <li>
              <Link href="https://www.hnccbits.com/teams" target="_blank">
                Team
              </Link>
            </li>

          </ul>
        </div>

        <div className="socials">
          <div className="handles">
            <h3 className="footer-title">Social Handles</h3>

            <div className="social-links">
              <Link href="https://www.instagram.com/hnccbits/" target="_blank">
              <i className="bi bi-instagram"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/company/hnccbits/posts/?feedView=all"
                target="_blank"
              >
                <i className="bi bi-linkedin"></i>
              </Link>
              <Link href="https://x.com/hnccbits" target="_blank">
              <i className="bi bi-twitter-x"></i>
              </Link>
              <Link href="https://www.facebook.com/hnccbits/" target="_blank">
              <i className="bi bi-facebook"></i>
              </Link>
              <Link
                href="https://www.youtube.com/@hackathonandcodingclubbits"
                target="_blank"
              >
              <i className="bi bi-youtube"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="contactUs">
          <h3 className="footer-title">Contact Us</h3>

          <div className="contactList">
            <Link href="mailto:hnccbits@gmail.com" target="_blank">
              hnccbits@gmail.com
            </Link>
          </div>
        </div>
      </footer>
      <div className="footer-ke-neeche">
        <p>Made with ❤️ by the Team HnCC</p>
      </div>
    </>
  );
};

export default Footer;
