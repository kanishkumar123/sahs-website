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
import AboutSahs from "./pages/AboutSahs";
import AboutVmrf from "./pages/AboutVmrf";
import FeeStructure from "./pages/FeeStructure";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./Header";
import AdmissionProcedure from "./pages/AdmissionProcedure";
import { MantineProvider } from "@mantine/core";
import CourseDetailsPage from "./pages/CourseDetails";

// ✅ Home page with Header and Navbar
const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <CardSection />
      <WhyChooseSAHS />
      <Footer />
    </>
  );
};

// Other pages with only Navbar
const OtherPages = () => {
  return (
    <>
      <Navbar />
      {/* <Footer /> */}
    </>
  );
};

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {" "}
      {/* Add MantineProvider */}
      <Router basename="/sahs-website">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/ug-programs"
            element={
              <>
                <OtherPages />
                <UGProgrammes />
              </>
            }
          />
          <Route
            path="/pg-programs"
            element={
              <>
                <OtherPages />
                <PGProgrammes />
              </>
            }
          />
          <Route
            path="/about-sahs"
            element={
              <>
                <OtherPages />
                <AboutSahs />
              </>
            }
          />
          <Route
            path="/about-vmrf"
            element={
              <>
                <OtherPages />
                <AboutVmrf />
              </>
            }
          />
          <Route
            path="/fee-structure"
            element={
              <>
                <OtherPages />
                <FeeStructure />
              </>
            }
          />
          <Route
            path="/admission-procedure"
            element={
              <>
                <OtherPages />
                <AdmissionProcedure />
              </>
            }
          />
          <Route
            path="/ug-pos"
            element={
              <>
                <OtherPages />
                <CourseDetailsPage />
              </>
            }
          />
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </MantineProvider>
  );
};

export default App;
