import React, { useState } from "react";

const Support = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const features = [
        {
            title: "AI-powered Search Engine",
            type: "search", // special type for dummy search
            description: "Find content instantly with AI precision."
        },
        {
            title: "Duplication Checks",
            description: "Detect and prevent duplicate entries in your projects."
        },
        // {
        //   title: "Real-time Notifications",
        //   description: "Get alerts for important updates instantly."
        // },
        // {
        //   title: "Integrated Chat Support",
        //   description: "Connect with our support team in real-time."
        // },
        // {
        //   title: "API / Plug-in Additions",
        //   description: "Integrate third-party tools with ease."
        // },
        {
            title: "Design & Illustration Support",
            description: "Create stunning visuals for your documents."
        },
        // {
        //   title: "Reference Management",
        //   description: "Organize and track references efficiently."
        // },
        // {
        //   title: "Built-in Scalability",
        //   description: "Easily grow your system with future needs."
        // },
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
