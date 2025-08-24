import { Editor } from "@tinymce/tinymce-react";
import { useRef, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDocs } from "../Components/DocsContext";
import mammoth from "mammoth";
import { Document, Packer, Paragraph } from "docx";
import { saveAs } from "file-saver";

const LanguageEditor = () => {
  const editorRef = useRef(null);
  const { docId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { docs } = useDocs();

  const docFromState = location.state?.doc;
  const doc = docFromState || docs.find((d) => d.id === parseInt(docId));

  const [htmlContent, setHtmlContent] = useState("<p>Loading document...</p>");

  useEffect(() => {
    const fetchAndConvertDocx = async () => {
      if (!doc) return;

      try {
        const response = await fetch(doc.fileUrl);
        const blob = await response.blob();
        const arrayBuffer = await blob.arrayBuffer();

        const result = await mammoth.convertToHtml({ arrayBuffer });
        setHtmlContent(result.value || "<p>(Empty document)</p>");

        // Set content in the editor
        if (editorRef.current) {
          editorRef.current.setContent(result.value || "<p>(Empty document)</p>");
        }
      } catch (err) {
        console.error("Error loading DOCX file:", err);
        setHtmlContent("<p>Error loading document.</p>");
        if (editorRef.current) {
          editorRef.current.setContent("<p>Error loading document.</p>");
        }
      }
    };

    fetchAndConvertDocx();
  }, [doc]);

  const handleSave = async () => {
    const content = editorRef.current?.getContent();
    if (!content) return;

    // Convert HTML to plain text for now (docx doesn't support raw HTML)
    const tempElement = document.createElement("div");
    tempElement.innerHTML = content;
    const text = tempElement.innerText;

    const docxDocument = new Document({
      sections: [
        {
          children: text
            .split("\n")
            .map((line) => new Paragraph(line.trim())),
        },
      ],
    });

    const blob = await Packer.toBlob(docxDocument);
    const fileName = doc.name.replace(/\.[^/.]+$/, "") + "_edited.docx";

    saveAs(blob, fileName);

    alert("Document saved and downloaded!");
    navigate(`/cover-design/${docId}`);
  };

  if (!doc) return <div>Document not found</div>;

  return (
    <div className="language-editor-container">
      <h2 className="language">Language Editing Panel</h2>

      <Editor
        apiKey="xwgtdzqdk58rooxj5m7s2ggvy4hsysq3w0n4c6zmybe8ro7s"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Loading...</p>"
        init={{
          height: 600,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
        }}
      />

      <button className="save-button" onClick={handleSave}>
        Save Document
      </button>
    </div>
  );
};

export default LanguageEditor;
        