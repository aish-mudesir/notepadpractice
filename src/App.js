// App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import Header from "./components/Header";
import AddNote from "./components/AddNote";
import AppLayout from "./AppLayout";
import Home from "./components/Home";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          {/* Pass notes and setNotes props to AddNote */}
          <Route
            path="/add-note"
            element={<AddNote notes={notes} setNotes={setNotes} />}
          />
          <Route
            path="/add-note/:id?"
            element={<AddNote notes={notes} setNotes={setNotes} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

