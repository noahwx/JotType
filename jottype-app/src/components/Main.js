import React, { useRef } from "react";
import ReactMarkdown from "react-markdown";

const Main = ({ 
    activeNote, 
    onUpdateNote, 
    setFontSize, 
    setBold, 
    setItalic, 
    setUnderline,
    setAlign,
    setTextColor,
  }) => {
    const onEditField = (field, value) => {
      onUpdateNote({
        ...activeNote,
        [field]: value,
        lastModified: Date.now(),
      });
    };

    const taMenu = useRef(null);

    const [open, setOpen] = React.useState("");

    const handleOpen = () => {
      setOpen(!open);
    };

    const closeOpenMenus = (e)=>{
      if(taMenu.current && open && !taMenu.current.contains(e.target)){
        setOpen(false)
      }
    }

    const increaseFontSize = () => {
      setFontSize(activeNote.fontSize + 1);
      onEditField("fontSize", activeNote.fontSize + 1);
    };

    const decreaseFontSize = () => {
      setFontSize(activeNote.fontSize - 1);
      onEditField("fontSize", activeNote.fontSize - 1);
    };
  
    document.addEventListener('mousedown',closeOpenMenus)
  
    if (!activeNote) return <div className="No-Active-Note">No Active Note</div>;

    return (
      <>
        <div className="Main">
          <div className="Main-Style-Edit">
            <label htmlFor="fontSize">Font Size: {activeNote.fontSize} px</label>
            <button 
              onClick={() => {increaseFontSize()}}
              value={activeNote.fontSize}
              max="24"
            >
              A+
            </button>
            <button
              onClick={() => {decreaseFontSize()}}
              value={activeNote.fontSize}
              min="12"
            >
              A-
            </button>
            <button
              onClick={() => {
                setBold(!activeNote.bold);
                onEditField("bold", !activeNote.bold);
              }}
              value={activeNote.bold}
            >
              {activeNote.bold ? <span style={{fontWeight: "Bold"}}>BOLD</span> : "bold"}
            </button>
            <button
              onClick={() => {
                setItalic(!activeNote.italic);
                onEditField("italic", !activeNote.italic);
              }}
              value={activeNote.italic}
            >
              {activeNote.italic ? <span style={{fontStyle: "Italic"}}>ITALIC</span> : "italic"}
            </button>
            <button
              onClick={() => {
                setUnderline(!activeNote.underline);
                onEditField("underline", !activeNote.underline);
              }}
              value={activeNote.underline}
            >
              {activeNote.underline ? <span style={{textDecoration: "underline"}}>UNDERLINE</span> : "underline"}
            </button>
            <div className="Dropdown">
              <button className="dropbtn" onClick={handleOpen}>
                Text Align
              </button>
              {open ? (
                <div className="Dropdown-Menu" ref={taMenu}>
                  <button
                    onClick={() => {
                      setAlign("left");
                      onEditField("align", "left");
                    }}
                    value={activeNote.align}
                    className="Dropdown-Item"
                  >
                    Left Align
                  </button>
                  <button
                    onClick={() => {
                      setAlign("center");
                      onEditField("align", "center");
                    }}
                    value={activeNote.align}
                    className="Dropdown-Item"
                  >
                    Center Align
                  </button>
                  <button
                    onClick={() => {
                      setAlign("right");
                      onEditField("align", "right");
                    }}
                    value={activeNote.align}
                    className="Dropdown-Item"
                  >
                    Right Align
                  </button>
                </div>
                  ) : null}
            </div>
            <label htmlFor="textColor">Text Color: </label>
            <input
              type="color"
              id="textColor"
              value={activeNote.textColor}
              onChange={(e) => {
                setTextColor(e.target.value);
                onEditField("textColor", e.target.value);
              }}
            />
          </div>
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
              style={{
                fontSize: `${activeNote.fontSize}px`,
                fontWeight: `${activeNote.bold ? "bold" : "normal"}`,
                fontStyle: `${activeNote.italic ? "italic" : "normal"}`,
                textDecoration: `${activeNote.underline ? "underline" : "none"}`,
                textAlign: `${activeNote.align}`,
                color: `${activeNote.textColor}`,
              }}
              multiline = {true}
            />
          </div>
          <div className="Main-Note-Preview">
            <h1 className="preview-title">{activeNote.title}</h1>
            <ReactMarkdown className="markdown-preview">
              {activeNote.body}
            </ReactMarkdown>
          </div>
        </div>
      </>
    );
  };
  
  export default Main;