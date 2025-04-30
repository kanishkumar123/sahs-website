import React from "react";
import {
  FaHospitalAlt,
  FaFlask,
  FaCoffee,
  FaLeaf,
  FaXRay,
  FaDesktop,
  FaBuilding,
  FaBook,
  FaTheaterMasks,
  FaFutbol,
  FaUserTie,
  FaBus,
  FaMusic,
  FaAmbulance,
  FaChalkboard,
  FaDumbbell,
} from "react-icons/fa";
import "./HighlightsInstituition.css"; // Assuming you have a CSS file for styling

const highlights = [
  { icon: <FaHospitalAlt />, title: "810 Bedded Medical College Hospital" },
  { icon: <FaFlask />, title: "Laboratory with Fully Automated Instruments" },
  { icon: <FaCoffee />, title: "Cafeteria" },
  { icon: <FaLeaf />, title: "Green Campus" },
  { icon: <FaXRay />, title: "Radiology Unit (MRI)" },
  { icon: <FaDesktop />, title: "Simulation Lab" },
  { icon: <FaBuilding />, title: "Hostel Facility" },
  { icon: <FaBook />, title: "Digital Library" },
  { icon: <FaTheaterMasks />, title: "Auditorium" },
  { icon: <FaFutbol />, title: "Sports Facilities" },
  { icon: <FaUserTie />, title: "Experienced Faculty" },
  { icon: <FaBus />, title: "Transport Facility" },
  { icon: <FaMusic />, title: "Co-Curricular & Extracurricular Activities" },
  { icon: <FaAmbulance />, title: "Emergency Unit" },
  { icon: <FaChalkboard />, title: "Digitalised Class Rooms" },
  { icon: <FaDumbbell />, title: "Modernized GYM" },
];

const HighlightsInstitution = () => (
  <section className="highlights">
    <div className="container">
      <h2 className="title">Highlights of the Institution</h2>
      <div className="highlights-grid">
        {highlights.map((item, idx) => (
          <div className="highlight-box" key={idx}>
            <div className="highlight-icon">{item.icon}</div>
            <p className="highlight-text">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightsInstitution;
