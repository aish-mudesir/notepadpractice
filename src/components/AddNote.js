import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AddNote({ notes, setNotes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: '', body: '', author: '' });

  useEffect(() => {
    // Find the selected note by ID
    const selectedNote = notes.find((n) => n.id === parseInt(id));
    if (selectedNote) {
      setNote(selectedNote);
    }
  }, [id, notes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    // Update the selected note in the notes array
    const updatedNotes = notes.map((n) => (n.id === note.id ? note : n));
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    navigate('/');
  };

  const handleDelete = () => {
    // Confirm deletion and delete the selected note
    const isConfirmed = window.confirm('Are you sure you want to delete this note?');
    if (isConfirmed) {
      const updatedNotes = notes.filter((n) => n.id !== note.id);
      setNotes(updatedNotes);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      navigate('/');
    }
  };

  return (
    <div className="center-container">
      <div className="note-adder">
        <div className="add-note-container">
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
              <input type="text" name="author" value={note.author} onChange={handleChange} />
            </label>
            <br />
            <button type="button" onClick={handleUpdate}>Update Note</button>
            <button type="button" onClick={handleDelete}>Delete Note</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNote;









