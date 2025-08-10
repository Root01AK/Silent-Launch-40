import React from 'react'

export default function About() {
  return (
    <div className='home-about-container'>
      <div className="about-section home-abt-sec">
        <div className="home-about">
            <img src="/src/assets/publisg3.jpg" alt="" />
        </div>
        <div className="home-about-right">
            <h1>About SL 4.0</h1>
            <p>Silent Launch 4.0 is a smart publishing platform that guides students and authors through a streamlined, AI-powered publishing journey. Users begin by uploading their manuscript and registering an ISBN. The system checks for originality and AI-generated content, securing ownership via Blockchain, if approved. Editors then review content based on guidelines, aided by AI tools for grammar and quality scoring. Language editors refine the text, fonts, and layout using a CMS. Authors can upload or design a cover using integrated Canva tools.
            </p>
            <a href="/about">Known More</a>
        </div>
      </div>
    </div>
  )
}
