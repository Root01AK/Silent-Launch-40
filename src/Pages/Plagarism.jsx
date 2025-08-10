import React from 'react'

export default function Plagarism() {
  return (
    <div className='plagarism'>
      <div className="plagarism-heading">
        <h2>Plagarism Checker</h2>
      </div>
      <div className="plagarism-view">
        <textarea name="" id="" cols="50" rows={10}></textarea>
      </div>
      <div className="plagarism-cards">
        <div className="plagarism-card humanised">
            <p>The Content you have Submited is &lt; 10% of AI Content </p>
        </div>
        <div className="plagarism-card">
            <p>The Content you have Submited is  &gt;10% of AI Content </p>
        </div>
        <div class="loader-wrapper">
  <span class="loader-letter">A</span>
  <span class="loader-letter">g</span>
  <span class="loader-letter">e</span>
  <span class="loader-letter">n</span>
  <span class="loader-letter">t</span>
  <span class="loader-letter">s</span>
  <span class="loader-letter">W</span>
  <span class="loader-letter">o</span>
  <span class="loader-letter">r</span>
  <span class="loader-letter">k</span>
  <span class="loader-letter">i</span>
  <span class="loader-letter">n</span>
  <span class="loader-letter">g</span>

  <div class="loader"></div>
</div>
      </div>
      <div className="plagarism-btn">
        <a href="/editor-page">Submit</a>
      </div>
    </div>
  )
}
