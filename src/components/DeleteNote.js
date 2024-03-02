// DeleteNote.js
import React from 'react';

function DeleteNote({ onDelete }) {
  return (
    <div>
      <p>Are you sure you want to delete this note?</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default DeleteNote;
