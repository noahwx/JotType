import React from 'react';
import Note from './components/Note';
import logo from './logo.svg';
import Favicon from 'react-favicon';
import './index.css';

//Version 2.0.0

function App() {
  return (
    <>
      <Favicon url={logo} />
      <Note />
    </>
  );
}

export default App;
