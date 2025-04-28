import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  "/DJI_0416.jpg",
  "/DJI_0437.jpg",
  "/DSC_7124.jpg",
  "/university.jpg",
];
const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      {images.map((image, index) => (
        <div
          key={index}
          className={`hero-background ${
            index === currentImage ? "active" : ""
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      <div className="hero-overlay">
        <h2>School of Allied Health Science</h2>
        <a
          href="https://admission2025.vinayakamission.com/student/register"
          target="_blank"
          rel="noopener noreferrer"
          className="admission-button"
        >
          Admission Open 2025-26 →
        </a>

        {/* Added call-to-action button */}
      </div>
    </div>
  );
};

export default Hero;
