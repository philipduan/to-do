import React, { Component } from 'react';
import ToDo from './todo';
import ToDoCount from './toDoCount';
import './App.css';
import ClearButton from './clearButton';
import PropTypes from 'prop-types';
import clearButton from './clearButton';

class App extends Component {
  constructor(){
    super();
    this.state = {
      toDo : [
        {id: 0, title: 'Learn React', complete: false},
        {id: 1, title: 'Love React', complete: false},
        {id: 2, title: 'Understand React', complete: false},
        {id: 3, title: 'Use React', complete: false},
       ],
      inputValue: '',
    }
    this._removeCompleted = this._removeCompleted.bind(this);
    this._addToDo = this._addToDo.bind(this);

  }

  _toggleComplete(item){
    let toDos = this.state.toDo.map( todo =>{
      if(item.id === todo.id){
        todo.complete = !todo.complete;
      }
      return todo;
    })

    this.setState({
      toDo: toDos,
    });
  }

  _removeToDo(item){
    let todos = this.state.toDo.filter(todo=> todo.id !== item.id);
    this.setState({
      toDo: todos,
    });
  }

  _removeCompleted() {
    let todos = this.state.toDo.filter((todo) => !todo.complete);
    this.setState({ toDo: todos });
 }

 _hasCompleted() {
  let complete = this.state.toDo.filter((todo) => todo.complete);
  return complete.length > 0 ? true : false;
}

_addToDo(event){
  event.preventDefault();
  const id = Math.random() * 1000000;
  if (this.toDoInput.value) {
     let newToDos = this.state.toDo.concat({
        id,
        title: this.toDoInput.value,
        complete: false
     });
     this.setState({
        toDo: newToDos,
        lastId: id
     });
     this.toDoInput.value = '';
  }
}

componentDidMount(){
  this.toDoInput.focus();
}

  render() {
    const number = 0;             
    return (
      <div className="todo-list" >
        <h1> ToDo App </h1>
        <div className="add-todo">
          <form name="addTodo" onSubmit={this._addToDo}>
              <input type="text" ref={(input) => (this.toDoInput = input)} />
              <span>(press enter to add)</span>
          </form>
        </div>
        <ul>
          {this.state.toDo.map((item,i) => <ToDo 
                                              key={this.state.toDo.id} 
                                              item={item}
                                              toggleComplete={this._toggleComplete.bind(this,item)}
                                              removeToDo={this._removeToDo.bind(this,item)}
                                              />)}
        </ul>
        <div className="todo-admin"> 
          <ToDoCount number={this.state.toDo.length} />
          {this._hasCompleted() ? (<ClearButton removeCompleted={this._removeCompleted}/>) : null}
        </div>
          
      </div>
    )
  }
}

export default App;

ToDoCount.propTypes = {
  number: PropTypes.number.isRequired
};

clearButton.propTypes = {
  removeCompleted: PropTypes.string.isRequired
};

ToDo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
  }),
};
