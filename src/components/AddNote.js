import React, { useState } from 'react';

function AddNote({ onSave }) {
  const [note, setNote] = useState({ title: '', body: '', author: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSave(note); // Pass the new note to the onSave function
    setNote({ title: '', body: '', author: '' }); // Clear the form after saving
  };

  return (
    <div className="add-note-container">
      <h1>Add Note</h1>
      <form>
        <label>Note Title<br />
          <input type="text" name="title" value={note.title} onChange={handleChange} />
        </label>
        <br />
        <label>Note Body 😊<br />
          <textarea name="body" value={note.body} onChange={handleChange} />
        </label>
        <br />
        <label>Author<br />
          <select name="author" value={note.author} onChange={handleChange}>
            <option value="fuad">Fuad</option>
            <option value="Amir">Amir</option>
            <option value="rufeyda">Rufeyda</option>
            <option value="kebede">Kebede</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>Add Note</button>
      </form>
    </div>
  );
}

export default AddNote;
