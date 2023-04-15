import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import logo from './logo.svg';
import Favicon from 'react-favicon';
import './index.css';

//Version 5.0.252

function App() {

  const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      if (theme === 'light') {
          setTheme('dark');
      } else {
          setTheme('light');
      }
  };

  useEffect(() => {
      localStorage.setItem('theme', theme);
      document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div className={`App ${theme}`}>
        <button onClick={toggleTheme} className='Themebtn'>Toggle Theme</button>
        <Favicon url={logo} />
        <Note toggleTheme={toggleTheme}/>
      </div>
    </>
  );
}

export default App;
