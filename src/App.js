// src/App.js
import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/Aboutus";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutUs />
    </div>
  );
}

export default App;
