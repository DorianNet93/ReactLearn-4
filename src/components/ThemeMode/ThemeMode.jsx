import React, { useState } from 'react';
import './style.css'

function ThemeMode({ onThemeChange }) {
  const [themeMode, setThemeMode] = useState('light');

  const handleThemeChange = (event) => {
    const newThemeMode = event.target.value;
    setThemeMode(newThemeMode);
    onThemeChange(newThemeMode);
  };

  return (
    <div className='container__option'>
      <label htmlFor="theme">Choose theme mode: </label>
      <select id="theme" value={themeMode} onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}

export default ThemeMode;