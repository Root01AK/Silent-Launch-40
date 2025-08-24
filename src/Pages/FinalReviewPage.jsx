import { useParams, useNavigate } from "react-router-dom";
import { useDocs } from "../Components/DocsContext";
import { useState } from "react";

const FinalReviewPage = () => {
  const { docId } = useParams();
  const { docs } = useDocs();
  const navigate = useNavigate();

  const doc = docs.find((d) => d.id === parseInt(docId));

  const [rejected, setRejected] = useState(false);
  const [approved, setApproved] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const [showRejectionModal, setShowRejectionModal] = useState(false);

  const rejectionReasons = [
    "Failure to follow submission guidelines",
    "Language quality",
    "Plagiarism/Lack of originality",
    "Low commercial potential",
    "Other",
  ];

  if (!doc) return <div className="review-error">Document not found</div>;

  return (
    <div className="review-container">
      {/* Left Panel */}
      <div className="review-left">
        <div className="doc-preview">
          <div className="doc-preview">
            <iframe
              src={doc.fileUrl}
              title="doc-preview"
              width="100%"
              height="600px"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <h3>{doc.name}</h3>
        <p>
          <strong>Uploaded by:</strong> {doc.uploadedBy}
        </p>
        <p>
          <strong>Submitted:</strong>{" "}
          {new Date(doc.submittedAt).toLocaleString()}
        </p>
      </div>

      {/* Right Panel */}
      {/* Right Panel */}
      <div className="review-right">
        <h3>Editor Review Actions</h3>

        {!approved && !rejected && (
          <div className="button-group">
            <button className="btn-accept" onClick={() => setApproved(true)}>
              Accept
            </button>
            <button className="btn-reject" onClick={() => setRejected(true)}>
              Reject
            </button>
          </div>
        )}

        {approved && (
          <div>
            <div className="popup-success">
              ✅ Document approved successfully!
            </div>
            <button
              className="language-edit-btn"
              onClick={() => navigate(`/submit`)}
            >
              Proceed to Final Stage
            </button>
          </div>
        )}

        {rejected && (
          <div className="rejection-panel">
            <h4>Reason for Rejection</h4>
            <ul className="rejection-list">
              {rejectionReasons.map((reason) => (
                <li key={reason}>
                  <label>
                    <input
                      type="radio"
                      name="rejection"
                      value={reason}
                      onChange={(e) => setSelectedReason(e.target.value)}
                    />{" "}
                    {reason}
                  </label>
                </li>
              ))}
            </ul>

            {selectedReason === "Other" && (
              <textarea
                className="other-reason-input"
                placeholder="Type your reason here..."
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
              />
            )}

            <button
              className="btn-submit-rejection"
              onClick={() => setShowRejectionModal(true)}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinalReviewPage;
