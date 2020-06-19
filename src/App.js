import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import ProjectsList from './components/ProjectsList';
import Skills from './components/Skills';
import Hire from './components/Hire';
import Footer from './components/Footer';
import closeIcon from './icons/close-icon.svg';
import './App.css';

class App extends PureComponent {
  state = {
    selectedNav: '',
    updateModalOpen: true,
  }

  changeSelectedNav = (newNav) => {
    this.setState({
      ...this.state,
      selectedNav: newNav,
    });
  }

  closeUpdateModal = () => {
    this.setState({
      ...this.state,
      updateModalOpen: false,
    });
  }


  render() {
    return (
      <div className="App">
        <Landing />
        <NavBar selectedNav={this.state.selectedNav} changeSelectedNav={this.changeSelectedNav} />
        <ProjectsList changeSelectedNav={this.changeSelectedNav} />
        <Skills changeSelectedNav={this.changeSelectedNav} />
        <Hire />
        <Footer />
        {
          this.state.updateModalOpen ?
            <ModalContainer>
              <UpdateModal>
                <UpdateTitle>New Portfolio Coming Soon!</UpdateTitle>
                <p>
                  This site was built quite a while ago, and is no longer an accurate representation of my ability.
                  A cleaner, more modern portfolio is currently being built from the ground up to better reflect my frontend work!
                  Stay tuned!
                </p>
                <CloseIcon src={closeIcon} onClick={() => this.closeUpdateModal()} />
              </UpdateModal>
            </ModalContainer>
            :
            null
        }
      </div >
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 10px 10px;
`;

const UpdateTitle = styled.h3`
  color: white;
`;
const UpdateModal = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 500px;
  padding: 5px 20px;
  background: #0095ffeb;
  border-radius: 10px;
  font-family: 'jura';

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const CloseIcon = styled.img`
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  padding: 8px;
  width: 25px;
`;

export default App;
