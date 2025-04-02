// ChancellorProfile.jsx
import React from "react";
import "./Chancellor.css";
import chancellorImage from "../assets/Chancellor.jpg";

const ChancellorProfile = () => {
  return (
    <div className="chancellor-container">
      <div className="chancellor-header">
        <h1>Meet our Chancellor</h1>
      </div>
      <div className="chancellor-content">
        <div className="chancellor-image-container">
          <div className="chancellor-image-overlay">
            <img
              src={chancellorImage}
              alt="Dr. A.S. Ganesan"
              className="chancellor-image"
            />
          </div>
          <div className="chancellor-image-text">
            <h2>Dr. A.S. Ganesan</h2>
            <p>
              <strong>
                Chancellor - Vinayaka Mission’s Research Foundation (Deemed to
                be University)
              </strong>
            </p>
            <p>
              <strong>
                Managing Director - Vinayaka Medical Care Centre Private Ltd
              </strong>
            </p>
          </div>
        </div>
        <p>
          Dr. A.S. Ganesan is a distinguished leader whose journey from the
          esteemed halls of Madras Medical College to his current roles as
          Chancellor of Vinayaka Mission’s Research Foundation (VMRF) and
          Managing Director of Vinayaka Medical Care Centre Private Ltd.
          epitomizes dedication, vision, and a commitment to societal progress.
        </p>
        <h3>Academic and Leadership Achievements</h3>
        <p>
          Led the establishment of the School of Economics and Public Policy and
          Law School at Chennai Campus.
        </p>

        <p>
          Holds the prestigious Fellowship of the Royal College of Physicians
          (FRCP).
        </p>

        <p>
          {" "}
          Founded the Ganesan Incubation and Entrepreneurship Centre (GIEC),
          incubating over 25 startups.
        </p>

        <h3>Research and Innovation</h3>
        <p>
          Dr. Ganesan’s efforts in advancing research at VMRF have resulted in a
          robust ecosystem with multiple research labs, clinical trial centres,
          and a strong portfolio of publications and patents.
        </p>
        <h3>Global Collaborations</h3>
        <p>
          VMRF has established collaborations with institutions such as Ohio
          University, Seattle University, York University, and Oakland
          University to enhance academic and research profiles globally.
        </p>
        <h3>Community and Philanthropy</h3>
        <p>
          Committed to social service, Dr. Ganesan has expanded healthcare
          access to rural areas and contributed significantly to public health
          initiatives, including a Rs. 4 Crore donation for a community hall in
          Paiyanoor.
        </p>
        <h3>Personal Life</h3>
        <p>
          Dr. Ganesan lives in Chennai with his wife, Dr. Anuradha, Vice
          President of VMRF, and their two children.
        </p>
      </div>
    </div>
  );
};

export default ChancellorProfile;
