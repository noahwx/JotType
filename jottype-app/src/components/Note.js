import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import Main from './Main';

const Note = () => {

    const [notes, setNotes] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
    );

    const [activeNote, setActiveNote] = useState(false);

    useEffect(() => {
        localStorage.notes = JSON.stringify(notes);
    }, [notes]);

    const onAddNote = () => {
        const newNote = {
          id: uuidv4(),
          title: "Untitled Note",
          body: "",
          lastModified: Date.now(),
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
            />
        </div>
     );
}
 
export default Note;