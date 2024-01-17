// src/App.js
import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Hobbies from "./components/Hobbies";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const Homes = () => {
  return (
    <div>
      <Header />
      <Header />
      <Header />
    </div>
  );
};

const Apps = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Header />
        <Header />
        <Header />
        <Main />
        <Routes>
          <Route path="/home" element={<Homes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Apps;
