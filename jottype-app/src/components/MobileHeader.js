import React, { useState } from 'react';
import logo from '../logo.svg';

const MobileHeader = ({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
}) => {

    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    const [search, setSearch] = useState("");
    
    return ( 
        <div className="MobileHeader">
            <div className='MobileNav'>
                <button className="MobileNav-Button">
                    <img src={logo} alt="logo" />
                </button>
            </div>
        </div>
     );
}
 
export default MobileHeader;