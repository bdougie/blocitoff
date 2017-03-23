import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
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
      </div>
    );
  }
}

export default App;
