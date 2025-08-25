

import React from "react";
import Orb from "../Components/orb";
import WhyChooseUs from "../Components/WhyUs";
import About from "../Components/About";
import Testimonials from "../Components/Testimonials";
import Guidebook from "../Components/Guidebook";
import Ownership from "../Components/Ownership";
import Workflow from "../Components/workflow";
import TechPartners from "../Components/TechPartners";

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
        <p className="welccome-text">From Paper to Shelf or Digital - Your complete publishing journey, streamlined with AI and Publishing tools.</p>
        <a className="request-demo" href="/contact">Request Demo</a>
      </div>
      <About />
      <WhyChooseUs />
      <Ownership/>
      <Workflow/>
      <TechPartners />
      <div id="testimonials">
      <Testimonials />
      </div>
      {/* <Guidebook /> */}
    </div>
  );
};

export default Home;