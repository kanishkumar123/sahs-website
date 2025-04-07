import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "./assets/WhatsApp-Image-2024-09-12-at-11.43.13-AM.jpeg";
import logo3 from "./assets/ahs LOGO With V.png";
import "./HeaderNavbar.css";

const HeaderNavbar = () => {
  const [showTop, setShowTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowTop(false); // scrolling down
      } else if (currentScrollY < lastScrollY) {
        setShowTop(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { name: "About Us", submenu: "about" },
    { name: "Admissions", submenu: "admissions" },
    { name: "Academics", submenu: "academics" },
    { name: "Campus Life", submenu: "campus" },
    { name: "Placement", submenu: "" },
    { name: "Alumni", submenu: "" },
  ];

  return (
    <>
      {/* Top Header */}
      <div className={`top-header-wrapper ${showTop ? "show" : "hide"}`}>
        <div className="top-bar">
          <p>📞 123456789</p>

          <div className="marquee-wrapper">
            <div className="marquee-text">
              <span>📢 Admissions Open 2025–2026! Apply Now 🔗</span>
              <span>📢 Admissions Open 2025–2026! Apply Now 🔗</span>
            </div>
          </div>

          <p>✉️ admissions@sahs.ac.in</p>
        </div>

        <div className="glass-container">
          <Link to="/">
            <div className="logo-container">
              <img src={logo2} alt="AVIT Logo" className="nav-logo" />
              <img src={logo3} alt="AHS Logo" className="nav-logo" />
            </div>
          </Link>
        </div>
      </div>

      {/* Enquire Now Button */}
      <a
        href="https://crm.vinayakamission.com/leadcollectionform/sahsslmon"
        target="_blank"
        rel="noopener noreferrer"
        className="enquire-now-btn"
      >
        Enquire Now!
      </a>

      {/* Sticky Navbar */}
      <div className="navbar-sticky-wrapper">
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
                    className={`nav-link-text ${
                      item.submenu ? "has-dropdown" : ""
                    }`}
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
                          📜 UG Admission Procedure
                        </Link>
                        <Link to="/ug-programs">📚 Undergraduate Programs</Link>
                        <Link to="/fee-structure?tab=UG">
                          📝 UG Fee Structure
                        </Link>
                        <Link to="/scholarships">💰 Scholarship Scheme</Link>
                      </div>
                      <div className="mega-column">
                        <h3>🎓 PG ADMISSIONS</h3>
                        <Link to="/admission-procedure?tab=PG">
                          📝 PG Admission Procedure
                        </Link>
                        <Link to="/pg-programs">📚 Postgraduate Programs</Link>
                        <Link to="/fee-structure?tab=PG">
                          📝 PG Fee Structure
                        </Link>
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
                        <Link to="/ug-pos?tab=PG">🎓 Postgraduate (PG)</Link>
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
      </div>
    </>
  );
};

export default HeaderNavbar;
