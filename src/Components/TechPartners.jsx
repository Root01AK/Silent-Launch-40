import React from "react";
import Vcraftyu from '../assets/vcraftyu.png'
import Rlogics from '../assets/rlogics.webp'

const partners = [
    {
        logo: Rlogics,
        alt: "Partner 1",
    },
    {
        logo: Vcraftyu,
        alt: "Partner 2",
    },
];

const TechPartners = () => {
    return (
        <>
            <h2 className="partners-title">Our Tech Partners</h2>
        <section className="tech-partners">
            <div className="partners-bar">
                {partners.map((partner, index) => (
                    <div className="partner-card" key={index}>
                        <img src={partner.logo} alt={partner.alt} />
                        <p>{partner.desc}</p>
                    </div>
                ))}
            </div>
        </section>
        </>
    );
};

export default TechPartners;
