// src/components/Services.js
import React from "react";
import "./services.css"; // Import custom CSS for Services styling
import {
  FaDesktop,
  FaMobileAlt,
  FaCloud,
  FaCode,
  FaChartBar,
  FaCogs, // Import the new icon
} from "react-icons/fa";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="row">
          <div className="col-lg-4 service-box">
            <div className="service-item">
              <FaDesktop className="service-icon" />
              <h3>Custom Software Development</h3>
              <p>
                We create tailored software solutions to address your specific
                business needs. Our team of experts will bring your ideas to
                life.
              </p>
            </div>
          </div>
          <div className="col-lg-4 service-box">
            <div className="service-item">
              <FaMobileAlt className="service-icon" />
              <h3>Mobile App Development</h3>
              <p>
                Build user-friendly mobile apps for iOS and Android platforms.
                We design and develop mobile solutions that engage your
                audience.
              </p>
            </div>
          </div>
          <div className="col-lg-4 service-box">
            <div className="service-item">
              <FaCloud className="service-icon" />
              <h3>Cloud Solutions</h3>
              <p>
                Harness the power of the cloud for scalable and flexible
                operations. Our cloud services optimize your infrastructure and
                performance.
              </p>
            </div>
          </div>
          <div className="col-lg-4 service-box">
            <div className="service-item">
              <FaCode className="service-icon" />
              <h3>Web Development</h3>
              <p>
                We create responsive and feature-rich websites that deliver
                seamless user experiences. Our web solutions drive online
                success.
              </p>
            </div>
          </div>
          <div className="col-lg-4 service-box">
            <div className="service-item">
              <FaChartBar className="service-icon" />
              <h3>Data Analytics</h3>
              <p>
                Unlock the potential of your data with our data analytics
                services. Gain valuable insights and make data-driven decisions.
              </p>
            </div>
          </div>
          {/* Add the new service */}
          <div className="col-lg-4 service-box">
            <div className="service-item">
              <FaCogs className="service-icon" /> {/* Use the new icon */}
              <h3>Technical Support</h3> {/* Update the service title */}
              <p>
                We provide reliable technical support to ensure your systems run
                smoothly. Our team is here to assist you 24/7.
              </p>
            </div>
          </div>
          {/* End of new service */}
        </div>
      </div>
    </section>
  );
}

export default Services;
