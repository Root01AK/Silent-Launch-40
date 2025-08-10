import React, { useState } from "react";
import clickImg from "../assets/clickimg.webp";
import guidebook from '../assets/guidebook.png'

// Custom Cursor Component
function CustomCursor({ cursorImage, cursorSize }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveCursor = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <img
      src={cursorImage}
      alt="Custom Cursor"
      style={{
        position: "fixed",
        top: position.y - cursorSize.height / 2,
        left: position.x - cursorSize.width / 2,
        width: `${cursorSize.width}px`,
        height: `${cursorSize.height}px`,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}

export default function Guidebook() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="guidebook-container">
      {isHovering && (
        <CustomCursor
          cursorImage={clickImg} // your "view more" image
          cursorSize={{ width: 80, height: 80 }}
        />
      )}

      <div className="guidebook-heading">
        <h2>Guidebook</h2>
      </div>

      <div
        className="guidebook-card"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ cursor: "none" }}
      >
        <a href="/Guide_Book.pdf" target="_blank" rel="noopener noreferrer">
          <div className="card-image">
            <img src={guidebook} alt="Guidebook" />
          </div>
          <div className="card-content">
            <p>Author Guidebook</p>
          </div>
        </a>
      </div>
    </div>
  );
}
