import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInLeft, fadeInRight } from 'react-animations';
import ScrollAnimation from 'react-animate-on-scroll';
import 'typeface-orbitron';
import 'animate.css/animate.min.css';

const NameHeader = () => (
  <NameContainer>
    <DividerLineTop />
    <ScrollAnimation animateIn="fadeIn" animateOnce duration={3} delay={1000} offset={0}>
      <MyName>Tanner Hartwig</MyName>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeInDown" animateOnce duration={1} delay={2000} offset={0}>
      <WebDevTag>Web Developer</WebDevTag>
    </ScrollAnimation>
    <DividerLineBot />
  </NameContainer>
);

export default NameHeader;

const fadeLeftAnim = keyframes`${fadeInLeft}`;
const fadeRightAnim = keyframes`${fadeInRight}`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content : center;
  background-color: #0b0c10bf;
  padding: 30px 0px;
`;

const MyName = styled.h1`
  color: #66FCF1;
  margin: 7px 0px;
  font-family: 'orbitron';
  font-size: 2.5em;
`;

const DividerLineTop = styled.div`
  width: 500px;
  border-style: solid;
  border-width: 2px;
  border-color: #C5C6C7;
  animation: 1s ${fadeRightAnim};
`;

const DividerLineBot = styled.div`
width: 500px;
border-style: solid;
border-width: 2px;
border-color: #C5C6C7;
animation: 1s ${fadeLeftAnim};
`;

const WebDevTag = styled.p`
  color: white;
  margin: -2px 0px 7px;
  font-family: 'orbitron';
  font-size: 1.5em;
`;

