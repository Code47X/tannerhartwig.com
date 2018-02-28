import React, { PureComponent } from 'react';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import ProjectsList from './components/ProjectsList';
import Skills from './components/Skills';
import './App.css';

class App extends PureComponent {
  state = {
    selectedNav: '',
  }

  changeSelectedNav = (newNav) => {
    this.setState({
      selectedNav: newNav,
    });
  }


  render() {
    return (
      <div className="App">
        <Landing />
        <NavBar selectedNav={this.state.selectedNav} changeSelectedNav={this.changeSelectedNav} />
        <ProjectsList changeSelectedNav={this.changeSelectedNav} />
        <Skills changeSelectedNav={this.changeSelectedNav} />
        <div style={{ height: 5000 }} /> // for testing scrolling
      </div>
    );
  }
}

export default App;
