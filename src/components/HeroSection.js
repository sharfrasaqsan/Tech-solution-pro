// src/components/HeroSection.js
import React from "react";
import "./hero.css";
import AboutUs from "../pages/about";

function HeroSection() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "url(https://cdn.flatworldsolutions.com/IT-services/images/outsource-bespoke-software-development-services.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1>Your Innovative Software Solution</h1>
            <p>
              We are dedicated to delivering high-quality, custom software
              solutions that drive your business forward. Our team of experts
              specializes in creating cutting-edge software tailored to your
              unique needs.
            </p>
            <a href={AboutUs} className="btn btn-info">
              Learn More
            </a>
            <a href="#contact" className="btn btn-outline-info">
              Contact Us
            </a>
          </div>
          <div className="col-lg-6">
            {/* Add an image or illustration here */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
