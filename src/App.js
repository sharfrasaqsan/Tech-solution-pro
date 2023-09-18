// src/App.js
import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/Aboutus";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Blog />
      <Pricing />
    </div>
  );
}

export default App;
