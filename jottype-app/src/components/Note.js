import { useState, useEffect } from 'react';
import produce from 'immer';

const Notes = props => props.note.map(note =>

<div>
  <h3>{note.title}</h3>
  {note.text}
  <button onClick={() => props.handleDelete()}>Delete</button>
</div>);

export default () => {
  const initialData = [{ text: 'This is a note', title: 'Note'}];
  const [note, setNote] = useState(initialData);

  const handleClick = () => {
  const text = document.querySelector('#noteinput').value.trim();
  const title = document.querySelector('#notetitle').value.trim();
  if (text) {
    const nextState = produce(note, draftState => {
      draftState.push({ text, title});
    });
    document.querySelector('#noteinput').value = '';
    document.querySelector('#notetitle').value = '';

    if (typeof window !== 'undefined') {
      localStorage.setItem('note', JSON.stringify(nextState));
    }

    setNote(nextState);
    }
  };

  const handleDelete = () => {
    const nextState = produce(note, draftState => {
      draftState.pop();
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
  }, 0);

  return (
    <>
      <input id="notetitle" style={{ width: '80%' }} type="text" placeholder="Enter a note title" />
      <input id="noteinput" style={{ width: '80%' }} type="text" placeholder="Enter a new note" />
      <button onClick={() => handleClick()}>Add note</button>
      <Notes note={note} handleDelete={handleDelete} />
    </>
  );
};