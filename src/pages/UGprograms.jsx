import React, { useState, useEffect, useRef } from "react";
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
      duration: "3 + 1 Year Internship",
      eligibility:
        "A Pass in 10+2 / H.Sc. or its equivalent examination with subjects of Physics, Chemistry & Biology (Botany & Zoology) or Mathematics",
      overview:
        "The B.Optom. course is offered by the School of Allied Health Sciences, VMKV Medical College Campus, Salem with state-of-the-art facilities for basic and advanced Optometry training. Students are trained in comprehensive eye examinations, optometric management, contact lens fitting, low vision care, binocular vision, and optical dispensing.",
      careerProspects: [
        "Tertiary Eye Care Hospitals",
        "Optical and Contact Lens Industries",
        "Private Practice",
        "NGOs",
      ],
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

export default UGProgrammes;
