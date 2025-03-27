import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-heading">
          <span>VMRF - Variyar Test 2025-26</span>
        </h2>
        <p className="footer-subheading">
          <em>Ignite Your Ambition with our SCHOLARSHIP TEST!</em>
        </p>
        <button className="admission-button">Admission Open 2025-26 →</button>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h3>🏛 VMKV Medical College</h3>
          <p>📞 8015011156</p>
          <p style={{ color: "#0D1B2A" }}>.</p>
          <p style={{ color: "#0D1B2A" }}>.</p>
          <p>📧 admissions@sahs.ac.in</p>
          <p style={{ color: "#0D1B2A" }}>.</p>
          <p style={{ color: "#0D1B2A" }}>.</p>
          <p>📍 Chinna Seeragapadi, Salem – 636 308, Tamil Nadu, India</p>
        </div>

        <div className="footer-section">
          <h3>🔗 QUICK LINKS</h3>
          <ul>
            <li>📌 Campus Life</li>
            <li>📌 Placements</li>
            <li>📌 Examination Calendar</li>
            <li>📌 Graduation Day</li>
            <li>📌 SC / ST Cell</li>
            <li>📌 BoM Authorities</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>🛠 HELP & SUPPORT</h3>
          <ul>
            <li>🔑 Student / Parent Login</li>
            <li>🔑 Faculty Login</li>
            <li>✉️ Feedback</li>
            <li>🚫 Anti-ragging Committee</li>
            <li>⚖️ Grievance Redressal Committee</li>
            <li>📢 Internal Complaints Committee</li>
            <li>🏢 Institution Industry Cell</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>📚 MEDIA & RESOURCES</h3>
          <ul>
            <li>📸 sahs @ Media</li>
            <li>📝 Blogs</li>
            <li>📜 Policies</li>
            <li>🏆 Awards</li>
            <li>📄 RCI Mandatory Disclosure</li>
            <li>📜 Certificates & Verification</li>
            <li>📕 Code of Conduct</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyrights © 2025 sahs. All rights reserved.</p>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-x-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
