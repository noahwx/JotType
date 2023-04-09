import React from 'react';
import Favicon from 'react-favicon';
import logo from './assets/logo.svg';
import Note from './components/Note';
import './index.css';

//Version 0.0.200

function App() {
  return (
    <>
      <Favicon url={logo} />
      <h1>Jottype</h1>
      <p>Version 0.0.001</p>
      <Note />
    </>
  );
}

export default App;
