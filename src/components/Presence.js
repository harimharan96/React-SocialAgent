import React from "react";
import "./Presence.css";
import tn from "../assets/Property 1=Frame 111tn.png";
import ka from "../assets/Property 1=Frame 110ka.png";
import jp from "../assets/Property 1=Frame 112jaip.png";

export default function Presence() {
  return (
    <div>
      <div className="presence">
        <h3>Our Presence</h3>
        <p>
          Miracle StoneX is a leading provider of high-quality granite products
          and services, serving the global market with a focus on customer
          satisfaction and excellence.
        </p>
      </div>
      <div className="locations">
        <img id="tn" src={tn} alt="tn" />
        <img id="ka" src={ka} alt="ka" />
        <img id="jp" src={jp} alt="jp" />
      </div>
      <div className="enq">
        <h2>WE'RE WAITING TO HEAR FROM YOU!</h2>

        <div className="enquiry">
          <form>
            <h3>Enquiry</h3>
            <p>
              Fill out this inquiry form and we will get in touch with you
              shortly.
            </p>
            <input type="text" placeholder="My Name" />
            <br />
            <input type="text" placeholder="Location" />
            <br />
            <input type="text" placeholder="Contact No." />
            <br />
            <input type="text" placeholder="Email id" />
            <br />
            <br />
            <input type="text" placeholder="Message" />
            <br />
            <button>Enquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
}
