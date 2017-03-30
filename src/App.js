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

  render() {
    const {todos} = this.state;
    const keys = Object.keys(todos);

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
          {keys.map((key) => (
            <li>{todos[key].title}</li>
          ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
