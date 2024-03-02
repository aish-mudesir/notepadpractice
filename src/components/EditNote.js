// EditNote.js
import React, { useState } from 'react';

function EditNote({ note, onSave }) {
  const [editedNote, setEditedNote] = useState(note);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedNote({
      ...editedNote,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onSave(editedNote);
  };

  return (
    <div>
      <input type="text" name="title" value={editedNote.title} onChange={handleChange} />
      <textarea name="body" value={editedNote.body} onChange={handleChange} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default EditNote;
