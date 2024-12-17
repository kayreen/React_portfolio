import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const cvPath = "/cv.pdf"; // Ensure this is correct for the public folder

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvPath; 
    link.download = "Aireen-Tabacon-CV.pdf"; 
    link.click();
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* CV Section */}
        <div style={{ textAlign: "center", marginTop: "20px", padding: "10px" }}>
          <h3 style={{ marginBottom: "10px", color: "#0056b3" }}>Download or View My CV</h3>

          {/* Download CV Button */}
          <button
            style={{
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#0056b3",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={handleDownloadCV}
          >
            Download CV
          </button>

          {/* View CV Link */}
          <a
            href={cvPath} // Direct link to the PDF
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#0056b3",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
          >
            View CV
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;
