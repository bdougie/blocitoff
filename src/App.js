import React, { Component } from 'react';
import './App.css';
import db from './lib/api.js';

class App extends Component {
// read about this
  state = {todos: []}

// look this up
  componentDidMount() {
    this.fetchTodos()
  }

  fetchTodos() {
    db.fetchAllRepoData().then((res) => {
      this.setState({todos: res})
    })
  }

// read about immutable toObject()
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <div className="app-title">
          <h2>Bloc It Off</h2>
        </div>
        <p className="header-box">
          Current Task
        </p>
        <div className="input">
          <input className="left" type="text" placeholder="Enter new task" />
          <input className="right" type="text" placeholder="high, med, low" />
          <button className="add">Add</button>
        </div>
        <div className="todos">
          <ul>
          {this.state.todos.map((todo) => (
            <li>{todo.toObject().title}</li>
          ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
