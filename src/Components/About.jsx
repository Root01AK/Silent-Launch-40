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
            <p>Silent Launch 4.0 is an innovative publishing platform designed to make the journey from manuscript to published book seamless for students and authors alike. The process starts with manuscript upload and ISBN registration. Built-in AI instantly evaluates originality, detects AI-generated text, and—once approved—locks in ownership through blockchain technology. Editorial teams then assess the work using clear guidelines, supported by AI-powered grammar checks and quality scoring. Language specialists fine-tune the writing in the content management system, while authors have the option to create or upload a book cover using integrated Canva design tools.
            </p>
            <a href="/about">Known More</a>
        </div>
      </div>
    </div>
  )
}
