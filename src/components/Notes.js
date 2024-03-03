import React, { useState } from 'react';
import { FaPenSquare, FaTrash, FaEdit } from 'react-icons/fa';
import AddNote from './AddNote';

function Notes() {
  const [savedNotes, setSavedNotes] = useState([]);
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [formValues, setFormValues] = useState({ title: '', body: '', author: '' });

  const handleSaveNote = (newNote) => {
    setSavedNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleToggleAddNoteForm = () => {
    setShowAddNoteForm(!showAddNoteForm);
    setSelectedNoteIndex(null); // Reset selected note index when toggling form
    setFormValues({ title: '', body: '', author: '' }); // Clear form values
  };

  const handleNoteClick = (index) => {
    setSelectedNoteIndex(index);
    const selectedNote = savedNotes[index];
    setFormValues({
      title: selectedNote.title,
      body: selectedNote.body,
      author: selectedNote.author
    });
    setShowAddNoteForm(true); // Show the form when a saved note is clicked
  };

  const handleDeleteNote = (index) => {
    setSavedNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
    setSelectedNoteIndex(null);
  };

  const handleUpdateNote = () => {
    const updatedNote = { ...formValues };
    setSavedNotes((prevNotes) =>
      prevNotes.map((note, i) => (i === selectedNoteIndex ? updatedNote : note))
    );
    setSelectedNoteIndex(null);
  };

  return (
    <div className="center-container">
      <div className="note-adder">
        {selectedNoteIndex !== null || showAddNoteForm ? (
          <AddNote
            onSave={handleSaveNote}
            onUpdate={handleUpdateNote}
            onCancel={handleToggleAddNoteForm}
            initialValues={formValues}
          />
        ) : (
          <>
            <div className="left-tag">
              <div>Notes</div>
              <div className="pen-icon-container">
                <FaPenSquare
                  className="pen-icon"
                  onClick={handleToggleAddNoteForm}
                />
              </div>
            </div>
          </>
        )}
        <h1 className="saved">Saved Notes</h1>
        <div className="notes-list">
          {savedNotes.map((note, index) => (
            <div key={index} className="note-item">
              <h3 onClick={() => handleNoteClick(index)}>{note.title}</h3>
              {selectedNoteIndex === index && (
                <div>
                  <button onClick={() => handleDeleteNote(index)}>
                    <FaTrash />
                  </button>
                  <button onClick={() => handleUpdateNote()}>
                    <FaEdit />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notes;
