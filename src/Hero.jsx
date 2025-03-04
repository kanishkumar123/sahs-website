import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  "/DJI_0416.jpg",
  "/DJI_0437.jpg",
  "/DSC_7124.JPG",
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
        <h2>SAHS Admission Open</h2>
      </div>
    </div>
  );
};

export default Hero;
