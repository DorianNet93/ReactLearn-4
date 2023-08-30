import React from 'react';
import './style.css'

function List({ list, onDelete, onComplete, themeMode }) {

  const tableStyle = {
    backgroundColor: themeMode === 'dark' ? 'black' : 'pink',
    color: themeMode === 'dark' ? 'white' : 'black',
    border: themeMode === 'dark' ? '1px solid white' : '1px solid black',
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
                ? <button onClick={() => onDelete(el.id)}>Delete</button>
                : <button onClick={() => onComplete(el.id)}>Complete</button>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;