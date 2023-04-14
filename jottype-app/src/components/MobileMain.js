import React from "react";

const MobileMain = ({ activeNote, onUpdateNote }) => {
    // const onEditField = (field, value) => {
    //   onUpdateNote({
    //     ...activeNote,
    //     [field]: value,
    //     lastModified: Date.now(),
    //   });
    // };
  
    if (!activeNote) return <div className="No-Active-Note">Mobile Support Coming!</div>;

    return (
      <div className="MobileMain">
        
      </div>
    );
  };
  
  export default MobileMain;