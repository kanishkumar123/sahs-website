import React from "react";
import "./Founder.css";
import founderImage from "../assets/founder1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversity,
  faGraduationCap,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Founder = () => {
  return (
    <section className="founder-container">
      <div className="founder-header">
        <h1>Meet Our Founder</h1>
        <p>Inspiring leadership that shaped our institution's vision</p>
      </div>
      <div className="founder-content">
        <div className="founder-image-container">
          <img src={founderImage} alt="Founder" className="founder-image" />
        </div>
        <div className="founder-info">
          <h2 className="founder-name">Dr. A. Shanmugasundaram</h2>
          <h3 className="founder-role">
            Founder - Vinayaka Mission’s Research Foundation
          </h3>
        </div>
      </div>
      <div className="founder-description">
        <div className="founder-point">
          <FontAwesomeIcon icon={faUniversity} className="icon" />
          <p>
            Dr. A. Shanmugasundaram, a noble Philanthropist and Educationist,
            established the Thirumuruga Kirupananda Variyar Thavathiru Sundara
            Swamigal Medical Educational & Charitable Trust (TKVTSSMEC Trust) in
            1981. It is a registered trust, fully self-supporting, based in
            Salem, Tamil Nadu, India.
          </p>
        </div>
        <div className="founder-point">
          <FontAwesomeIcon icon={faGraduationCap} className="icon" />
          <p>
            The Vinayaka Mission's Research Foundation (Deemed to be University)
            has been sponsored by the Vinayaka Mission's Research Foundation
            Trust (VMRF) since its inception.
          </p>
        </div>
        <div className="founder-point">
          <FontAwesomeIcon icon={faUsers} className="icon" />
          <p>
            Thirumuruga Kirupananda Variyar Thavathiru Sundara Swamigal Medical
            Educational & Charitable Trust serves as the parent trust of VMRF.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
