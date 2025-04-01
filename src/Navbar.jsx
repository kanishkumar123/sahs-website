import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const navLinkStyle = {
  textDecoration: "none",
  color: "#ffffff",
  fontWeight: 600,
  fontSize: "16px",
  padding: "16px",
  transition: "all 0.3s ease-in-out",
};

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { name: "About Us", submenu: "about" },
    { name: "Admissions", submenu: "admissions" },
    { name: "Academics", submenu: "academics" },
    { name: "Campus Life", submenu: "campus" },
    { name: "Placement", submenu: "" },
    { name: "Alumni", submenu: "" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-links">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="nav-item"
              onMouseEnter={() => setActiveDropdown(item.submenu)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span
                style={{
                  ...navLinkStyle,
                  cursor: item.submenu ? "pointer" : "default", // Only allow pointer cursor if there's a submenu
                }}
              >
                {item.name} {item.submenu ? "▼" : ""}
              </span>

              {/* Dropdowns */}
              {item.submenu === "admissions" && (
                <div
                  className={`mega-dropdown ${
                    activeDropdown === "admissions" ? "show" : ""
                  }`}
                >
                  <div className="mega-column">
                    <h3>🎓 UG ADMISSIONS</h3>
                    <Link to="/admission-procedure">
                      📜 Admission Procedure
                    </Link>
                    <Link to="/ug-programs">📚 Undergraduate Programs</Link>
                    <Link to="/scholarships">💰 Scholarship Scheme</Link>
                    <Link to="/fee-structure?tab=UG">📝 UG Fee Structure</Link>
                  </div>

                  <div className="mega-column">
                    <h3>🎓 PG ADMISSIONS</h3>
                    <Link to="/admission-procedure?tab=PG">
                      📝 PG Admission Procedure
                    </Link>

                    <Link to="/pg-programs">📚 Postgraduate Programs</Link>
                    <Link to="/fee-structure?tab=PG">📝 PG Fee Structure</Link>
                  </div>
                </div>
              )}

              {item.submenu === "academics" && (
                <div
                  className={`mega-dropdown ${
                    activeDropdown === "academics" ? "show" : ""
                  }`}
                >
                  <div className="mega-column">
                    <h3>📚 Programs</h3>
                    <Link to="/ug-pos">🎓 Undergraduate (UG)</Link>
                    <Link to="?tab=PG">🎓 Postgraduate (PG)</Link>
                  </div>
                </div>
              )}

              {item.submenu === "campus" && (
                <div
                  className={`mega-dropdown ${
                    activeDropdown === "campus" ? "show" : ""
                  }`}
                >
                  <div className="mega-column">
                    <h3>🏫 Campus Life</h3>
                    <Link to="/campus-life">🎭 Life at SAHS</Link>
                    <Link to="/fests">🎉 Fests</Link>
                    <Link to="/campus">🏢 Campus</Link>
                    <Link to="/hostel">🏠 Hostel</Link>
                    <Link to="/library">📖 Library</Link>
                  </div>

                  <div className="mega-column">
                    <h3>🏢 Facilities</h3>
                    <Link to="/transport">🚌 Transport</Link>
                    <Link to="/amenities">🏥 Other Amenities</Link>
                    <Link to="/gallery">📸 Gallery</Link>
                  </div>
                </div>
              )}

              {item.submenu === "about" && (
                <div
                  className={`mega-dropdown ${
                    activeDropdown === "about" ? "show" : ""
                  }`}
                >
                  <div className="mega-column">
                    <h3>🏛 About Us</h3>
                    <Link to="/about-sahs">📌 About SAHS</Link>
                    <Link to="/about-vmrf">📌 About VMRF</Link>
                    <Link to="/vision-mission">🌟 Vision & Mission</Link>
                    <Link to="/founder">👤 Founder</Link>
                    <Link to="/chancellor">🎓 Chancellor</Link>
                    <Link to="/administrators">🏛 Administrators</Link>
                    <Link to="/accreditations">
                      📜 Accreditations & Recognitions
                    </Link>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
