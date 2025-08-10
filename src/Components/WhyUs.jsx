import React from "react";

import { FaRocket, FaShieldAlt, FaHeadset, FaSmile } from "react-icons/fa";

const features = [
    {
        icon: <FaRocket />,
        title: "Author & Manuscript Protection",    
        description: "Through adoption of Blockchain technology, decentralized ID is created to avoid duplication and protect copyright infringement."
    },
    {   
        icon: <FaShieldAlt />,
        title: "Student-Friendly Publishing Packages",
        description: "20% discount offered exclusively for university students without any VAT, including Basic, Pro, Elite and ad-hoc selective publishing service(s). "
    },
    {
        icon: <FaHeadset />,
        title: "AI-powered Design tools",
        description: "AI-driven templates and design options to create stunning book covers and instant illustrations or graphics."
    },
    {
        icon: <FaSmile />,
        title: "Marketing and Audience Targeting",
        description: "Predictive Data Analytics and Machine Learning Technology provides tools and insights that allow authors to promote their work efficiently, even without a dedicated marketing team."
    }
];

const WhyChooseUs = () => {
    return (
        <div className="choose-container">
            <h2 className="choose-title">What makes us unique</h2>
            <div className="choose-grid">
                {features.map((item, index) => (
                    <div className="choose-card" key={index}>
                        <div className="choose-icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
