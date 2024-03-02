// NoteDetails.js
import React from 'react';

function NoteDetails({ note }) {
  // Implement editing functionality and delete button
  return (
    <div>
      <h2>{note.title}</h2>
      <p>Author: {note.author}</p>
      {/* Add editing functionality and delete button here */}
    </div>
  );
}

export default NoteDetails;

