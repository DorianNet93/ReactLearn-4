import React, { useState } from 'react';
import List from '../List/List';
import Statistics from '../Statistics/Statistics';
import ThemeMode from '../ThemeMode/ThemeMode';

function Todo() {

  let listDefault = [
    {"title":"ab quibusdam nostrum","completed":true,"id":"1"},
    {"title":"eaque debitis expedita","completed":false,"id":"2"},
    {"title":"eos ullam reiciendis","completed":true,"id":"3"},
    {"title":"voluptatum veniam architecto","completed":true,"id":"4"},
    {"title":"itaque tempora architecto","completed":false,"id":"5"},
  ]

  const [listState, setListState] = useState(listDefault);
  const [themeMode, setThemeMode] = useState('light');

  
  const handleThemeChange = (newTheme) => {
    setThemeMode(newTheme);
  };

  return (
    <div className='container__todo'>
      <ThemeMode onThemeChange={handleThemeChange}/>
      <Statistics list={listState} />
      <List list={listState} onListChange={setListState} themeMode={themeMode}/>
    </div>
  );
}

export default Todo;