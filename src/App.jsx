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
import CourseDetailsPage from "./pages/CourseDetails";
import Founder from "./pages/Founder";
import ChancellorProfile from "./pages/Chancellor";
import Scholarships from "./pages/Scholarships";
import Administrators from "./pages/Administrators";
import Accreditations from "./pages/Accreditations";
import VisionMission from "./pages/VisionMission";
import { MantineProvider } from "@mantine/core"; // Import MantineProvider


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
          <Route
            path="/founder"
            element={
              <>
                <OtherPages />
                <Founder />
              </>
            }
          />
          <Route
            path="/chancellor"
            element={
              <>
                <OtherPages />
                <ChancellorProfile />
              </>
            }
          />
          <Route
            path="/vision-mission"
            element={
              <>
                <OtherPages />
                <VisionMission />
              </>
            }
          />
          <Route
            path="/scholarships"
            element={
              <>
                <OtherPages />
                <Scholarships />
              </>
            }
          />
          <Route
            path="/administrators"
            element={
              <>
                <OtherPages />
                <Administrators />
              </>
            }
          />
          <Route
            path="/accreditations"
            element={
              <>
                <OtherPages />
                <Accreditations />
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
