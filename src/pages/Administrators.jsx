/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";
import "./Administrators.css";

const administrators = [
  {
    name: "Dr. John Doe",
    position: "Principal",
    image: "/istockphoto-1309328823-612x612.jpg",
  },
  {
    name: "Prof. Jane Smith",
    position: "Vice Principal",
    image: "/istockphoto-1309328823-612x612.jpg",
  },
  {
    name: "Dr. Mark Wilson",
    position: "Dean of Academics",
    image: "/istockphoto-1309328823-612x612.jpg",
  },
  {
    name: "Mr. Emily Brown",
    position: "Head of Admissions",
    image: "/istockphoto-1309328823-612x612.jpg",
  },
  {
    name: "Dr. Liam Johnson",
    position: "Controller of Exams",
    image: "/istockphoto-1309328823-612x612.jpg",
  },
  {
    name: "Prof. Jane Smith",
    position: "Vice Principal",
    image: "/istockphoto-1309328823-612x612.jpg",
  },
  {
    name: "Dr. Mark Wilson",
    position: "Dean of Academics",
    image: "/istockphoto-1309328823-612x612.jpg",
  },
  {
    name: "Mr. Emily Brown",
    position: "Head of Admissions",
    image: "/istockphoto-1309328823-612x612.jpg",
  },
];

const Administrators = () => {
  return (
    <div className="admin-container">
      <h2 className="title">SAHS Administration</h2>
      <div className="admin-grid">
        {administrators.map((admin, index) => (
          <motion.div
            key={index}
            className="admin-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{ boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.5)" }}
          >
            <img src={admin.image} alt={admin.name} className="admin-image" />
            <h3 className="admin-name">{admin.name}</h3>
            <p className="admin-position">{admin.position}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Administrators;
