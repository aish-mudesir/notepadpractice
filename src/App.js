// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import AddNote from "./components/AddNote";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/add-note" element={<AddNote />} />
        <Route path="/add-note/:id?" element={<AddNote />} />
      </Routes>
    </Router>
  );
}

export default App;










