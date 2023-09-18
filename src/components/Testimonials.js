// src/components/Testimonials.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.css"; // Create a custom CSS file for testimonial styling

const testimonialsData = [
  {
    name: "John Doe",
    title: "CEO",
    company: "ABC Company",
    text: "We've been working with YourCompany for several years, and their expertise in software development has been instrumental in our success. Their team consistently delivers high-quality solutions on time and within budget.",
  },
  {
    name: "Jane Smith",
    title: "Marketing Manager",
    company: "XYZ Corp",
    text: "YourCompany has been a valuable partner for our marketing initiatives. Their innovative approach and commitment to results have helped us achieve significant growth in our online presence.",
  },
  {
    name: "David Johnson",
    title: "CTO",
    company: "Tech Innovators",
    text: "We rely on YourCompany for our technical needs, and they have never disappointed. Their dedication to understanding our unique challenges and delivering tailored solutions sets them apart.",
  },
  {
    name: "Sarah Williams",
    title: "Designer",
    company: "Creative Designs",
    text: "The design expertise of YourCompany is unmatched. They bring creativity and user-centered design principles to every project, resulting in beautiful and functional solutions.",
  },
  {
    name: "Michael Brown",
    title: "Manager",
    company: "Global Solutions",
    text: "We value the partnership we have with YourCompany. Their commitment to customer satisfaction and their ability to adapt to changing requirements make them an ideal choice for any organization.",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <ul>
        {dots.map((dot, index) => (
          <li key={index}>{dot}</li>
        ))}
      </ul>
    ),
  };

  return (
    <section className="testimonials">
      <div className="container-test">
        <h2>What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-title">{testimonial.title}</p>
                <p className="testimonial-company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
