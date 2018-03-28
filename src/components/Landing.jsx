import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import 'font-awesome/css/font-awesome.min.css';
import 'typeface-jura';
import 'typeface-orbitron';

import NameHeader from './NameHeader';

const Landing = () => (
  <LandingContainer>
    <Particles width="100%" height="100vh" params={particlesConfig} />
    <Info>
      <NameHeader />
      <AboutText>
        Hey there! I'm Tanner, a full-stack developer with a taste for minimalist design.
        While web development is my forte, I enjoy developing on a variety of different platforms and SDKs.
        Everything from VR game development with Unity to data visualization with D3. If it involves programming
        chances are I'm intrested in it. I believe software development is as much an art as it is a science,
        and pride myself on writing clean, human readable code. Have a look at some of my projects and let me know
        what you think! Linus Torvalds said it best, "Talk is cheap. Show me the code."
      </AboutText>
      <Arrow className="arrow bounce">
        <i className="fa fa-angle-down fa-2x" />
      </Arrow>
    </Info>
  </LandingContainer>
);

export default Landing;

const LandingContainer = styled.div`
  height: 100vh;
`;

const Info = styled.div`
  position: relative;
  bottom: 90%;
`;

const AboutText = styled.p`
  width: 700px;
  text-align: center;
  margin: 100px auto 0px;
  font-family: 'jura';
  font-size: 1.5em;

  @media (max-width: 750px) {
    font-size: .75em;
    width: 85%;
    margin-top: 50px;
  }
`;

const Arrow = styled.div`
  text-align: center;
`;

const particlesConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#66FCF1',
      opacity: 0.75,
      width: 1.5,
    },
    move: {
      enable: true,
      speed: 5,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'bounce',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  retina_detect: false,
};
