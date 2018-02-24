import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn, pulse } from 'react-animations';
import Sticky from 'react-sticky-el';

class NavBar extends PureComponent {
  state = {
    selectedNav: '',
  }

  changeSelectedNav = (newNav) => {
    this.setState({
      selectedNav: newNav,
    });
  }

  handleClick = (navOption) => {
    // Function WIP
    this.changeSelectedNav(navOption);
    console.log(navOption);
  }

  render() {
    return (
      <Sticky stickyStyle={{ zIndex: 2 }}>
        <NavBarContainer>
          <NavOption onClick={() => this.handleClick('Skills')}>
            <p>Skills</p>
            {this.state.selectedNav === 'Skills' ? <CyanUnderline /> : <WhiteUnderline />}
          </NavOption>
          <NavOption onClick={() => this.handleClick('Projects')}>
            <p>Projects</p>
            {this.state.selectedNav === 'Projects' ? <CyanUnderline /> : <WhiteUnderline />}
          </NavOption>
          <NavOption onClick={() => this.handleClick('Hire Me')}>
            <p>Hire Me</p>
            {this.state.selectedNav === 'Hire Me' ? <CyanUnderline /> : <WhiteUnderline />}
          </NavOption>
        </NavBarContainer>
      </Sticky>
    );
  }
}

export default NavBar;

const fadeInAnim = keyframes`${fadeIn}`;
const pulseAnim = keyframes`${pulse}`;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  background-color: #C5C6C7;
  margin: 10px auto 0px;
`;

const NavOption = styled.div`

  color: white;
  flex-basis: 25%;
  text-align: center;
  background-color: #0b0c10bf;
  border-radius: 7px;

  &:hover {
    animation: 1s ${pulseAnim};
  }
`;

const WhiteUnderline = styled.div`
  margin: auto;
  height: 5px;
  width: 75%;
  background-color: white;
`;

const CyanUnderline = styled.div`
  margin: auto;
  height: 5px;
  width: 75%;
  background-color: #66FCF1;
  animation: 1.5s ${fadeInAnim}
`;
