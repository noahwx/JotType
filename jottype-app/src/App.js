import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import logo from './logo.svg';
import Favicon from 'react-favicon';
import './index.css';
import MobileNote from './components/MobileNote';

//Version 4.1.501

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
        <MobileNote toggleTheme={toggleTheme}/>
      </div>
    </>
  );
}

export default App;
