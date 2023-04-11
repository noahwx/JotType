const Header = ({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
}) => {

    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    return ( 
        <div className="Header">
            <div className="Header-Top">
                <h1>Jottype</h1>
                <button onClick={onAddNote}>Create a New Note</button>
            </div>
            <div className="Header-Notes">
                {sortedNotes.map(({ id, title, body, lastModified }, i) => (
                    <div
                    className={`Header-Note ${id === activeNote && "active"}`}
                    onClick={() => setActiveNote(id)}
                    >
                        <div className="Header-Note-Title">
                            <strong>{title}</strong>
                            <button onClick={(e) => onDeleteNote(id)}>Delete</button>
                        </div>
            
                        <p>{body && body.substr(0, 100) + "..."}</p>
                        <small>
                            Last Modified:{" "}
                            {new Date(lastModified).toLocaleDateString("en-GB", {
                            hour: "2-digit",
                            minute: "2-digit",
                            })}
                        </small>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Header;