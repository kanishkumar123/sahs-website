import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import CardSection from "./CardSection";
import WhyChooseSAHS from "./WhyChooseSAHS";
import Footer from "./Footer";
import UGProgrammes from "./pages/UGprograms";
import PGProgrammes from "./pages/PGprograms";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* ✅ HOME PAGE */}
        <Route path="/" element={<Home />} />
        {/* ✅ UG Programs Page */}
        <Route path="/ug-programs" element={<UGProgrammes />} />
        {/* ✅ PG Programs Page */}
        <Route path="/pg-programs" element={<PGProgrammes />} />
      </Routes>
    </Router>
  );
};

// ✅ Move Footer inside Home so it's visible
const Home = () => {
  return (
    <>
      <Hero />
      <CardSection />
      <WhyChooseSAHS />
      <Footer />
    </>
  );
};

export default App;
