import React, { useState, useEffect } from "react";
import "./NewsCarousel.css";
import news1 from "./assets/news1.jpg";
import news2 from "./assets/news2.jpg";
import news3 from "./assets/news3.png";

const newsData = [
  {
    image: news1,
    title: "National Conference 2025",
    description:
      "Join us for the National Conference on Education & Research this June.",
  },
  {
    image: news2,
    title: "Campus Recruitment Drive",
    description: "Top MNCs are visiting campus. Don't miss the opportunity!",
  },
  {
    image: news3,
    title: "Annual Sports Meet",
    description:
      "Exciting events and competitions await at the annual sports meet.",
  },
];

const NewsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % newsData.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + newsData.length) % newsData.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={prevSlide}>
        ❮
      </button>

      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {newsData.map((item, index) => (
            <div className="carousel-slide" key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="carousel-image"
              />
              <div className="carousel-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-btn next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default NewsCarousel;
