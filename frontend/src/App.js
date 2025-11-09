import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navabar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CompanyDetail from "./pages/CompanyDetail";
import About from "./pages/About";

function App() {
  <Router>
    <Navabar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/company/:id" element={<CompanyDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
}

export default App();