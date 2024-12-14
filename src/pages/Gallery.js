import React from "react";

function Gallery() {
  // Dynamically generate an array of 100 image paths from the local "images" folder
  const images = Array.from({ length: 100 }, (_, index) => ({
    src: `${process.env.PUBLIC_URL}/images/image-${index + 1}.jpg`, // Adjust the file naming pattern
    alt: `Image ${index + 1}`,
  }));

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          color: "#0056b3",
          animation: "fadeIn 2s ease",
        }}
      >
        My Gallery
      </h2>

      {/* Gallery Container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "15px",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              overflow: "hidden",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        ))}
      </div>

      {/* Inline Animation Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

export default Gallery;
