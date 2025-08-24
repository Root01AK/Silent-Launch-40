import React from 'react'
import publisg3 from '../assets/publisg3.jpg';

export default function About() {
  return (
    <div className='home-about-container'>
      <div className="about-section home-abt-sec">
        <div className="home-about">
            <img src={publisg3} alt="" />
        </div>
        <div className="home-about-right">
            <h1>About SL 4.0</h1>
            <p>Silent Launch 4.0 is a user-friendly paper-to-digital self-publishing platform developed as an MVP (Minimum Viable Product) with basic functionalities and prototype created as a simple web application with only limited features at testing level. This platform is designed to mainly support Publishing, Arts, Media & Creative Writing students and authors through a streamlined, AI-powered publishing journey offering cost-effective student-only discount publishing packages to choose from. It explores the integration of automation tools within digital publishing services through collaboration with an Cybersecurity & AI solutions provider company based in the UK and an offshore development company
            </p>
            <a href="/about">Know More</a>
        </div>
      </div>
    </div>
  )
}
