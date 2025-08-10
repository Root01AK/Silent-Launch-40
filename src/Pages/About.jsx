import React from "react";
import Faqs from "../Components/Faqs";
import WhyChooseUs from "../Components/WhyUs";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-section-main">
        <div className="about-left">
          <img src="/src/assets/about-us.avif" alt="" />
        </div>
        <div className="about-right">
          <h1>About SL 4.0</h1>
          <p className="sliced-content">
            Silent Launch 4.0 is a pioneering cloud-based academic publishing
            platform developed in strategic partnership with R-Logics Solutions,
            a UK-based leader in artificial intelligence, cloud computing,
            cybersecurity, and blockchain technologies. Specifically crafted as
            a Minimum Viable Product (MVP) for University of Derby students, the
            platform connects seamlessly with other Derby institutions,
            fostering a collaborative publishing ecosystem that uniquely
            benefits students across various disciplines.
          </p>
          <p>
            The Silent Launch platform distinctly sets itself apart from
            existing UK academic publishing systems by extensively integrating
            automation and emerging technologies. Leveraging advanced AI, the
            platform automates grammar correction, citation validation, metadata
            tagging, and academic tone refinement, significantly enhancing
            efficiency compared to traditional academic presses or
            self-publishing platforms. Furthermore, its blockchain capabilities
            ensure secure, transparent management of intellectual property
            rights, authorship verification, and version control.
          </p>
          <p>
            Unlike other academic publishing services typically used by UK
            universities, Silent Launch provides a modular, cost-effective
            solution specifically designed for student affordability, reducing
            costs by approximately 60% compared to traditional avenues. The MVP
            strategically combines automation with optional human editorial
            oversight, ensuring both accessibility and high academic standards.
          </p>
          <p>
            Silent Launch’s cloud-based infrastructure supports multi-channel
            distribution through institutional repositories, open-access
            platforms, and commercial networks, thereby maximising research
            visibility. The robust, GDPR-compliant cybersecurity framework
            developed by Vcraftyu Company and R-Logics guarantees data protection and supports
            seamless integration within university systems, significantly
            enhancing usability and scalability across the University of Derby
            and associated institutions.
          </p>
          <p>
            In summary, Silent Launch 4.0 offers a technologically advanced,
            institutionally integrated publishing solution uniquely tailored to
            empower University of Derby students, delivering enhanced academic
            visibility, credibility, and career development opportunities.
          </p>
        </div>
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <Faqs />
      </div>
    </div>
  );
}
