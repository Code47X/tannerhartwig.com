import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class Skills extends PureComponent {
  render() {
    return (
      <SkillsContainer className="Skills">
        <ScrollAnimation animateIn="fadeIn" duration={0.5} offset={0} afterAnimatedIn={() => this.props.changeSelectedNav('Skills')}>
          <Title>Skills</Title>
        </ScrollAnimation>
      </SkillsContainer>
    );
  }
}

export default Skills;

const SkillsContainer = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  margin: auto;
  padding-top: 150px;
`;

