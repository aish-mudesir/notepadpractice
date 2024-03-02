import React, { useState } from 'react';
import { FaPenSquare, FaTrash, FaEdit } from 'react-icons/fa';
import AddNote from './AddNote';

function Notes() {
  const [savedNotes, setSavedNotes] = useState([]);
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  const handleSaveNote = (newNote) => {
    setSavedNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleToggleAddNoteForm = () => {
    setShowAddNoteForm(!showAddNoteForm);
  };

  const handleNoteClick = (index) => {
    setSelectedNoteIndex(index);
  };

  const handleDeleteNote = (index) => {
    setSavedNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
    setSelectedNoteIndex(null);
  };

  const handleUpdateNote = (updatedNote) => {
    setSavedNotes((prevNotes) =>
      prevNotes.map((note, i) => (i === selectedNoteIndex ? updatedNote : note))
    );
    setSelectedNoteIndex(null);
  };

  return (
    <div className="center-container">
      <div className="note-adder">
        {selectedNoteIndex !== null ? (
          <div className="note-details">
            <h1>{savedNotes[selectedNoteIndex].title}</h1>
            <p>{savedNotes[selectedNoteIndex].body}</p>
            <p>Written by: {savedNotes[selectedNoteIndex].author}</p>
            <div>
              <button onClick={() => handleDeleteNote(selectedNoteIndex)}>
                <FaTrash />
              </button>
              <button onClick={() => setSelectedNoteIndex(null)}>
                Close
              </button>
            </div>
          </div>
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
            <AddNote onSave={handleSaveNote} />
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
