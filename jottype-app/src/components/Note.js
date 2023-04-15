import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import Main from './Main';

const Note = () => {

    const [notes, setNotes] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
    );

    const [fontSize, setFontSize] = useState(16);

    const [bold, setBold] = useState(false);

    const [italic, setItalic] = useState(false);

    const [activeNote, setActiveNote] = useState(false);

    const [underline, setUnderline] = useState(false);

    const [align, setAlign] = useState("left");

    const [textColor, setTextColor] = useState("black");

    useEffect(() => {
        localStorage.notes = JSON.stringify(notes);
    }, [notes]);

    const onAddNote = () => {
        const newNote = {
            id: uuidv4(),
            title: "Untitled Note",
            body: "",
            lastModified: Date.now(),
            fontSize: fontSize,
            bold: bold,
            italic: italic,
            underline: underline,
            align: align,
            textColor: textColor,
        };
    
        setNotes([newNote, ...notes]);
        setActiveNote(newNote.id);
    };

    const onDeleteNote = (noteId) => {
        setNotes(notes.filter(({ id }) => id !== noteId));
    };

    const onUpdateNote = (updatedNote) => {
        const updatedNotesArr = notes.map((note) => {
          if (note.id === updatedNote.id) {
            return updatedNote;
          }
    
          return note;
        });
    
        setNotes(updatedNotesArr);
    };

    const getActiveNote = () => {
        return notes.find(({ id }) => id === activeNote);
    };

    return ( 
        <>
            <div className='Note'>
                <Header 
                    notes={notes}
                    onAddNote={onAddNote}
                    onDeleteNote={onDeleteNote}
                    activeNote={activeNote}
                    setActiveNote={setActiveNote}
                    setNotes={setNotes}
                />
                <Main 
                    activeNote={getActiveNote()} 
                    onUpdateNote={onUpdateNote}
                    fontSize={fontSize}
                    setFontSize={setFontSize}
                    bold={bold}
                    setBold={setBold}
                    italic={italic}
                    setItalic={setItalic}
                    underline={underline}
                    setUnderline={setUnderline}
                    align={align}
                    setAlign={setAlign}
                    textColor={textColor}
                    setTextColor={setTextColor}
                />
            </div>
        </>
     );
}
 
export default Note;