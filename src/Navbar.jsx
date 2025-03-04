import React from "react";
import "./Navbar.css";
import logo2 from "./assets/WhatsApp-Image-2024-09-12-at-11.43.13-AM.jpeg";

const Navbar = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <p>📞 8015011156</p>
        <p>✉️ admissions@sahs.ac.in</p>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        {/* Logo on Top */}
        <img src={logo2} alt="VMRF Logo" className="nav-logo" />

        {/* Navigation Links Below */}
        <div className="nav-pop">
          <ul className="nav-links">
            <li>
              <a href="#admissions">Admissions ▼</a>
            </li>
            <li>
              <a href="#academics">Academics ▼</a>
            </li>
            <li>
              <a href="#campus-life">Campus Life ▼</a>
            </li>
            <li>
              <a href="#research">Research ▼</a>
            </li>
            <li>
              <a href="#placement">Placement ▼</a>
            </li>
            <li>
              <a href="#alumni">Alumni ▼</a>
            </li>
            <li>
              <a href="#about">About Us ▼</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
