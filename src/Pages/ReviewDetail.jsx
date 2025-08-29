import { useParams, useNavigate } from "react-router-dom";
import { useDocs } from "../Components/DocsContext";
import { useState, useEffect, useRef } from "react";
import { renderAsync } from "docx-preview";

const ReviewDetail = () => {
  const { docId } = useParams();
  const { docs } = useDocs();
  const navigate = useNavigate();
  const previewRef = useRef(null);

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

  // 🔑 helper: base64 → ArrayBuffer
  const base64ToArrayBuffer = (base64) => {
    const binaryString = window.atob(base64.split(",")[1]); // strip "data:..;base64,"
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  };

useEffect(() => {
  if (!doc || !previewRef.current) return;

  previewRef.current.innerHTML = "";

  const isDocx = doc.name.toLowerCase().endsWith(".docx");

  if (isDocx) {
    try {
      if (doc.fileData) {
        // convert base64 → ArrayBuffer
        const arrayBuffer = base64ToArrayBuffer(doc.fileData);
        renderAsync(arrayBuffer, previewRef.current);
      } else {
        // fallback: fetch blob from fileUrl
        fetch(doc.fileUrl)
          .then((res) => res.blob())
          .then((blob) => renderAsync(blob, previewRef.current))
          .catch((err) => {
            console.error("Failed to fetch docx:", err);
            previewRef.current.innerText = "Failed to load document preview.";
          });
      }
    } catch (err) {
      console.error("Failed to render docx:", err);
      previewRef.current.innerText = "Failed to load document preview.";
    }
  }
}, [doc]);


  if (!doc) return <div className="review-error">Document not found</div>;

  return (
    <div className="review-container">
      {/* Left Panel */}
      <div className="review-left">
        <div
          className="doc-preview"
          style={{ height: "100%", overflow: "auto" }}
        >
          {doc.name.toLowerCase().endsWith(".docx") ? (
            <div ref={previewRef} />
          ) : (
            <iframe
              src={doc.fileUrl}
              width="100%"
              height="100%"
              frameBorder="0"
            />
          )}
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
      <div className="review-right">
        <div className="outer-cont flex">
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none">
              <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
              <path
                d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16l.807 2.36a4 4 0 0 0 2.276 2.411l.217.081l2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06l-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216l-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16l-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081l-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062l2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216zM11 6.094l-.806 2.36a6 6 0 0 1-3.49 3.649l-.25.091l-2.36.806l2.36.806a6 6 0 0 1 3.649 3.49l.091.25l.806 2.36l.806-2.36a6 6 0 0 1 3.49-3.649l.25-.09l2.36-.807l-2.36-.806a6 6 0 0 1-3.649-3.49l-.09-.25zM19 2a1 1 0 0 1 .898.56l.048.117l.35 1.026l1.027.35a1 1 0 0 1 .118 1.845l-.118.048l-1.026.35l-.35 1.027a1 1 0 0 1-1.845.117l-.048-.117l-.35-1.026l-1.027-.35a1 1 0 0 1-.118-1.845l.118-.048l1.026-.35l.35-1.027A1 1 0 0 1 19 2"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          Agents are working in corrections
        </div>

        {/* Feature Grid */}
        <div
          className="feature-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              background: "#f5f5f5",
              padding: "15px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <h4>Grammar Check</h4>
            <p>
              Detecting grammatical errors, punctuation and structural issues
            </p>
          </div>
          <div
            style={{
              background: "#f5f5f5",
              padding: "15px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <h4>Content Score</h4>
            <p>
              Evaluating content quality based on coherence, clarity, tone,
              originality
            </p>
          </div>
          <div
            style={{
              background: "#f5f5f5",
              padding: "15px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <h4>Smart Suggestions</h4>
            <p>Offering actionable improvement recommendations</p>
          </div>
        </div>

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
            <div className="popup-success">Document approved successfully!</div>
            <button
              className="language-edit-btn"
              onClick={() => navigate(`/edit/${doc.id}`, { state: { doc } })}
            >
              Proceed with Language Editing
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

      {/* Modal */}
      {showRejectionModal && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target.className === "modal-overlay") {
              setShowRejectionModal(false);
            }
          }}
        >
          <div className="modal-content">
            <p>Rejection reason has been notified</p>

            <button
              onClick={() => {
                setShowRejectionModal(false);
                navigate("/review-list");
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewDetail;
