import React from "react";
import profileImage from "../profile.jpg"; // Import your image

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        animation: "fadeIn 2s ease-in",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>AIREEN D. TABACON</h2>
      <img
        src={profileImage}
        alt="My Profile"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          margin: "20px 0",
          transform: "scale(1)",
          transition: "transform 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
      <p>This is the home page where you can learn about me and my work.</p>
      <p
        style={{
          marginTop: "20px",
          fontStyle: "italic",
          fontSize: "1.2rem",
          color: "#555",
          opacity: "0",
          animation: "fadeInText 3s ease forwards",
        }}
      >
        "Keep learning, keep growing, and never give up."
      </p>

      {/* Inline CSS Animation Styles */}
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
        `}
      </style>
    </div>
  );
}

export default Home;
