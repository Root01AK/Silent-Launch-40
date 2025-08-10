import React, { useState } from "react";


const faqData = [
  {
    question: "What is SL 4.0?",
    answer: "Silent Launch 4.0, leverages automation, blockchain, and cybersecurity to streamline and secure publishing workflows. MVP developed by Vcraftyu Company with automation powered by R-Logics Solutions, UK, is a cloud-based, AI-driven academic publishing platform."
  },
  {
    question: "Who is SL 4.0 designed for?",
    answer: "It's tailored for students, researchers, and independent authors seeking cost-effective, credible publishing solutions aligned with academic standards. "
  },
  {
    question: "How does SL 4.0 automate the publishing process?",
    answer: "The platform employs AI tools for grammar correction, citation validation, academic tone refinement, metadata tagging, and automated formatting, enhancing efficiency and consistency."
  },
  {
    question: "Is SL 4.0 secure and GDPR compliant?",
    answer: "Yes, developed with cybersecurity best practices and blockchain technology, it ensures robust data protection, GDPR compliance, and transparent IP management."
  },
    {
    question: "How does blockchain technology benefit authors?",
    answer: "Blockchain technology ensures timestamped authorship verification, transparent licensing, IP protection, and secure collaborative version control. "
    },
      {
    question: "What publishing models does SL 4.0 offer?",
    answer: "It offers Basic-to-Elite publishing packages, with 20% discount for students with additional features at each level, including optional human editorial support."
      },
        {
    question: "Can SL 4.0 integrate with institutional systems?",
    answer: "Yes, the cloud-based architecture enables easy integration with academic repositories, institutional platforms, and supports institutional branding and real-time collaboration."
        },
              {
    question: " When will SL 4.0 be available?",
    answer: "Beta testing is scheduled for Autumn 2025, following a 3-month development cycle of benchmarking, system architecture, technology integration, and refinement."
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question}
              <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
