// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <>
//        <div className={darkMode ? 'dark-mode' : 'light-mode'} >
//       <button onClick={toggleDarkMode} className='text-center'>
//         {darkMode ? 'Switch to Light Mo' : 'Switch to Dark Mode'}
//       </button>
//       <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      
//     </div>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className={`app-container ${theme}-mode`}>
      <div className="header">
        <div className="controls">
          <select onChange={handleThemeChange} value={theme} className="theme-selector">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="orange">Orange</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default App;
