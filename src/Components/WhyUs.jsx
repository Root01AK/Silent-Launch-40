import React from "react";

import { FaRocket, FaShieldAlt, FaHeadset, FaSmile } from "react-icons/fa";

const features = [
    {
        icon: <FaRocket />,
        title: "Author & Manuscript Protection",    
        description: "Through the adoption of blockchain technology, a decentralized ID is created to prevent duplication and protect against copyright infringement"
    },
    {   
        icon: <FaShieldAlt />,
        title: "Student-Friendly Publishing Packages",
        description: "A 20% discount is offered exclusively to university students, with no VAT, covering Basic, Pro, Elite, and ad-hoc selective publishing services"
    },
    {
        icon: <FaHeadset />,
        title: "AI-powered Design tools",
        description: "AI-driven templates and design options enable the creation of stunning book covers, as well as instant illustrations and graphics"
    },
    {
        icon: <FaSmile />,
        title: "Marketing and Audience Targeting",
        description: "Predictive data analytics and machine learning technology provide tools and insights that enable authors to promote their work efficiently, even without a dedicated marketing team"
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
