import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";


const CoverDesigner = () => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const { docId } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    const canvasEl = canvasRef.current;
    const wrapperEl = wrapperRef.current;

    const canvasWidth = wrapperEl.clientWidth;
    const canvasHeight = 600; // or make this dynamic if needed

    const canvas = new window.fabric.Canvas(canvasEl, {
      width: canvasWidth,
      height: canvasHeight,
      backgroundColor: "#ffffff",
    });

    window.fabricCanvas = canvas;

    const handleResize = () => {
      const newWidth = wrapperEl.clientWidth;
      canvas.setWidth(newWidth);
      canvas.renderAll();
    };

    window.addEventListener("resize", handleResize);

    const handleKeyDown = (e) => {
      if (e.key === "Delete" || e.key === "Backspace") {
        const active = canvas.getActiveObject();
        if (active) {
          canvas.remove(active);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeyDown);
      canvas.dispose();
    };
  }, []);
  

  const addText = () => {
    const text = new window.fabric.IText("Double click to edit", {
      left: 100,
      top: 100,
      fontSize: 28,
      fill: "#333",
    });
    window.fabricCanvas.add(text);
  };

  const addRect = () => {
    const rect = new window.fabric.Rect({
      left: 200,
      top: 200,
      fill: "skyblue",
      width: 120,
      height: 80,
    });
    window.fabricCanvas.add(rect);
  };

  const addCircle = () => {
    const circle = new window.fabric.Circle({
      radius: 50,
      fill: "lightgreen",
      left: 300,
      top: 150,
    });
    window.fabricCanvas.add(circle);
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (f) {
      const data = f.target.result;
      window.fabric.Image.fromURL(data, function (img) {
        img.scaleToWidth(300);
        window.fabricCanvas.add(img);
      });
    };
    reader.readAsDataURL(file);
  };

  const changeBackground = (color) => {
    window.fabricCanvas.setBackgroundColor(
      color,
      window.fabricCanvas.renderAll.bind(window.fabricCanvas)
    );
  };

  const bringForward = () => {
    const obj = window.fabricCanvas.getActiveObject();
    if (obj) window.fabricCanvas.bringForward(obj);
  };

  const sendBackward = () => {
    const obj = window.fabricCanvas.getActiveObject();
    if (obj) window.fabricCanvas.sendBackwards(obj);
  };

  const alignCenter = () => {
    const obj = window.fabricCanvas.getActiveObject();
    if (obj) {
      obj.set({
        left: (window.fabricCanvas.width - obj.width * obj.scaleX) / 2,
      });
      window.fabricCanvas.renderAll();
    }
  };

  const exportImage = () => {
    const img = window.fabricCanvas.toDataURL({ format: "png", quality: 1 });
    const link = document.createElement("a");
    link.href = img;
    link.download = "cover.png";
    link.click();
  };

  return (
    <div className="cover-designer-container">
      <h2>Canvas Playground</h2>

      <div className="toolbar">
        <button onClick={addText}>Add Text</button>
        <button onClick={addRect}>Add Rectangle</button>
        <button onClick={addCircle}>Add Circle</button>
        <label className="upload-btn">
          Import Image
          <input type="file" onChange={uploadImage} hidden />
        </label>
        <select onChange={(e) => changeBackground(e.target.value)}>
          <option value="">Background Color</option>
          <option value="#ffffff">White</option>
          <option value="#fef3c7">Beige</option>
          <option value="#f0f9ff">Sky</option>
          <option value="#f0fdf4">Mint</option>
        </select>
        <button onClick={bringForward}>Bring Forward</button>
        <button onClick={sendBackward}>Send Backward</button>
        <button onClick={alignCenter}>Align Center</button>
        <button onClick={exportImage}>Export PNG</button>
        <button >More...(WIP)</button>
      </div>

      <div className="canvas-wrapper" ref={wrapperRef}>
        <canvas ref={canvasRef} className="fabric-canvas" />
      </div>
      <div className="canva-nxt-btn-main">
        <button
          className="canva-nxt-btn"
          onClick={() => {
            alert("Proceed to next step!");
            navigate("/isbn");
          }}
        >
          Next ➠ ➠
        </button>
      </div>
    </div>
  );
};

export default CoverDesigner;
