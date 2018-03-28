import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn, pulse } from 'react-animations';
import Sticky from 'react-sticky-el';
import 'typeface-rajdhani';


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
          <NavContent>
            <NavOption onClick={() => this.handleClick('Skills')}>
              <NavText>Skills</NavText>
              {this.props.selectedNav === 'Skills' ? <CyanUnderline /> : <WhiteUnderline />}
            </NavOption>
            <NavOption onClick={() => this.handleClick('Projects')}>
              <NavText>Projects</NavText>
              {this.props.selectedNav === 'Projects' ? <CyanUnderline /> : <WhiteUnderline />}
            </NavOption>
            <NavOption onClick={() => this.handleClick('Hire')}>
              <NavText>Hire Me</NavText>
              {this.props.selectedNav === 'Hire' ? <CyanUnderline /> : <WhiteUnderline />}
            </NavOption>
          </NavContent>
        </NavBarContainer>
      </Sticky>
    );
  }
}

export default NavBar;

const fadeInAnim = keyframes`${fadeIn}`;
const pulseAnim = keyframes`${pulse}`;

const NavBarContainer = styled.div`
  width: 100%;
  background-color: #0b0c10bf;
`;

const NavContent = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const NavOption = styled.div`
  color: white;
  flex-basis: 30%;
  text-align: center;
  background-color: #0b0c10eb;
  border-radius: 7px;
  box-shadow: 0 0 5px #66FCF1;
  margin: 10px auto 10px;

  &:hover {
    animation: 1s ${pulseAnim};
  }
`;

const NavText = styled.p`
  margin: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: 'Rajdhani';
  font-size: 1.5em;

  @media (max-width: 1000px) {
    padding-top: 0px;
    padding-bottom: 0px;
    font-size: 1.2em;
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
