import React from 'react';
import styled, { keyframes } from 'styled-components';
import Particles from 'react-particles-js';

const AboutMe = () => (
  <AboutContainer>
    <Particles width="100%" height="calc(100vh - 143px)" params={particlesConfig} />
    <AboutText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae tellus vitae mauris aliquam porta.
      Fusce lacinia, felis nec pulvinar ultrices, ipsum odio mattis erat, ut fringilla lorem justo nec nibh.
      Maecenas porta in enim vitae gravida. Maecenas metus ante, congue ut dignissim a, condimentum eu metus.
      Sed nunc mi, molestie sit amet enim scelerisque, pharetra dictum purus. Integer dignissim metus sit amet
      orci blandit, non condimentum orci fermentum. Aenean condimentum augue nec vestibulum volutpat.
      Fusce pharetra finibus ex eget feugiat. Ut efficitur enim est, sit amet aliquet justo mattis et.
      Duis vitae dui euismod, efficitur sapien id, pharetra tellus. Integer sed quam ultrices, semper ipsum in, maximus nunc.
    </AboutText>
  </AboutContainer>
);

export default AboutMe;

const AboutContainer = styled.div`
  height: calc(100vh - 143px);
`;

const AboutText = styled.p`
  width: 600px;
  text-align: center;
  position: relative;
  bottom: 75%;
  margin: auto;

  @media (max-width: 650px) {
    font-size: 0.75em;
    width: 75%;
  }
`;

const particlesConfig = {
  particles: {
    number: {
      value: (window.innerWidth > 600 ? 30 : 15),
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
        color: '#ffffff',
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 2,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: (window.innerWidth > 600 ? 3 : 2),
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
      distance: (window.innerWidth > 600 ? 150 : 100),
      color: '#66fcf1',
      opacity: 1,
      width: (window.innerWidth > 600 ? 2.5 : 1.5),
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
  retina_detect: true,
};
