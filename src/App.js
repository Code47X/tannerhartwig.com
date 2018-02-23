import React, { Component } from 'react';
import NameHeader from './components/NameHeader';
import AboutMe from './components/AboutMe';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameHeader />
        <AboutMe />
      </div>
    );
  }
}

export default App;
