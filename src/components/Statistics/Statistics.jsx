import React from 'react';

function Statistics({list}) {
  const completedTasks = list.filter(el => el.completed).length;
  const inProgressTasks = list.filter(el => !el.completed).length;

  return (
    <ul>
      <li>All tasks: <b>{list.length}</b></li>
      <li>Completed tasks: <b>{completedTasks}</b></li>
      <li>In progress tasks: <b>{inProgressTasks}</b></li>
    </ul>
  );
}

export default Statistics;