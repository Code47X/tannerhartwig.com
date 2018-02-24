import React, { Component } from 'react';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <NavBar />
      </div>
    );
  }
}

export default App;
