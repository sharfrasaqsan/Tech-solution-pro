// src/components/Pricing.js
import React from "react";
import "./pricing.css"; // Import custom CSS for Pricing styling

function Pricing() {
  return (
    <section className="pricing">
      <div className="container">
        <h2>Choose Your Plan</h2>
        <div className="pricing-cards">
          {/* Pricing Card 1 */}
          <div className="pricing-card">
            <h3>Basic</h3>
            <p>$19/month</p>
            <ul>
              <li>Access to our core features</li>
              <li>Email support</li>
              <li>Limited data storage</li>
            </ul>
            <button>Select Plan</button>
          </div>

          {/* Pricing Card 2 */}
          <div className="pricing-card">
            <h3>Pro</h3>
            <p>$49/month</p>
            <ul>
              <li>Access to all features</li>
              <li>24/7 premium support</li>
              <li>Increased data storage</li>
            </ul>
            <button>Select Plan</button>
          </div>

          {/* Pricing Card 3 */}
          <div className="pricing-card">
            <h3>Premium</h3>
            <p>$99/month</p>
            <ul>
              <li>Access to all features</li>
              <li>Priority support</li>
              <li>Unlimited data storage</li>
            </ul>
            <button>Select Plan</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
