import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';

const Hire = () => (
  <HireContainer>
    <Parallax
      blur={0}
      bgImage={require('../backgrounds/atx.jpg')}
      bgImageAlt="Austin, TX"
      strength={150}
    >
      <ParallaxText>Hire me in Austin!</ParallaxText>
      <ParallaxBody />
    </Parallax>
    <div style={{ height: 10000 }} />
  </HireContainer>
);

export default Hire;

const HireContainer = styled.div`
  background-color: #5d6063;
  position:relative;
  top: -40px;

  @media (max-width: 700px) {
    top: -25px;
  }
`;

const ParallaxBody = styled.div`
  height: 600px;

  @media (max-width: 700px) {
    height: 300px;
  }
`;

const ParallaxText = styled.div`
  background-color: #000000a8;
  font-size: 60px;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  text-align: center;
  position: relative;
  top: 295px;

  @media (max-width: 700px) {
    font-size 35px;
    top: 160px;
  }
`;
