import React from "react";
import ReactMarkdown from "react-markdown";

const Main = ({ activeNote, onUpdateNote }) => {
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
          <textarea
            id="body"
            placeholder="Write your note here..."
            value={activeNote.body}
            onChange={(e) => onEditField("body", e.target.value)}
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