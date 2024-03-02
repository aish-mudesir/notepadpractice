import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router

function NoteDetails({ notes, onDelete }) {
  const history = useHistory(); // Use useHistory
  const { id } = useParams();
  const [note, setNote] = useState(notes.find((note) => note.id === id));

  const handleEdit = () => {
    navigate.push(`/edit-note/${id}`);
  };

  const handleDelete = () => {
    onDelete(id);
    navigate.push('/notes');
  };

  return (
    <div>
      <h1>Note Details</h1>
      {note && (
        <div>
          <h3>{note.title}</h3>
          <p>Author: {note.author}</p>
          <p>{note.body}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default NoteDetails;
