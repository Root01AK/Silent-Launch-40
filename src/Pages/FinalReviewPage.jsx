import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const FinalReviewPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRight, setShowRight] = useState(false); // right section hidden initially
  const navigate = useNavigate();

  return (
    <div className="finalreview-container">
      {/* Left Section (always visible) */}
      <div className="finalreview-right">
        <div
          className="finalreview-pdfcheck"
          onClick={() => setShowModal(true)}
          style={{ cursor: "pointer" }}
        >
          <p>View your full book content here</p>
        </div>
        <div className="finalreview-edit-btns">
          <button className="finalreview-reedit-btn">Edit</button>
          <button
            className="finalreview-pdf-btn"
            onClick={() => setShowRight(true)} // show right when clicked
          >
            Create Your Pdf
          </button>
        </div>
      </div>

      {/* Right Section (appears only after Create PDF is clicked) */}
      {showRight && (
        <div className="finalreview-left">
          <div className="finalreview-pdfcomplete">
            <p>Your Final Book PDF</p>
          </div>
          <div className="finalreview-pdf-btns">
            <button
              className="finalreview-pdf-btn"
              onClick={() => navigate("/submit")}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Modal Popup */}
      {showModal && (
        <div className="finalreview-modal">
          <div className="finalreview-modal-content">
            <span
              className="finalreview-modal-close"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <h2>Book Preview</h2>
            <p>Here you can display your full book content preview...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalReviewPage;
