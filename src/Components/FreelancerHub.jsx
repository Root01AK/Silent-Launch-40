import React from "react";


const roles = [
    { id: 1, title: "Research Support"},
    { id: 2, title: "Project Manager"},
    { id: 3, title: "Editorial Assistant"},
    { id: 4, title: "Content Writer"},
    { id: 5, title: "Quality Analyst"},
    { id: 5, title: "Graphic Designer"},
    { id: 5, title: "Print Specialist"},
    { id: 5, title: "Digital Marketing"},
];

export default function FreelancerHub() {
    return (
        <div className="hub-container">
            {/* Header */}
            <div className="hub-header">
                <h1>Freelancer Hub</h1>
                <p>Find skilled professionals or apply as a freelancer.</p>
            </div>

            {/* Roles */}
            <div className="roles-grid">
                {roles.map((role) => (
                    <div key={role.id} className="role-card">
                        <h2>{role.title}</h2>
                        <p>{role.desc}</p>
                        <div className="btn-group">
                            <button className="apply-btn">Apply</button>
                            <button className="hire-btn">Hire</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="Note-hub">
                <p><span>Note : </span>“Apply” is only for existing and graduated students, including research scholars of University of Derby. However, other external users can also apply based on student referrals or having expertise in the publishing field. </p>
                </div>
        </div>
    );
}
