import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Homepage from "./pages/Home.jsx";
import Course from "./pages/Courses.jsx";


function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Homepage />} />

        {/* Route for the course page */}
        <Route path="/courses" element={<Course />} />

        {/* Redirect from homepage to course page */}
        <Route
          path="/redirect-to-courses"
          element={<Navigate to="/courses" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;