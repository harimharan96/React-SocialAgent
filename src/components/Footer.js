import React from "react";
import "./Footer.css";
import logo from "../assets/logo_footer.png";
import insta from "../assets/IG.png";
import fb from "../assets/facebook-3-2.png";
import linkedin from "../assets/LinkedIn.png";
import twitter from "../assets/twitter.png";
import yt from "../assets/youtube-3.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <ul>
            <h3>Links</h3>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PRODUCTS</li>
            <li>GET IN TOUCH</li>
          </ul>
        </div>
        <div className="socials">
          <img src={yt} alt="yt" />
          <img src={insta} alt="insta" />
          <img src={linkedin} alt="linkedin" />
          <span className="twt">
            <img src={twitter} id="twt" alt="twitter" />
          </span>
          <img src={fb} alt="fb" />
        </div>

        <div className="contact">
          <h3>Contact</h3>
          <p>
            PLOT NO 33, APIIC BULIDING PRODUCTS SEZ <br />
            ANANGI VILLAGE MADDIPADU MANDAL, Andhra Pradesh 523211 <br />
            PHONE NUMBER: +91 91771 95555,+91 9573148794 <br />
            EMAIL ID: info@anaghastones.com
          </p>
        </div>
      </div>
      <div className="terms">
        <div className="copyright">
          <p>Miracle Stonex 2023 © All Right Reserved.</p>
        </div>
        <div className="tnc">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
