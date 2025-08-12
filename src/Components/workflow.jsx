import React from "react";
import workflow from '../assets/workflow.jpeg';

export default function WorkflowCard() {
  return (
    <div className="workflow-card">
      <h2 className="workflow-title">Workflow Automation</h2>
      <div className="image-container">
        <img
          src={workflow}
          alt="Workflow"
          className="workflow-image"
        />
      </div>
    </div>
  );
}
