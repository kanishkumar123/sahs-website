import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./NewsCarousel.css";

const newsData = [
  {
    image: "/news1.jpg",
    title: "Admissions 2025-2026",
    description: "Join with SAHS today.",
  },
  {
    image: "/news2.jpg",
    title: "Campus Recruitment Drive",
    description: "Top MNCs are visiting campus. Don't miss the opportunity!",
  },
  {
    image: "/news3.jpg",
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

  // Swipe handling
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    pauseOnHover: true,
  });

  return (
    <div className="carousel-container" {...handlers}>
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {newsData.map((item, index) => (
            <div className="carousel-slide" key={index}>
              <img
                src={item.image}
                alt={item.title || "News Slide"}
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

      {/* Pagination dots */}
      <div className="carousel-dots">
        {newsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;
