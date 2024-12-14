import React from "react";
import { FaFacebook, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Import icons

function Contact() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        borderRadius: "10px",
        maxWidth: "600px",
        margin: "30px auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Title */}
      <h2 style={{ fontSize: "2rem", color: "#0056b3", marginBottom: "20px" }}>
        Contact Me
      </h2>

      {/* Email Section */}
      <p style={{ fontSize: "1.1rem", color: "#333", margin: "10px 0" }}>
        <FaEnvelope style={{ marginRight: "10px", color: "#0056b3" }} />
        <strong>Email:</strong> kayreenfaith@gmail.com
      </p>

      {/* Phone Section */}
      <p style={{ fontSize: "1.1rem", color: "#333", margin: "10px 0" }}>
        <FaPhoneAlt style={{ marginRight: "10px", color: "#0056b3" }} />
        <strong>Phone:</strong> 09096946741
      </p>

      {/* Social Media Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <a
          href="https://www.facebook.com/aireendonaire.tabacon"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#4267B2",
            fontSize: "1.5rem",
            margin: "0 15px",
          }}
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/kayreenfaith/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#E1306C",
            fontSize: "1.5rem",
            margin: "0 15px",
          }}
        >
          <FaInstagram />
        </a>
       
         
      
      </div>
    </div>
  );
}

export default Contact;
