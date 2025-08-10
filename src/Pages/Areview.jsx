import React, { useState } from "react";
import axios from "axios";

export default function Areview() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

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

  const onFileUpload = () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("myFile", selectedFile, selectedFile.name);
    console.log(selectedFile);

    axios
      .post("api/uploadfile", formData)
      .then((res) => {
        console.log("File uploaded successfully");
      })
      .catch((err) => {
        console.error("Upload failed", err);
      });
  };

  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {selectedFile.name}</p>
          <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
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
    <div className="review-container">
      <div className="file-upload-container">
        <div className="file-heading">
          <h1>
            Upload Your File Here <span> (Only Word format)</span>
          </h1>
        </div>
        <div className="file-upload">
          <input type="file" onChange={onFileChange} accept=".doc,.docx" />
          <a href="/isbn" onClick={onFileUpload}>
            Upload!
          </a>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          {fileData()}
        </div>
      </div>
      <div className="Areview-card">
        <div className="Areview-title">
          <p>
            Your Book Has been Successfully Reviewed by the Editor & passed all
            the check.✅
          </p>
        </div>
        <div className="Areview-datas">
          <p>Example.docx</p>
          <p>Reviewed by: John Doe</p>
        </div>
      </div>
    </div>
  );
}
