import React, { useState } from "react";
import "./newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed with email: " + email);
    setEmail("");
  };

  return (
    <section className="newsletter">
      <div className="container">
        <h2>Subscribe to Our Newsletter</h2>
        <p>
          Stay updated with the latest news, trends, and exclusive offers by
          subscribing to our newsletter.
        </p>
        <div className="newsletter-form">
          <form onSubmit={handleSubscribe}>
            <div className="form-group-news">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="email-news"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
