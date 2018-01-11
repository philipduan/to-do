import React, { Component } from 'react';
const ToDo = ({item, toggleComplete,removeToDo}) => {

  return(
    <li>{item.title}
      <input
         type="checkbox"
         id={item.id}
         checked={item.complete} 
         onChange={toggleComplete} />
      <label htmlFor={item.id}></label>
      <button>
         <i className="fa fa-trash" onClick={removeToDo}></i>
      </button>
   </li>
  ) 
    
};

export default ToDo;
