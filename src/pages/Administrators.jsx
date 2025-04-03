import React from "react";
import "./Administrators.css";
import image1 from "../assets/istockphoto-1309328823-612x612.jpg";

const administrators = [
  {
    name: "Dr. John Doe",
    position: "Principal",
    image: image1,
  },
  {
    name: "Prof. Jane Smith",
    position: "Vice Principal",
    image: image1,
  },
  {
    name: "Dr. Mark Wilson",
    position: "Dean of Academics",
    image: image1,
  },
  {
    name: "Mr. Emily Brown",
    position: "Head of Admissions",
    image: image1,
  },
  {
    name: "Dr. Liam Johnson",
    position: "Controller of Exams",
    image: image1,
  },
  {
    name: "Prof. Jane Smith",
    position: "Vice Principal",
    image: image1,
  },
  {
    name: "Dr. Mark Wilson",
    position: "Dean of Academics",
    image: image1,
  },
  {
    name: "Mr. Emily Brown",
    position: "Head of Admissions",
    image: image1,
  },
];

const Administrators = () => {
  return (
    <div className="admin-container">
      <h2 className="admin-title">SAHS Administration</h2>
      <div className="admin-grid">
        {administrators.map((admin, index) => (
          <div key={index} className="admin-card">
            <img src={admin.image} alt={admin.name} className="admin-image" />
            <h3 className="admin-name">{admin.name}</h3>
            <p className="admin-position">{admin.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Administrators;
