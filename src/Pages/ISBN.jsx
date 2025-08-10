import React, { useState, useEffect } from "react";

export default function ISBN() {
  const [loading, setLoading] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "... AI agents are working in content security";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTypedText(""); // reset for typing effect

    // Simulate processing delay (replace with actual logic)
    setTimeout(() => {
      window.location.href = "/plagarism";
    }, 4000);
  };

  // Letter-by-letter typing effect
  useEffect(() => {
    if (loading) {
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    <div className="isbn-reg">
      <div className="isbn-heading">ISBN Registration</div>

      <form className="isbn-form" onSubmit={handleSubmit}>
        <div className="flex">
          <label>
            <input placeholder="" type="text" className="input" />
            <span>First Name</span>
          </label>
          <label>
            <input placeholder="" type="text" className="input" />
            <span>Last Name</span>
          </label>
        </div>

        <label>
          <input placeholder="" type="email" className="input" />
          <span>Book Name</span>
        </label>

        <label>
          <input type="tel" placeholder="" className="input" />
          <span>SSN</span>
        </label>

        <label>
          <input type="file" placeholder="" className="input" />
        </label>

        <label>
          <input type="tel" placeholder="" className="input" />
          <span>Contact number</span>
        </label>

        <label>
          <textarea rows="3" placeholder="" className="input01" />
          <span>Message</span>
        </label>

        <button className="fancy" type="submit" disabled={loading}>
          <span className="top-key"></span>
          <span className="text">
            SUBMIT{" "}
            {loading && (
              <span className="brackets">
                ({typedText})
              </span>
            )}
          </span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </form>
    </div>
  );
}
