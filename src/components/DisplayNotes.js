// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddNote from "../"
import DisplayNotes from "../components/AddNote/DisplayNotes";
import Header from "../components/Header";

function App() {
  const [notes, setNotes] = useState([]);
  const [headerTitle, setHeaderTitle] = useState('Welcome to My Notes App');

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <Router>
      <div>
        <Header title={headerTitle} />
        <Routes>
          <Route
            path="/"
            element={<DisplayNotes notes={notes} />}
          />
          <Route
            path="/add-note"
            element={<AddNote addNote={addNote} setHeaderTitle={setHeaderTitle} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
