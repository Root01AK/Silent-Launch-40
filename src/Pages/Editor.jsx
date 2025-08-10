import React from "react";
import { DocsProvider, useDocs } from '../Components/DocsContext';
import { useNavigate } from "react-router-dom";

const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (let key in intervals) {
    const value = Math.floor(seconds / intervals[key]);
    if (value >= 1) return `${value} ${key}${value > 1 ? "s" : ""} ago`;
  }
  return "just now";
};

const Editor = () => {
  const { docs } = useDocs();
  const navigate = useNavigate();

  const handleReview = () => {
    navigate("/review-list");
  };

  return (
    <div className="editor-container">
      <div className="editor-main">
        <h2 className="editor-heading">Submitted Documents</h2>
        <ul className="document-list">
          {docs.map((doc) => (
            <li key={doc.id} className="document-item">
              <div className="doc-name">{doc.name}</div>
              <div className="doc-time">{timeAgo(doc.submittedAt)}</div>
            </li>
          ))}
        </ul>
        <div className="editor-btn">
          <button className="editor-review-btn" onClick={handleReview}>
            Review Documents
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
