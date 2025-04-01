import React, { useState } from "react";
import "./PGPrograms.css";

const PGProgrammes = () => {
  const programmes = [
    {
      name: "M.Sc. Accident and Emergency Care Technology",
      duration: "2 Years",
      degreeLevel: "Postgraduate",
      fees: "₹1,20,000 per year",
      intake: "50 Students",
    },
    {
      name: "M.Sc. Advance Care Paramedic",
      duration: "2 Years",
      degreeLevel: "Postgraduate",
      fees: "₹1,20,000 per year",
      intake: "50 Students",
    },
    {
      name: "M.Sc. Anaesthesia Technology",
      duration: "2 Years",
      degreeLevel: "Postgraduate",
      fees: "₹1,20,000 per year",
      intake: "50 Students",
    },
    {
      name: "M.Sc. Cardiac Cath and Interventional Technology",
      duration: "2 Years",
      degreeLevel: "Postgraduate",
      fees: "₹1,20,000 per year",
      intake: "50 Students",
    },
    {
      name: "M.Sc. Echo Cardiography",
      duration: "2 Years",
      degreeLevel: "Postgraduate",
      fees: "₹1,20,000 per year",
      intake: "50 Students",
    },
    {
      name: "M.Sc. Forensic Science Technology",
      duration: "2 Years",
      degreeLevel: "Postgraduate",
      fees: "₹1,20,000 per year",
      intake: "50 Students",
    },
    {
      name: "M.Sc. Medical Lab Technology",
      duration: "2 Years",
      degreeLevel: "Postgraduate",
      fees: "₹1,20,000 per year",
      intake: "50 Students",
    },
    {
      name: "M.Sc. Physician Assistant",
      duration: "2 Years",
      degreeLevel: "Postgraduate",
      fees: "₹1,20,000 per year",
      intake: "50 Students",
    },
    {
      name: "M.Sc. Radiology & Imaging Technology",
      duration: "2 Years",
      degreeLevel: "Postgraduate",
      fees: "₹1,20,000 per year",
      intake: "50 Students",
    },
    {
      name: "M.Sc. Renal Dialysis Technology",
      duration: "2 Years",
      degreeLevel: "Postgraduate",
      fees: "₹1,20,000 per year",
      intake: "50 Students",
    },
    {
      name: "M.Optom. (Master of Optometry)",
      duration: "2 Years",
      degreeLevel: "Postgraduate",
      fees: "₹1,20,000 per year",
      intake: "50 Students",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isModalClosing, setIsModalClosing] = useState(false);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleCloseModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setSelectedProgram(null);
      setIsModalClosing(false);
    }, 300);
  };

  return (
    <div className="container">
      <h1 className="title">Postgraduate Programmes</h1>
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
            {expandedIndex === index && (
              <div className="expanded-content">
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
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProgram(programme);
                  }}
                >
                  Know More
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedProgram && (
        <div
          className={`modal-overlay ${isModalClosing ? "hide" : ""}`}
          onClick={handleCloseModal}
        >
          <div
            className={`modal-content ${isModalClosing ? "hide" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedProgram.name}</h2>
            <p>
              <strong>Duration:</strong> {selectedProgram.duration}
            </p>
            <p>
              <strong>Degree Level:</strong> {selectedProgram.degreeLevel}
            </p>
            <p>
              <strong>Fees:</strong> {selectedProgram.fees}
            </p>
            <p>
              <strong>Intake:</strong> {selectedProgram.intake}
            </p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PGProgrammes;
