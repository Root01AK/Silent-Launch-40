import React from "react";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="form-title">Contact Us</h2>

      <div className="dummy-content">
        <p>
          We’d love to hear from you! Whether you have a question, feedback, or a
          project idea, feel free to reach out to us. Our team will get back to you
          as soon as possible.
        </p>
        <p><strong>Address:</strong> 123 Main Street, Tech City, India - 600001</p>
        <p><strong>Email:</strong> contact@dummycompany.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Working Hours:</strong> Mon–Fri: 9:00 AM – 6:00 PM</p>
      </div>

      <form className="form">
        <div className="form_front">
          <div className="contact-name">
            <input type="text" className="input" placeholder="First Name" />
            <input type="text" className="input" placeholder="Last Name" />
          </div>
          <div className="main-ph">
            <input type="tel" className="input" placeholder="Phone Number" />
            <input type="email" className="input" placeholder="Enter Your Mail ID" />
          </div>
          <div className="text-msg">
            <textarea
              className="input textmsg"
              placeholder="Your Message"
            />
          </div>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
}
