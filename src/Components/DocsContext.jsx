import React, { createContext, useContext, useState, useEffect } from "react";

const DocsContext = createContext();

export const DocsProvider = ({ children }) => {
  const [docs, setDocs] = useState(() => {
    const saved = localStorage.getItem("docs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("docs", JSON.stringify(docs));
  }, [docs]);

  const addDoc = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const newDoc = {
        id: Date.now(),
        name: file.name,
        submittedAt: new Date().toISOString(),
        fileUrl: URL.createObjectURL(file), // for iframe / download
        fileData: reader.result, // 👈 base64 string (persists across reloads)
        uploadedBy: "Anonymous",
      };
      setDocs((prev) => [...prev, newDoc]);
    };
    reader.readAsDataURL(file); // read as base64
  };

  return (
    <DocsContext.Provider value={{ docs, addDoc }}>
      {children}
    </DocsContext.Provider>
  );
};

export const useDocs = () => useContext(DocsContext);
