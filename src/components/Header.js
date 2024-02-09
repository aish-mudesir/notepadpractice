// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../components/styles/Header.css";
import { FaPenSquare } from "react-icons/fa";

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
        <div className="left-content">
          <div>Notes</div>
          {notes && notes.length > 0 ? (
            // Check if notes array is defined and not empty
            notes.map((note) => (
              <div key={note.id} className="note-item">
                <h3>{note.title}</h3>
                <p>written by: {note.author}</p>
              </div>
            ))
          ) : (
            // Render a message if notes array is undefined or empty
            <div className="note-item">No notes available</div>
          )}
        </div>
        {/* Add the pen icon within the left-header-container */}
        <div className="pen-icon-container">
          <Link to="/add-note" className="add-note-link">
            <FaPenSquare className="pen-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
