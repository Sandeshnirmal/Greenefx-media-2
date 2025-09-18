import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Homepage from "./pages/Home.jsx";
import Course from "./pages/Courses.jsx";
import Service from "./pages/Service.jsx";
import PortfolioPage from "./pages/Service1.jsx";
import Blog from "./pages/Blog.jsx";


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
        <Route
          path="/services" element={<Service />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<Blog />} />

      </Routes>
    </Router>
  );
}

export default App;