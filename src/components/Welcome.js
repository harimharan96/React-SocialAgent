import React from "react";
import "./Welcome.css";
import bg from "../assets/Rectangle 2.jpg";

export default function Welcome() {
  return (
    <div>
      <img className="bg" src={bg} alt="bg"></img>
      <div className="welcome">
        <h2>WELCOME TO MIRACLE STONEX</h2>
        <p>Explore Products</p>
      </div>
    </div>
  );
}
