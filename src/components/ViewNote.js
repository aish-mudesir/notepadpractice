// ViewNote.js
import React from 'react';

function ViewNote({ note }) {
  return (
    <div>
      <h1>{note.title}</h1>
      <p>Written by: {note.author}</p>
      <p>{note.body}</p>
    </div>
  );
}

export default ViewNote;
