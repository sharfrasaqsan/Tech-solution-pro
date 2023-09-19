// src/components/AboutUs.js
import React from "react";
import Navbar from "../components/Navbar"; // Import your Navbar component
import Footer from "../components/Footer"; // Import your Footer component
import "./about.css"; // Create a custom CSS file for styling

function AboutUs() {
  return (
    <div className="about-us-page">
      <Navbar />
      <div className="about-us-content">
        <div className="container-about">
          <h1 className="heading-about">About Us</h1>
          <p className="paragraph-about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          {/* Add more content about your company here */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
