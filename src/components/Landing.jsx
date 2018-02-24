import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import ScrollAnimation from 'react-animate-on-scroll';
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';

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
        what you think! As Linus Torvalds said, "Talk is cheap. Show me the code."
      </AboutText>
      <ScrollAnimation animateIn="fadeIn" animateOnce duration={5} delay={5500} offset={0}>
        <Arrow className="arrow bounce">
          <i className="fa fa-angle-down fa-2x" />
        </Arrow>
      </ScrollAnimation>
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
  width: 610px;
  text-align: center;
  margin: 100px auto 0px;

  @media (max-width: 650px) {
    font-size: 0.75em;
    width: 75%;
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
