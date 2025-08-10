

import React from "react";
import Orb from "../Components/orb";
import WhyChooseUs from "../Components/WhyUs";
import About from "../Components/About";
import Testimonials from "../Components/Testimonials";
import Guidebook from "../Components/Guidebook";

const Home = () => {
  return (
    <div className="home-container">
      <div className="orb-section">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={41}
          forceHoverState={false}
        />
        <h1 className="welcome-text">Welcome to Silent Launch 4.0</h1>
        <p className="welccome-text">Smart publishing platform that guides students and authors through a streamlined, AI-powered publishing journey.</p>
        <a className="request-demo" href="/contact">Request Demo</a>
      </div>
      <About />
      <WhyChooseUs />
      <Testimonials />
      <Guidebook />
    </div>
  );
};

export default Home;