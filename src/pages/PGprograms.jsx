import React from "react";
import "./PGPrograms.css";

const UGProgrammes = () => {
  const programmes = [
    "M.Sc. Accident and Emergency Care Technology",
    "M.Sc. Advance Care Paramedic",
    "M.Sc. Anaesthesia Technology",
    "M.Sc. Cardiac Cath and Interventional Technology",
    "M.Sc. Echo Cardiography",
    "M.Sc. Forensic Science Technology",
    "M.Sc. Medical Lab Technology",
    "M.Sc. Physician Assistant",
    "M.Sc. Radiology & Imaging Technology",
    "M.Sc. Renal Dialysis Technology",
    "M.Optom. (Master of Optometry)",
  ];

  return (
    <div className="container">
      <h1 className="title">Postgraduate Programmes</h1>
      <div className="programme-list">
        {programmes.map((programme, index) => (
          <div key={index} className="programme-item">
            {programme}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UGProgrammes;
