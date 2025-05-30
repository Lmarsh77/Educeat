import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotesPage from "./pages/NotesPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home user={user} /> : <Login setUser={setUser} />} />
        <Route path="/notes/:subjectCode" element={user ? <NotesPage /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
