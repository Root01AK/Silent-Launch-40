import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Packages() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleChoose = (path) => {
    if (isLoggedIn) {
      navigate(path);
    } else {
      localStorage.setItem("redirectAfterLogin", path);
      navigate("/login");
    }
  };
  

  return (
    <div className="package-container">
      <div className="package-heading">
        <h2>Choose Your Package</h2>
      </div>

      <div className="package-items">
        {/* Basic Package */}
        <div className="package-item recomanded">
          <div className="package-cost">
            <p className="package-discount g-blue">Basic</p>
            <p className="package-amt">£150</p>
          </div>
          <div className="package-list">
            <ul>
              <li>Manuscript Formatting</li>
              <li>Cover Design (Template-Based)</li>
              <li>ISBN Assignment</li>
              <li>Basic Proofreading</li>
              <li>Ebook Conversion</li>
              <li>Single Platform Publishing</li>
              <li>Email Support Only</li>
            </ul>
          </div>
          <div className="package-choose-btn">
            <button onClick={() => handleChoose("/support")}>
              Choose Package
            </button>
          </div>
        </div>
        {/* Pro Package */}
        <div className="package-item">
          <div className="package-cost">
            <p className="package-discount">Pro</p>
            <p className="package-amt">£250</p>
          </div>
          <div className="package-list">
            
            <ul>
              <li>Professional Manuscript Formatting</li>
              <li>Custom Cover Design</li>
              <li>ISBN & Copyright Registration</li>
              <li>Standard Proofreading & Editing</li>
              <li>Multi-Format Ebook Conversion</li>
              <li>Multi-Platform Publishing</li>
              <li>Email & Phone Support</li>
            </ul>
          </div>
          <div className="package-choose-btn">
            <button onClick={() => handleChoose("/support")}>
              Choose Package
            </button>
          </div>
        </div>

        {/* Elite Package */}
        <div className="package-item">
          <div className="package-cost">
            <p className="package-discount g-green">Elite</p>
            <p className="package-amt">£500</p>
          </div>
          <div className="package-list">
            <ul>
              <li>Full Manuscript Editing & Formatting</li>
              <li>Custom Illustrated Cover Design</li>
              <li>ISBN, Copyright & Legal Services</li>
              <li>Advanced Proofreading & Editorial Review</li>
              <li>Audiobook Version (Optional Add-On)</li>
              <li>Global Publishing & Marketing Setup</li>
              <li>Dedicated Publishing Manager</li>
            </ul>
          </div>
          <div className="package-choose-btn">
            <button onClick={() => handleChoose("/support")}>
              Choose Package
            </button>
          </div>
        </div>

        <div className="package-item">
          <div className="package-cost">
            <p className="package-discount">Customise</p>
            <p className="package-amt">£***</p>
          </div>
          <div className="package-list">
            <ul>
              <li>Project Manager</li>
              <li>Editor</li>
              <li>Graphic Designer</li>
              <li>Digital Marketing</li>
              <li>Other</li>
            </ul>
          </div>
          <div className="package-choose-btn">
            <button onClick={() => handleChoose("/contact")}>
              Enquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
