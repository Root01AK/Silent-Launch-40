import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Praveen Menon",
    role: "CTO, Monakin Services Pvt. Ltd",
    text: "This publishing house has become my go-to source for cutting-edge insights in AI, blockchain, and cybersecurity. Their research-backed articles don’t just report trends—they predict them. Every publication feels like a roadmap for the future of tech.",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Ananya Sharma",
    role: "VP, Digital Strategy, SecureNet Solutions",
    text: "In a world overflowing with tech buzzwords, their publications stand out for their clarity and depth. The way they break down complex AI algorithms, blockchain protocols, and security frameworks makes them indispensable for our team’s learning and strategy sessions.",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Priya Nair",
    role: "Founder & CEO, ChainAI Technologies",
    text: "Their work bridges the gap between academic research and real-world application. Whether it’s AI ethics, blockchain adoption, or the latest in cybersecurity defense, they consistently deliver content that is both credible and actionable.",
    img: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    name: " Dr. Vivek Kumar",
    role: "Professor of Computer Science, IIT Delhi",
    text: "As a founder in the AI space, I’ve relied heavily on their publications to stay ahead. They don’t just publish content—they shape conversations in the tech world.",
    img: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    name: "Alex Mathews",
    role: "Cybersecurity Analyst, CyberShield Global",
    text: "Cybersecurity is evolving faster than ever, and this publishing company ensures I never miss a critical update. Their combination of deep technical analysis and business impact reporting is unmatched",
    img: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="testimonial-wrapper">
      <h2 className="testimonial-title">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-slide">
            <div className="testimonial-card">
              <img src={t.img} alt={t.name} className="testimonial-img" />
              <p className="testimonial-text">"{t.text}"</p>
              <h4 className="testimonial-name">{t.name}</h4>
              <small className="testimonial-role">{t.role}</small>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
