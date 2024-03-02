import React, { useState } from 'react';
import AddNote from './AddNote';

function ParentComponent() {
  const addNote = (note) => {
    // Implementation of adding note
    console.log('Adding note:', note);
  };

  return (
    <div>
      <AddNote addNote={addNote} />
    </div>
  );
}

export default ParentComponent;
<div className="notes-list">
{savedNotes.map((note, index) => (
  <div key={index} className="note-item">
    <h3>{note.title}</h3>
    <p>{note.body}</p>
    <p>Written by: {note.author}</p>
  </div>
))}
</div>
<AddNote onSave={handleSaveNote} /> {/* Render the AddNote component */}
</div>