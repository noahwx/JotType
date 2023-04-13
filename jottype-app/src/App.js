import React from 'react';
import Note from './components/Note';
import logo from './logo.svg';
import Favicon from 'react-favicon';
import './index.css';

//Version 3.0.000

function App() {

  return (
    <>
      <Favicon url={logo} />
      <Note />
    </>
  );
}

export default App;
