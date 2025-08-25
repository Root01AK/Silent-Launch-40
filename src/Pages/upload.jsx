import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDocs } from "../Components/DocsContext"; // ✅ shared docs state

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const { addDoc } = useDocs(); // ✅ from context
  const navigate = useNavigate();


  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (
      file &&
      (file.type === "application/msword" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setSelectedFile(file);
      setErrorMessage("");
    } else {
      setSelectedFile(null);
      setErrorMessage("Only Word documents (.doc, .docx) are allowed.");
    }
  };

  const onFileUpload = (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    addDoc(selectedFile);
    console.log("After addDoc call");

    navigate("/plagarism");
  };


  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {selectedFile.name}</p>
          <p>
            Last Modified:{" "}
            {selectedFile.lastModifiedDate?.toDateString() || "N/A"}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4 className="upload-warning">
            Choose a Word file before uploading.
          </h4>
        </div>
      );
    }
  };

  return (
    <div className="file-upload-container">
      <div className="file-heading">
        <h1>
          Upload Your File Here <span>(Only Word format)</span>
        </h1>
      </div>
      <div className="file-upload">
        <input type="file" onChange={onFileChange} accept=".doc,.docx" />
        <a href="/isbn" onClick={onFileUpload}>
          Upload
        </a>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {fileData()}
      </div>
    </div>
  );
}
