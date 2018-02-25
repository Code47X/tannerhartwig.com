import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn, pulse } from 'react-animations';
import Sticky from 'react-sticky-el';

const smoothScroll = require('smoothscroll');

class NavBar extends PureComponent {
  handleClick = (navOption) => {
    this.props.changeSelectedNav(navOption);

    const destination = document.querySelector(`.${navOption}`);
    smoothScroll(destination);
  }

  render() {
    return (
      <Sticky stickyStyle={{ zIndex: 2 }}>
        <NavBarContainer>
          <NavOption onClick={() => this.handleClick('Skills')}>
            <p>Skills</p>
            {this.props.selectedNav === 'Skills' ? <CyanUnderline /> : <WhiteUnderline />}
          </NavOption>
          <NavOption onClick={() => this.props.changeSelectedNav('Projects')}>
            <p>Projects</p>
            {this.props.selectedNav === 'Projects' ? <CyanUnderline /> : <WhiteUnderline />}
          </NavOption>
          <NavOption onClick={() => this.props.changeSelectedNav('Hire Me')}>
            <p>Hire Me</p>
            {this.props.selectedNav === 'Hire Me' ? <CyanUnderline /> : <WhiteUnderline />}
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
  margin: 10px auto 0px;
`;

const NavOption = styled.div`

  color: white;
  flex-basis: 25%;
  text-align: center;
  background-color: #0b0c10eb;
  border-radius: 7px;
  box-shadow: 0 0 5px #66FCF1;

  &:hover {
    animation: 1s ${pulseAnim};
  }
`;

const WhiteUnderline = styled.div`
  margin: 0px auto 5px;
  height: 5px;
  width: 75%;
  background-color: white;
`;

const CyanUnderline = styled.div`
  margin: 0px auto 5px;
  height: 5px;
  width: 75%;
  background-color: #66FCF1;
  animation: 1.5s ${fadeInAnim}
`;
