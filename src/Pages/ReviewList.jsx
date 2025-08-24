import React from "react";
import { useNavigate } from "react-router-dom";
import { DocsProvider, useDocs } from '../Components/DocsContext';
// import './index.css'


const ReviewList = () => {
    const { docs } = useDocs();
    const navigate = useNavigate();

  return (

      <div className="review-page">
      <h2>Document Review Panel</h2>
      {docs.map((doc) => (
        <div key={doc.id} className="review-card">
          <h3>{doc.name}</h3>
          <p><strong>Uploaded By:</strong> {doc.uploadedBy}</p>
          <p><strong>Submitted At:</strong> {new Date(doc.submittedAt).toLocaleString()}</p>
          <button className="review-action-btn" onClick={() => navigate(`/review-detail/${doc.id}`)}>Review</button>
        </div>
      ))}
    </div>
);
};

export default ReviewList;
