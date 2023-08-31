import React from 'react';
import './style.css'

function List({ list, onListChange, themeMode }) {

  const tableStyle = {
    backgroundColor: themeMode === 'dark' ? 'black' : 'pink',
    color: themeMode === 'dark' ? 'white' : 'black',
    border: themeMode === 'dark' ? '1px solid white' : '1px solid black',
  };

  const handleDelete = (id) => {
    onListChange(prevListState => {
      return prevListState.filter((el) => el.id !== id);
    });
  };

  const handleComplete = (id) => {
    onListChange(prevListState => {
      return prevListState.map(el => {
        if (el.id === id) {
          return { ...el, completed: true };
        }
        return el;
      });
    });
  };

  return (
    <table>
      <thead>
        {list.length
          ? <tr style={tableStyle}>
              <th>Title</th>
              <th>Action</th>
            </tr>
          : null   
        }
        </thead>
      <tbody>
        {list.map((el,i) => (
          <tr style={tableStyle} key={i}>
            <td style={{ color: el.completed ? 'red' : 'green' }}>{el.title}</td>
            <td>
              {el.completed
                ? <button onClick={() => handleDelete(el.id)}>Delete</button>
                : <button onClick={() => handleComplete(el.id)}>Complete</button>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;