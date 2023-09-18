// src/components/AboutUs.js
import React from "react";
import "./aboutus.css"; // Import custom CSS for AboutUs styling

function AboutUs() {
  return (
    <section className="about-us">
      <div className="container">
        <div className="row align-items-center">
          {" "}
          {/* Add align-items-center class */}
          <div className="col-lg-6">
            <h2>About Tech Solution Pro</h2>
            <p>
              Welcome to Tech Solution Pro, where innovation meets excellence.
              We are a passionate team of software engineers and developers
              dedicated to transforming businesses through technology.
              <br />
              <br />
              Our journey began in 2005, and since then, we have been on a
              mission to provide top-notch software solutions that empower
              businesses to thrive in the digital age. With a focus on
              innovation, quality, and customer satisfaction, Tech Solution Pro
              has built a strong reputation in the industry.
              <br />
              <br />
              At Tech Solution Pro, we offer a wide range of services, from
              custom software development and web applications to mobile app
              development and IT consulting. We work closely with our clients to
              understand their unique needs and deliver tailored solutions that
              drive growth and success.
              <br />
              <br />
              Our team consists of highly skilled professionals with expertise
              in various technologies and industries. We take pride in our
              ability to tackle complex challenges and turn ideas into reality.
            </p>
          </div>
          <div className="col-lg-6 image-site">
            <img
              src="https://multi-techno.com/wp-content/uploads/2022/03/LOOKING-FOR-THE-BEST-SOFTWARE-SOLUTIONS-COMPANY.png"
              alt="About Us"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
