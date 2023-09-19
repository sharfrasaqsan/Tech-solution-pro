import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/Aboutus";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Blog />
      <Pricing />
      <Testimonials />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
