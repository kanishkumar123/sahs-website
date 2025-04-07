import React, { useState, useEffect, useRef } from "react";
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

  const contentRefs = useRef([]);

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

  // Update height dynamically when the component renders or expanded index changes
  useEffect(() => {
    if (expandedIndex !== null) {
      const content = contentRefs.current[expandedIndex];
      if (content) {
        content.style.height = `${content.scrollHeight}px`; // Set height dynamically based on content
      }
    } else {
      contentRefs.current.forEach((content) => {
        if (content) {
          content.style.height = "0px"; // Reset height when collapsed
        }
      });
    }
  }, [expandedIndex]);

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
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="expanded-content"
            >
              <p>
                <strong>Duration:</strong> {programme.duration}
              </p>
              <p>
                <strong>Degree Level:</strong>{" "}
                {programme.degreeLevel || "Undergraduate"}
              </p>
              <p>
                <strong>Fees:</strong> {programme.fees}
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
          </div>
        ))}
      </div>

      {/* Modal */}
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
              <strong>Degree Level:</strong>{" "}
              {selectedProgram.degreeLevel || "Undergraduate"}
            </p>
            <p>
              <strong>Fees:</strong> {selectedProgram.fees}
            </p>
            <p>
              <strong>Intake:</strong> {selectedProgram.intake}
            </p>
            <p>
              <strong>Eligibility:</strong>{" "}
              {selectedProgram.eligibility || "N/A"}
            </p>
            <p>
              <strong>Overview:</strong> {selectedProgram.overview || "N/A"}
            </p>

            {selectedProgram.careerProspects && (
              <>
                <h3>Career Prospects:</h3>
                <ul>
                  {selectedProgram.careerProspects.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PGProgrammes;
