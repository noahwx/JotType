import React, { useState, useEffect } from "react";
import produce from 'immer';

const Note = props => props.data.map(note => <div>{note.text}</div>);

const Home = () => {

    const initialData = [{ text: 'Loading Notes ... ' }];
    const [data, setData] = useState(initialData);

    const handleClick = () => {
      const text = document.querySelector('#notetitle').value.trim();
      if (text) {
        const nextState = produce(data, draftState => {
          draftState.push({ text });
        });
        document.querySelector('#notetitle').value = '';

        if (typeof window !== 'undefined') {
          localStorage.setItem('data', JSON.stringify(nextState));
        }

        setData(nextState);
      }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const getData = localStorage.getItem('data');
  
          if (getData !== '' && getData !== null) {
            return setData(JSON.parse(getData));
          }
          return setData([]);
        }
    }, []);

    const handleDelete = () => {
        const nextState = produce(data, draftState => {
            draftState.pop();
        });
    
        if (typeof window !== 'undefined') {
            localStorage.setItem('data', JSON.stringify(nextState));
        }
    
        setData(nextState);
    };

    return ( 
        <div className='Home'>

            <input id="notetitle" className="note-title" type="text" placeholder="Note Title" />
            <textarea id="noteinput" className="note-area" type="text" placeholder="Add to Note" />

            <button onClick={() => handleClick()}>Create note</button> 
            <button onClick={() => handleDelete()}>Delete Note</button>

            <Note data={data} />
        </div>
     );
}
 
export default Home;