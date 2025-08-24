import React, { createContext, useContext, useState, useEffect } from "react";

const DocsContext = createContext();

export const DocsProvider = ({ children }) => {
  // Load saved docs from localStorage or default to empty array
  const [docs, setDocs] = useState(() => {
    const saved = localStorage.getItem("docs");
    return saved ? JSON.parse(saved) : [];
  });

  // Save docs to localStorage whenever docs state changes
  useEffect(() => {
    localStorage.setItem("docs", JSON.stringify(docs));
  }, [docs]);

  const addDoc = (file) => {
    const newDoc = {
      id: Date.now(),
      name: file.name,
      submittedAt: new Date().toISOString(),
      fileUrl: URL.createObjectURL(file), // 👈 generate temporary preview URL
      uploadedBy: "Anonymous", // or grab from auth
    };
    setDocs((prev) => [...prev, newDoc]);
  };


  return (
    <DocsContext.Provider value={{ docs, addDoc }}>
      {children}
    </DocsContext.Provider>
  );
};

export const useDocs = () => useContext(DocsContext);