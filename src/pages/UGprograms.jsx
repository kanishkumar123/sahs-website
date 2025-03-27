import React, { useState } from "react";
import "./UGPrograms.css";

const UGProgrammes = () => {
  const programmes = [
    {
      name: "B.Sc. Accident and Emergency Care Technology",
      duration: "4 Years (3 Years + 1 Year Internship)",
      degreeLevel: "Undergraduate",
      fees: "₹1,50,000 per year",
      intake: "60 Students",
    },
    {
      name: "B.Sc. Anaesthesia Technology",
      duration: "4 Years (3 Years + 1 Year Internship)",
      degreeLevel: "Undergraduate",
      fees: "₹1,40,000 per year",
      intake: "50 Students",
    },
    {
      name: "B.Sc. Cardiac Technology",
      duration: "4 Years (3 Years + 1 Year Internship)",
      degreeLevel: "Undergraduate",
      fees: "₹1,60,000 per year",
      intake: "55 Students",
    },
    {
      name: "B.Sc. Emergency Medical Care Technology",
      duration: "4 Years (3 Years + 1 Year Internship)",
      degreeLevel: "Undergraduate",
      fees: "₹1,30,000 per year",
      intake: "45 Students",
    },
    {
      name: "B.Sc. Forensic Science Technology",
      duration: "4 Years",
      degreeLevel: "Undergraduate",
      fees: "₹1,20,000 per year",
      intake: "50 Students",
    },
    {
      name: "B.Sc. Medical Lab Technology",
      duration: "4 Years (3 Years + 1 Year Internship)",
      degreeLevel: "Undergraduate",
      fees: "₹1,25,000 per year",
      intake: "70 Students",
    },
    {
      name: "B.Sc. Neuro Sciences Technology",
      duration: "4 Years (3 Years + 1 Year Internship)",
      degreeLevel: "Undergraduate",
      fees: "₹1,55,000 per year",
      intake: "40 Students",
    },
    {
      name: "B.Sc. Operation Theatre Technology",
      duration: "4 Years (3 Years + 1 Year Internship)",
      degreeLevel: "Undergraduate",
      fees: "₹1,35,000 per year",
      intake: "60 Students",
    },
    {
      name: "B.Sc. Perfusion Technology",
      duration: "4 Years (3 Years + 1 Year Internship)",
      degreeLevel: "Undergraduate",
      fees: "₹1,45,000 per year",
      intake: "50 Students",
    },
    {
      name: "B.Sc. Physician Assistant",
      duration: "4 Years",
      degreeLevel: "Undergraduate",
      fees: "₹1,20,000 per year",
      intake: "40 Students",
    },
    {
      name: "B.Sc. Radiology & Imaging Technology",
      duration: "4 Years (3 Years + 1 Year Internship)",
      degreeLevel: "Undergraduate",
      fees: "₹1,50,000 per year",
      intake: "55 Students",
    },
    {
      name: "B.Sc. Renal Dialysis Technology",
      duration: "4 Years (3 Years + 1 Year Internship)",
      degreeLevel: "Undergraduate",
      fees: "₹1,40,000 per year",
      intake: "50 Students",
    },
    {
      name: "B.Sc. Respiratory Care Technology",
      duration: "4 Years (3 Years + 1 Year Internship)",
      degreeLevel: "Undergraduate",
      fees: "₹1,45,000 per year",
      intake: "50 Students",
    },
    {
      name: "B.Optom. (Bachelor of Optometry)",
      duration: "4 Years",
      degreeLevel: "Undergraduate",
      fees: "₹1,30,000 per year",
      intake: "45 Students",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container">
      <h1 className="title">Undergraduate Programmes</h1>
      <div className="programme-list">
        {programmes.map((programme, index) => (
          <div
            key={index}
            className={`programme-item ${
              expandedIndex === index ? "expanded" : ""
            }`}
            onClick={() => toggleExpand(index)}
          >
            <div className="programme-title">{programme.name}</div>
            <div
              className="programme-details"
              style={{
                maxHeight: expandedIndex === index ? "300px" : "0px",
                opacity: expandedIndex === index ? "1" : "0",
              }}
            >
              <p>
                <strong>Duration:</strong> {programme.duration}
              </p>
              <p>
                <strong>Degree Level:</strong> {programme.degreeLevel}
              </p>
              <p>
                <strong>Fees:</strong> {programme.fees}
              </p>
              <p>
                <strong>Intake:</strong> {programme.intake}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UGProgrammes;
