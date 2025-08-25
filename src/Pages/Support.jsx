import React, { useState } from "react";

const Support = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const features = [
        {
            title: "AI-powered Search Engine",
            type: "search", // special type for dummy search
            description: "Find content instantly with AI precision"
        },
        {
            title: "Duplication Checks",
            description: "Detect and prevent duplicate entries in your projects"
        },
        {
            title: "Design & Illustration Support",
            description: "Create stunning visuals for your documents"
        },
        {
            title: "XML Creation/Metadata Tagging",
            description: "Make publication easier in different formats"
        },
        {
            title: "Manuscript Service",
            description: "Provide end-to-end support with publication-readiness"
        },
        {
            title: "Cover Design & Print Services",
            description: "Create stunning book covers with print-ready editions"
        },
        {
            title: "Citations & Referencing",
            description: "Provide more accurate data for scholarly writing"
        },
        {
            title: "Patent Search & Filing Services",
            description: "Guide researchers in protecting your innovative findings"
        },
        {
            title: "Translation Services",
            description: "Enabling research dissemination across multiple languages"
        },
        {
            title: "Copyrights, Licensing & ISBN Registration",
            description: "Secure academic works with legal rights and global identifiers"
        },
        {
            title: "Marketing & Distribution channels",
            description: "Promote and distribute your work with wider market presence"
        },
        {
            title: "Predictive Analytics",
            description: "Apply data analysis to anticipate readership and research impact"
        },

    ];

    const supportOptions = [
        "Have Concept",
        "Entire Doc is Ready",
        "Other"
    ];

    return (
        <div className="dashboard">
            <h1 className="dashboard-title">Dashboard, Welcome User 👋</h1>

            {/* Support Section */}
            <div className="support-box">
                <h2>What Support do you need?</h2>
                <div className="support-options">
                    {supportOptions.map((option, i) => (
                        <label key={i} className="radio-button">
                            <input type="radio" name="support" value={option} /> {option}
                        </label>
                    ))}
                </div>
                <div className="support-next-btn">
                    <a href="/file" className="next-link">Next</a>
                </div>
            </div>

            {/* Feature Grid */}
            <div className="feature-grid">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <h3>{feature.title}</h3>
                        {feature.type === "search" ? (
                            <div className="dummy-search">
                                <input
                                    type="text"
                                    placeholder="Type to search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button>Search</button>
                            </div>
                        ) : (
                            <p>{feature.description}</p>
                        )}
                        {feature.type !== "search" && (
                            <button className="feature-btn">WIP</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Support;
