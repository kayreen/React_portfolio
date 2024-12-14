import React from "react";
import profileImage from "../profile1.jpg"; // Replace with your profile image
import travelImage from "../travel.jpg"; // Replace with travel image
import sportsImage from "../sports.jpg"; // Replace with sports image
import faithImage from "../faith.jpg"; // Replace with faith image

function About() {
  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Title Section */}
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          color: "#0056b3",
          animation: "fadeIn 2s ease",
        }}
      >
        About Me
      </h2>

      {/* Profile Image */}
      <div style={{ marginBottom: "30px", animation: "zoomIn 2s ease" }}>
        <img
          src={profileImage}
          alt="Aireen D. Tabacon"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            marginBottom: "20px",
          }}
        />
        <p
          style={{
            marginTop: "10px",
            fontStyle: "italic",
            color: "#555",
            fontSize: "1.2rem",
          }}
        >
          "Designing dreams into reality."
        </p>
      </div>

      {/* Introduction Section */}
      <div
        style={{
          marginBottom: "40px",
          animation: "fadeInText 3s ease",
          padding: "20px",
          backgroundColor: "#f4f4f4",
          borderRadius: "10px",
        }}
      >
        <h3 style={{ color: "#333", marginBottom: "10px" }}>Introduction</h3>
        <p style={{ maxWidth: "800px", margin: "auto", lineHeight: "1.6", color: "#555" }}>
          Hi! My name is <strong>Aireen D. Tabacon</strong>. I am a computer science student who
          loves exploring life through travel, sports, and creativity. My passion lies in coding,
          designing applications, and sharing meaningful experiences.
        </p>
      </div>

      {/* Travel Section */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "40px", animation: "fadeIn 2s ease" }}>
        <img
          src={travelImage}
          alt="Travel"
          style={{
            width: "300px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            marginRight: "20px",
          }}
        />
        <div>
          <h3 style={{ color: "#333", marginBottom: "10px" }}>Travel</h3>
          <p style={{ maxWidth: "500px", margin: "auto", lineHeight: "1.6", color: "#555" }}>
            Traveling is my passion! I’ve explored places like <strong>Samal Island</strong> and
            <strong> Awao Falls</strong>, soaking in the beauty of nature and embracing new
            cultures. Every trip is a new adventure.
          </p>
        </div>
      </div>

      {/* Sports Section */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "40px", animation: "fadeIn 2s ease" }}>
        <img
          src={sportsImage}
          alt="Sports"
          style={{
            width: "300px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            marginRight: "20px",
          }}
        />
        <div>
          <h3 style={{ color: "#333", marginBottom: "10px" }}>Sports</h3>
          <p style={{ maxWidth: "500px", margin: "auto", lineHeight: "1.6", color: "#555" }}>
            Sports like <strong>basketball</strong> and <strong>badminton</strong> keep me active
            and teach me teamwork. I enjoy the thrill of competition and the camaraderie it brings.
          </p>
        </div>
      </div>

      {/* Faith Section */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "40px", animation: "fadeIn 2s ease" }}>
        <img
          src={faithImage}
          alt="Faith"
          style={{
            width: "300px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            marginRight: "20px",
          }}
        />
        <div>
          <h3 style={{ color: "#333", marginBottom: "10px" }}>Faith</h3>
          <p style={{ maxWidth: "500px", margin: "auto", lineHeight: "1.6", color: "#555" }}>
            My faith as a member of the <strong>Foursquare Gospel Church</strong> gives me purpose
            and strength. I believe in the power of prayer, community, and living a meaningful life
            centered on faith.
          </p>
        </div>
      </div>

      {/* Inline Keyframes for Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInText {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes zoomIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default About;
