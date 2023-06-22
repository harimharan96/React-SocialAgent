import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="heading">
        <h3>Filters</h3>
      </div>
      <div className="filter">
        <div className="categories">
          <h3>STONE</h3>
          <li>
            <input type="checkbox" />
            GRANITE
          </li>
          <li>
            <input type="checkbox" />
            MARBLE
          </li>
        </div>
        <div className="categories">
          <h3>COLOUR</h3>
          <li>
            <input type="checkbox" />
            WHITE
          </li>
          <li>
            <input type="checkbox" />
            WHITE
          </li>
          <li>
            <input type="checkbox" />
            WHITE
          </li>
          <li>
            <input type="checkbox" />
            WHITE
          </li>
          <li>
            <input type="checkbox" />
            WHITE
          </li>
          <li>
            <input type="checkbox" />
            WHITE
          </li>
          <li>
            <input type="checkbox" />
            WHITE
          </li>
          <li>
            <input type="checkbox" />
            WHITE
          </li>
          <li>
            <input type="checkbox" />
            WHITE
          </li>
          <li>
            <input type="checkbox" />
            WHITE
          </li>
          <li>
            <input type="checkbox" />
            WHITE
          </li>
          <li>
            <input type="checkbox" />
            WHITE
          </li>
        </div>
        <div className="btn">
          <button>Reset Selection</button>
        </div>
      </div>
    </div>
  );
}
