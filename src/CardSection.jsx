import React from "react";
import { FaUsers, FaBook, FaLaptop, FaNewspaper } from "react-icons/fa";
import "./CardSection.css";

const cards = [
  {
    title: "Life @ SAHS",
    icon: <FaUsers size={40} />,
    image: "src/assets/Steering-Committee-Waydev.jpg",
  },
  {
    title: "LIBRARY",
    icon: <FaBook size={40} />,
    image: "src/assets/20170509_Eng_Library_DJA_012_3.jpg",
  },
  {
    title: "E-Learning",
    icon: <FaLaptop size={40} />,
    image: "src/assets/photo-1606568156390-8f4edb5ef31f.jpeg",
  },
  {
    title: "NEWS",
    icon: <FaNewspaper size={40} />,
    image: "src/assets/collection-newspapers.jpg",
  },
];

const CardSection = () => {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div
          key={index}
          className="card"
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div className="overlay">
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
