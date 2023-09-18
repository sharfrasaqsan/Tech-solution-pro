// src/components/Footer.js
import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
            <p>Your Partner in Innovation</p>
          </div>
          <div className="footer-contact">
            <h2>Contact Us</h2>
            <p>
              Whether you have questions, feedback, or exciting project ideas,
              don't hesitate to get in touch. Our dedicated team is here to
              assist you.
            </p>
            <p>
              <strong>Email:</strong> info@yourlogo.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p>
              <strong>Address:</strong> 123 Main Street, Cityville, ST 12345
            </p>
          </div>
          <div className="footer-social">
            <h2>Follow Us</h2>
            <p>Stay connected with us on social media for updates:</p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/YourLogo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/YourLogo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/YourLogo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/YourLogo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Tech Solution Pro. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
