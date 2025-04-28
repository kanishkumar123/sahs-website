/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Accreditations.css";

const accreditations = [
  {
    title: "NAAC",
    description:
      "National Assessment and Accreditation Council awarded a high rating.",
    image: "/Naac.jpg",
  },
  {
    title: "NIRF",
    description: "Ranked under the National Institutional Ranking Framework.",
    image: "/Nirf.jpg",
  },
  {
    title: "NABH",
    description:
      "National Accreditation Board for Hospitals & Healthcare Providers.",
    image: "/Nabh.png",
  },
  {
    title: "NABL",
    description:
      "National Accreditation Board for Testing and Calibration Laboratories.",
    image: "/Nabl.jpg",
  },
  {
    title: "ISO",
    description: "Certified for quality and international standards.",
    image: "/Iso.jpg",
  },
  {
    title: "R-World Ranking",
    description: "Ranked among top universities worldwide.",
    image: "/R-WorldRanking.png",
  },
  {
    title: "QS | GAUGE",
    description: "Recognized by QS Stars for excellence in education.",
    image: "/QSGauge.jpg",
  },
  {
    title: "GU Ranking",
    description: "Recognized by QS Stars for excellence in education.",
    image: "/gu-RANKING.png",
  },
  {
    title: "IIRF",
    description: "Recognized by QS Stars for excellence in education.",
    image: "/IIRF.png",
  },
  {
    title: "Education World",
    description: "Recognized by QS Stars for excellence in education.",
    image: "/EducationWorld.jpg",
  },
  {
    title: "MDRA",
    description: "Recognized by QS Stars for excellence in education.",
    image: "/MDRA.jpg",
  },
  {
    title: "Green Ranking",
    description: "Ranked for environmental sustainability.",
    image: "/GreenRanking.png",
  },
  {
    title: "Innovative University of the year 2022",
    description: "Awarded for innovation in education.",
    image: "/InnovativeUniversity.png",
  },
  {
    title: "IIC-Star-Rating",
    description: "Recognized by QS Stars for excellence in education.",
    image: "/IIC.jpg",
  },
  {
    title: "ARIIA",
    description: "Recognized for research and innovation in academics.",
    image: "/ARIIA.png",
  },
];

const Accreditations = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="accreditation-container">
      <h2 className="title">Accreditations & Recognitions</h2>
      <motion.div
        className="accreditation-grid"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {accreditations.map((item, index) => (
          <motion.div
            key={index}
            className={`accreditation-card ${
              expandedIndex === index ? "expanded" : ""
            }`}
            onClick={() => toggleExpand(index)}
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.5)" }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="accreditation-image"
            />
            <h3 className="accreditation-name">{item.title}</h3>
            <motion.div
              className="accreditation-content"
              animate={{
                maxHeight: expandedIndex === index ? "100px" : "0px",
                opacity: expandedIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p>{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Accreditations;
