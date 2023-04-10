import { useState, useEffect } from 'react';
import produce from 'immer';
import { v1 as uuidv1 } from 'uuid';

const Notes = props => props.note.map(note =>

  <div className='note' key={note.noteID}>
    <h1>{note.noteID}</h1>
    <div className='notetitle'>
      <h2>{note.title}</h2>
    </div>
    <div className='notecategory'>
      <p>Category: </p>
      <p>{note.category}</p>
    </div>
    <div className='notetext'>
      <h5>{note.text}</h5>
    </div>
    <div className='delete-btn'>
      <button onClick={() => props.deleteById()}>Delete</button>
    </div>
  </div>
);

export default () => {
  const initialData = [{ noteID: '0',title: 'Note', category: 'Note Category', text: 'This is a note' }];
  const [note, setNote] = useState(initialData);
  const id = uuidv1();

  const handleClick = () => {
  const text = document.querySelector('#noteinput').value.trim();
  const title = document.querySelector('#notetitle').value.trim();
  const category = document.querySelector('#notecategory').value.trim();
  const noteID = id;
  if (text) {
    const nextState = produce(note, draftState => {
      draftState.push({ noteID, title, category, text});
    });
    document.querySelector('#noteinput').value = '';
    document.querySelector('#notetitle').value = '';
    document.querySelector('#notecategory').value = '';

    if (typeof window !== 'undefined') {
      localStorage.setItem('note', JSON.stringify(nextState));
    }

    setNote(nextState);
    }
  };

  const deleteById = () => {
    const nextState = produce(note, draft => { 
      const index = draft.findIndex(note => note.noteID === id) 
      if (index !== -1) draft.splice(index, 1)
    }); 

    if (typeof window !== 'undefined') {
      localStorage.setItem('note', JSON.stringify(nextState));
    }

    setNote(nextState);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const getData = localStorage.getItem('note');

      if (getData !== '' && getData !== null) {
        return setNote(JSON.parse(getData));
      }
      return setNote([]);
    }
  }, 1);

  return (
    <>
      <div className='inputs'>
        <label className='notelabel' htmlFor="noteinput">Note Title:</label>
        <input id="notetitle" className='noteinput' type="text" placeholder="Enter a note title" />
        <label className='notelabel' htmlFor="noteinput">Note Category:</label>
        <input id='notecategory' className='noteinput' type="text" placeholder='Enter note category' />
        <label className='notelabel' htmlFor="noteinput">Note:</label>
        <input id="noteinput" className='noteinput' type="text" placeholder="Enter a new note" />
        <div className='add-btn'>
          <button onClick={() => handleClick()}>Add note</button>
        </div>
      </div>
      <Notes note={note} deleteById={deleteById} noteID={note.noteID}/>
    </>
  );
};