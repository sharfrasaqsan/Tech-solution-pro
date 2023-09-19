// src/components/Pricing.js
import React from "react";
import "./pricing.css"; // Import custom CSS for Pricing styling
import { FaCheck, FaTimes } from "react-icons/fa"; // Import Font Awesome icons

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2>Choose Your Plan</h2>
        <div className="pricing-cards">
          {/* Pricing Card 1 */}
          <div className="pricing-card">
            <h3>Starter</h3>
            <p className="price">
              <span className="dollar-sign">$</span>59/month
            </p>
            <ul>
              <li>
                <FaCheck className="icon" /> Custom Software Development
              </li>
              <li>
                <FaCheck className="icon" /> Mobile App Development
              </li>
              <li>
                <FaCheck className="icon" /> Web Development
              </li>
              <li>
                <FaCheck className="icon" /> Cloud Solutions
              </li>
              <li>
                <FaCheck className="icon" /> Basic Data Analytics
              </li>
              <li>
                <FaCheck className="icon" /> UI/UX Design
              </li>
              <li>
                <FaCheck className="icon" /> Testing & QA
              </li>
              <li>
                <FaTimes className="icon not-available" /> Technical Support
              </li>
              <li>
                <FaTimes className="icon not-available" /> Priority Support
              </li>
              <li>
                <FaTimes className="icon not-available" /> Unlimited data
                storage
              </li>
              <li>
                <FaTimes className="icon not-available" /> Dedicated Account
                Manager
              </li>
              <li>
                <FaTimes className="icon not-available" /> Monthly Progress
                Reports
              </li>
              <li>
                <FaTimes className="icon not-available" /> SEO Optimization
              </li>
              <li>
                <FaTimes className="icon not-available" /> Monthly Strategy
                Sessions
              </li>
            </ul>
            <button>Select Plan</button>
          </div>

          {/* Pricing Card 2 */}
          <div className="pricing-card">
            <h3>Pro</h3>
            <p className="price">
              <span className="dollar-sign">$</span>99/month
            </p>
            <ul>
              <li>
                <FaCheck className="icon" /> Custom Software Development
              </li>
              <li>
                <FaCheck className="icon" /> Mobile App Development
              </li>
              <li>
                <FaCheck className="icon" /> Web Development
              </li>
              <li>
                <FaCheck className="icon" /> Cloud Solutions
              </li>
              <li>
                <FaCheck className="icon" /> Advanced Data Analytics
              </li>
              <li>
                <FaCheck className="icon" /> UI/UX Design
              </li>
              <li>
                <FaCheck className="icon" /> Testing & QA
              </li>
              <li>
                <FaCheck className="icon" /> Technical Support
              </li>
              <li>
                <FaCheck className="icon" /> Priority Support
              </li>
              <li>
                <FaCheck className="icon" /> Unlimited data storage
              </li>
              <li>
                <FaTimes className="icon not-available" /> Dedicated Account
                Manager
              </li>
              <li>
                <FaTimes className="icon not-available" /> Monthly Progress
                Reports
              </li>
              <li>
                <FaTimes className="icon not-available" /> SEO Optimization
              </li>
              <li>
                <FaTimes className="icon not-available" /> Monthly Strategy
                Sessions
              </li>
            </ul>
            <button>Select Plan</button>
          </div>

          {/* Pricing Card 3 */}
          <div className="pricing-card">
            <h3>Premium</h3>
            <p className="price">
              <span className="dollar-sign">$</span>159/month
            </p>
            <ul>
              <li>
                <FaCheck className="icon" /> Custom Software Development
              </li>
              <li>
                <FaCheck className="icon" /> Mobile App Development
              </li>
              <li>
                <FaCheck className="icon" /> Web Development
              </li>
              <li>
                <FaCheck className="icon" /> Cloud Solutions
              </li>
              <li>
                <FaCheck className="icon" /> Advanced Data Analytics
              </li>
              <li>
                <FaCheck className="icon" /> UI/UX Design
              </li>
              <li>
                <FaCheck className="icon" /> Testing & QA
              </li>
              <li>
                <FaCheck className="icon" /> Technical Support
              </li>
              <li>
                <FaCheck className="icon" /> Priority Support
              </li>
              <li>
                <FaCheck className="icon" /> Unlimited data storage
              </li>
              <li>
                <FaCheck className="icon" /> Dedicated Account Manager
              </li>
              <li>
                <FaCheck className="icon" /> Weekly Progress Reports
              </li>
              <li>
                <FaCheck className="icon" /> SEO Optimization
              </li>
              <li>
                <FaCheck className="icon" /> Monthly Strategy Sessions
              </li>
            </ul>
            <button>Select Plan</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
