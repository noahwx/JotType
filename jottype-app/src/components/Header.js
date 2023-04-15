import React, { useState } from 'react';
import logo from '../logo.svg';
import ReactModal from 'react-modal';

const Header = ({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
}) => {

    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    const [search, setSearch] = useState("");

    let subtitle;

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '';
    }

    function closeModal() {
        setIsOpen(false);
    }
    
    return ( 
        <>
            <div className="Header">
                <div className="Header-Top">
                    <button onClick={openModal}>
                        <img src={logo} alt="logo" className='logo'/>
                    </button>
                    <ReactModal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                        className="Modal"
                    >
                        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Designed by Noah Fontenette</h2>
                        <div>Check out my site below.</div>
                        <a href="https://noahfontenette.com" target="_blank" rel="noreferrer">noahfontenette.com</a> &nbsp;
                        <a href="https://github.com/noahwx/JotType" target="_blank" rel="noreferrer">Jottype's Github</a>
                        <p>Version 5.0.255</p>
                        <button onClick={closeModal}>close</button>
                    </ReactModal>
                    <button onClick={onAddNote} className='NewNote'>Create a New Note</button>
                    <div className='search'>
                        <label>Search Notes:</label>
                        <input 
                            type="text" 
                            placeholder="Search for a note..."
                            onChange={
                                (event) => {setSearch(event.target.value)
                            }}
                        />
                    </div>
                </div>
                <div className="Header-Notes">
                    {sortedNotes.filter(
                        (note) => note.title.toLowerCase().includes(search.toLowerCase()) || 
                        note.body.toLowerCase().includes(search.toLowerCase())
                    ).map(({ id, title, body, lastModified }, i) => (
                        <div
                        className={`Header-Note ${id === activeNote && "active"}`}
                        onClick={() => setActiveNote(id)}
                        >
                            <div className="Header-Note-Title">
                                <strong>{title}</strong>
                                <button onClick={(e) => onDeleteNote(id)}>Delete</button>
                            </div>
                
                            <p>{body && body.substr(0, 10) + "..."}</p> 
                            <small>
                                Last Modified:{" "}
                                {new Date(lastModified).toLocaleDateString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                                })}
                            </small>
                        </div>
                    ))}
                </div>
            </div>
        </>
     );
}
 
export default Header;