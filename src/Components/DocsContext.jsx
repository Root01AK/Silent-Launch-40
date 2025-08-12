import { createContext, useContext, useState } from "react";

const DocsContext = createContext();

export const DocsProvider = ({ children }) => {
  const [docs, setDocs] = useState([
    {
      id: 1,
      name: "Travel_Guide.docx",
      submittedAt: "2025-07-11T08:00:00Z",
      uploadedBy: "Selvi",
      fileUrl: "/documents/Betadoc.docx",
    },
    {
      id: 2,
      name: "Project_Report.doc",
      submittedAt: "2025-07-10T16:30:00Z",
      uploadedBy: "Zoe",
      fileUrl: "/documents/project.doc",
    },
    {
      id: 3,
      name: "Design_Specs.doc",
      submittedAt: "2025-07-09T12:45:00Z",
      uploadedBy: "Abby",
      fileUrl: "/documents/design.doc",
    },
  ]);

  return (
    <DocsContext.Provider value={{ docs }}>
      {children}
    </DocsContext.Provider>
  );
};

export const useDocs = () => useContext(DocsContext);
