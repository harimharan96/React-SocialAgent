import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="container">
      <div className="box1">
        <h2>Granite</h2>
        <p>
          Granite is formed from slow-cooling magma, which gives it its unique
          mineral composition and texture. It is known for its durability,
          strength, and beauty, making it a popular choice for counter tops,
          flooring, wall cladding, and more.
        </p>
      </div>
      <div className="box2">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
