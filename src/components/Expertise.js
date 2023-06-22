import React from "react";
import "./Expertise.css";
import bg from "../assets/dd932e3e1ed76805663956d73adfc3ff.jpg";
import rm from "../assets/RedMulti.png";
import tw from "../assets/titWhite.png";
import gd from "../assets/goldDream.png";
import fg from "../assets/Frame 87fusionGold.png";
import ig from "../assets/Frame 87impGold.png";
import vw from "../assets/Frame 89visWhite.png";
import bd from "../assets/Frame 87blueDunes.png";
import ap from "../assets/Frame 92astoria.png";

export default function Expertise() {
  return (
    <>
      <div className="exp">
        <h2>Our Expertise</h2>
        <ul>
          <li>
            <span className="li-head">Exclusive and Unique Designs:</span> Our
            Creative designers crafts unique and distinctive pieces that will
            elevate the look and feel of your home.
          </li>
          <li>
            <span className="li-head">Customisable Options:</span> We offer a
            wide range of customisable options to help you create a home that
            truly reflects your style and personality.
          </li>
          <li>
            <span className="li-head">Eco-Friendly Products: </span>Our
            commitment to sustainability makes a positive impact on the
            environment by integrating sustainable practices into our
            operations.
          </li>
        </ul>
      </div>
      <div className="our-products">
        <img className="bg2" src={bg} alt="bg"></img>
        <div className="p_content">
          <div>
            <h3>Our Products</h3>
            <p>
              The <span>Miracle Stonex</span> history includes the best stones
              obtained from 50+ countries across the world, unmatched knowledge
              honed over 30+ years, an attitude firmly rooted in design
              thinking, and lakhs of pleased clients.
            </p>
          </div>
          <div className="img-box">
            <img src={rm} alt="RM" />
            <img src={tw} alt="RM" />
            <img src={gd} alt="RM" />
            <img src={fg} alt="RM" />
            <img src={ig} alt="RM" />
            <img src={vw} alt="RM" />
            <img src={bd} alt="RM" />
            <img src={ap} alt="RM" />
          </div>
          <div className="b">
            <button>View More</button>
          </div>
        </div>
      </div>
    </>
  );
}
