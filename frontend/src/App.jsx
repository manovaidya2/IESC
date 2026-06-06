import React from "react";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Certificate from "./pages/Certificate";
import Assessment from "./pages/Assessment";
import Standard from "./pages/Standard";
import Resources from "./pages/Resource";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/certifications" element={<Certificate />} />
        <Route path="/assessments" element={<Assessment />} />
        <Route path="/standards" element={<Standard />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
