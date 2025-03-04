import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import "./App.css";
import CardSection from "./CardSection";
import Footer from "./Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import WhyChooseSAHS from "./WhyChooseSAHS";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardSection />
      <WhyChooseSAHS />
      <Footer />
    </div>
  );
};

export default App;
