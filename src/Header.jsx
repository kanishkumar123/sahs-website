import React from "react";
import logo2 from "./assets/WhatsApp-Image-2024-09-12-at-11.43.13-AM.jpeg";
import logo3 from "./assets/ahs LOGO With V.png";
import "./Navbar.css";

const Header = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <p>📞 123456789</p>
        <p>✉️ admissions@sahs.ac.in</p>
      </div>

      {/* Glass Container for Logos */}
      <div className="glass-container">
        <div className="logo-container">
          <img src={logo2} alt="AVIT Logo" className="nav-logo" />
          <img src={logo3} alt="AHS Logo" className="nav-logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
