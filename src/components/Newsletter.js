// src/components/Newsletter.js
import React from "react";
import "./newsletter.css"; // Import custom CSS for Newsletter section styling

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container">
        <h2>Subscribe to Our Newsletter</h2>
        <p>
          Stay updated with the latest news, trends, and exclusive offers by
          subscribing to our newsletter.
        </p>
        <div className="newsletter-form">
          <form>
            <div className="form-group-news">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="email-news"
                required
              />
              <button type="submit">Subscribe</button>
            </div>
            <p className="subscription-info">
              Don't worry, we respect your privacy and won't spam your inbox.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
