import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import male from '../assets/male.jpg'
import female from  '../assets/female.jpg'

const testimonials = [
  {
    name: "Zoe",
    role: "Research Associate, Derby, UK",
    text: "Silent Launch will not only edit and format my thesis but also predict its audience reach. Its copyright protection on blockchain will reassure that my work will not be duplicated or misused or claimed. On top of these, I really like the multi-language supported publishing since it will help many users in China, where I graduated from.",
    img: female
  },
  {
    name: "Nina",
    role: "MA Publishing Student, University of Derby, UK",
    text: "The website looks professional and is easy to navigate. I liked that the prices and different options were laid out clearly so I could see what would best suit me.",
    img: female
  },
  {
    name: "Usha",
    role: " Publishing Professional, India",
    text: "The affordable student package with manuscript submission to design and print services available on a single publishing platform will be a great benefit. Also, the customisable add-ons to choose our desired service is very nice, considering the limited budget and individual capabilities to manage production and/or design stages. The predictive marketing analytics would be a great tool to see how my book may perform. If this platform is developed, it will transform publishing from manuscript to either shelf or digital, linked with Amazon and eBay.",
    img: female
  },
  {
    name: "Mrinalini",
    role: "Director, RLogics Solutions, UK",
    text: "The business case proposal to explore the scope of automation in publishing was presented to us by a student at Derby University for developing the SL 4.0 platform powered with AI, Blockchain, Cybersecurity and Cloud-compliant technologies. The MVP was developed by our offshore partner, Vcraftyu Company with technology backed up by RLogics Solutions, UK.",
    img: female
  },
  {
    name: "Karthieswaran",
    role: "Research Associate, De Montfort University, UK",
    text: "With Silent Launch’s genre research tools and blockchain-backed copyright and immutability, I will publish my work with confidence, knowing it will be protected and patented in a secured way. In fact, the reference search and citations based on similarity content would be of good use too.",
    img: male
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
      <h2 className="testimonial-title"> User Testimonials</h2>
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
