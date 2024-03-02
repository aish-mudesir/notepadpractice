// Header.js
import React from "react";
// import { Link } from "react-router-dom";
import "../components/styles/Header.css";
// import { FaPenSquare } from "react-icons/fa";

function Header({ notes }) {
  return (
    <div className="header-container">
      <div className="header-content">
        <h3>Notes</h3>
      </div>
      <div className="header-links">
        <p>Home</p>
        <p>Notes</p>
      </div>
      <div className="left-header-container">
        {/* Add the pen icon within the left-header-container */}
       
      </div>
    </div>
  );
}
export default Header;