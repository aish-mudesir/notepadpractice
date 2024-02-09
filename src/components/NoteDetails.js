import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; // Import useHistory

function NoteDetails({ note, onUpdate, onDelete }) {
  const navigate = useNavigate(); // Initialize useHistory

  const handleUpdate = () => {
    onUpdate(note.id);
    navigate.push('/add-note/' + note.id);
  };

  const handleDelete = () => {
    onDelete(note.id);
    history.push('/');
  };

  return (
    <div className="note-details-container">
      <h2>Note Details</h2>
      <div className="note-details">
        <h3>{note.title}</h3>
        <p>Written by: {note.author}</p>
        <p>{note.body}</p>
      </div>
      <div className="note-actions">
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

NoteDetails.propTypes = {
  note: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default NoteDetails;



