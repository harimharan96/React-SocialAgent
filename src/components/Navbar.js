import React from "react";
import logo from "../assets/logo_main.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="menu">
        <li>
          <Link to="/" id="home">
            HOME
          </Link>
        </li>
        <li>
          <a href="/">ABOUT US</a>
        </li>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" width={178} height={87} />
      </div>
      <div className="menu">
        <li>
          <Link to="/products">PRODUCTS</Link>
        </li>
        <li>
          <a href="/" className="getInTouch">
            GET IN TOUCH
          </a>
        </li>
      </div>
    </div>
  );
}
