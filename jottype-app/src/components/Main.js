import React from "react";
import ReactMarkdown from "react-markdown";

const Main = ({ activeNote, onUpdateNote, size, setSize, bold, setBold, italic, setItalic, underline, setUnderline }) => {
    const onEditField = (field, value) => {
      onUpdateNote({
        ...activeNote,
        [field]: value,
        lastModified: Date.now(),
      });
    };
  
    if (!activeNote) return <div className="No-Active-Note">No Active Note</div>;
  
    return (
      <div className="Main">
        <div className="Main-Edit">
          <input
            type="text"
            id="title"
            placeholder="Note Title"
            value={activeNote.title}
            onChange={(e) => onEditField("title", e.target.value)}
            autoFocus
          />
          <div className="Note-Edit"> 
            <label htmlFor="size">Font Size: {size}px</label>
            <button onClick={() => setSize(size - 1)}>A-</button>
            <button onClick={() => setSize(size + 1)}>A+</button>
            <button onClick={() => setBold(!bold)}>{bold ? "BOLD" : "bold"}</button>
            <button onClick={() => setItalic(!italic)}>{italic ? "ITALIC" : "italic"}</button>
            <button onClick={() => setUnderline(!underline)}>{underline ? "UNDERLINE" : "underline"}</button>
          </div>
          <textarea
            id="body"
            placeholder="Write your note here..."
            value={activeNote.body}
            onChange={(e) => onEditField("body", e.target.value)}
            style={{ 
              fontSize: `${size}px`,
              fontWeight: `${bold ? "bold" : "normal"}`,
              fontStyle: `${italic ? "italic" : "normal"}`,
              textDecoration: `${underline ? "underline" : "none"}`,
            }}
          />
        </div>
        <div className="Main-Note-Preview">
          <h1 className="preview-title">{activeNote.title}</h1>
          <ReactMarkdown className="markdown-preview">
            {activeNote.body}
          </ReactMarkdown>
        </div>
      </div>
    );
  };
  
  export default Main;