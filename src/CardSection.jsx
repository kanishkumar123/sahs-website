import React from "react";
import { FaUsers, FaBook, FaLaptop, FaNewspaper } from "react-icons/fa";
import "./CardSection.css";

const CardSection = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="/Steering-Committee-Waydev.jpg"
          alt="Life @ SAHS"
          className="card-image"
        />
        <div className="overlay">
          <div className="icon">
            <FaUsers size={40} />
          </div>
          <h3>Life @ SAHS</h3>
        </div>
      </div>

      <div className="card">
        <img
          src="/20170509_Eng_Library_DJA_012_3.jpg"
          alt="Library"
          className="card-image"
        />
        <div className="overlay">
          <div className="icon">
            <FaBook size={40} />
          </div>
          <h3>LIBRARY</h3>
        </div>
      </div>

      <div className="card">
        <img
          src="/photo-1606568156390-8f4edb5ef31f.jpeg"
          alt="E-Learning"
          className="card-image"
        />
        <div className="overlay">
          <div className="icon">
            <FaLaptop size={40} />
          </div>
          <h3>E-Learning</h3>
        </div>
      </div>

      <div className="card">
        <img
          src="/collection-newspapers.jpg"
          alt="News"
          className="card-image"
        />
        <div className="overlay">
          <div className="icon">
            <FaNewspaper size={40} />
          </div>
          <h3>NEWS</h3>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
