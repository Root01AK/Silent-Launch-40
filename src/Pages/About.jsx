import React from "react";
import Faqs from "../Components/Faqs";
import WhyChooseUs from "../Components/WhyUs";
import publisg3 from '../assets/publisg3.jpg';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-section-main">
        <div className="about-left">
          <img src={publisg3} alt="" />
        </div>
        <div className="about-right">
          <h1>About SL 4.0</h1>
          <p className="sliced-content">
          Silent Launch 4.0 is a cloud-based academic publishing platform developed in partnership with  R-Logics Solutions, a UK leader in AI, cloud computing, cybersecurity, and blockchain. Designed as a Minimum Viable Product (MVP) for University of Derby students, it connects seamlessly across Derby institutions, fostering collaboration and widening publishing opportunities. The platform integrates advanced AI tools for grammar correction, citation validation, metadata tagging, and academic tone refinement, alongside blockchain for secure intellectual property management and authorship verification.
          </p>
          <p>
          Unlike traditional UK academic presses, Silent Launch 4.0 offers a modular, automation-driven approach that keeps quality high while reducing costs by around 60%, making it far more affordable for students. Its multi-channel distribution covers institutional repositories, open-access platforms, and commercial outlets, increasing research reach. With GDPR-compliant cybersecurity developed by Vcraftyu Company and R-Logics, the system ensures data protection while scaling efficiently across the University of Derby network—delivering affordability, accessibility, and academic credibility in one platform.
          </p>
        </div>
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div id="faqs">
        <Faqs />
      </div>
    </div>
  );
}
