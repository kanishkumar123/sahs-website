import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
  { src: "/DJI_0416.jpg" },
  { src: "/DJI_0437.jpg" },
  { src: "/DSC_7124.jpg" },
  { src: "/university.jpg" },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(null);
  const title = "SCHOOL OF ALLIED HEALTH SCIENCES".split("");

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImage(currentImage);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <>
      {/* Preload first image */}
      <link rel="preload" as="image" href={images[0].src} />

      <div className="hero">
        {images.map((item, idx) => {
          let className = "hero-background";
          if (idx === currentImage) className += " active";
          else if (idx === prevImage) className += " exiting";

          return (
            <div
              key={idx}
              className={className}
              style={{ backgroundImage: `url(${item.src})` }}
              aria-hidden={idx !== currentImage}
            ></div>
          );
        })}

        <div className="hero-overlay">
          <h2 className="hero-title">
            {title.map((char, i) => (
              <span key={i} style={{ "--i": i }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>

          <a
            href="https://admission2025.vinayakamission.com/student/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-animated-border"
          >
            Admissions Open 2025 - 26 📌
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
