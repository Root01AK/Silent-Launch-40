import React from "react";

export default function finalssubmit() {
  return (
    <div className="submited-successfully">
      <div className="submited-heading">
        <h2>
          Your book has been checked and confirmed by the editor and is now
          ready to be published.
        </h2>
      </div>
      <div className="select-option">
        <div className="option-1">
          <p>Choose an option to Publish:</p>
          <label className="radio-button">
            <input type="radio" name="support" value="concept" />
            &nbsp; Online pdf
          </label>
          <label className="radio-button">
            <input type="radio" name="support" value="concept" />
            &nbsp; Print pdf
          </label>
        </div>
        <div className="option-2">
          <p>Choose an option to Sell:</p>
          <label className="radio-button">
            <input type="radio" name="sell" value="sell" />
            &nbsp; Amazon
          </label>
          <label className="radio-button">
            <input type="radio" name="sell" value="sell" />
            &nbsp; E-bay
          </label>
        </div>
      </div>
      <div className="final-btn">
        <a href="/" onClick={() => alert("Published Successfully")}>Publish</a>
      </div>
    </div>
  );
}
