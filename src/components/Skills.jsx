import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import 'typeface-jura';
import 'animate.css/animate.min.css';

// Icons
import rubyIcon from '../icons/ruby-icon.png';
import railsIcon from '../icons/rails-icon.png';
import angularIcon from '../icons/angular-icon.png';
import reactIcon from '../icons/react-icon.png';
import gitIcon from '../icons/git-icon.png';
import unityIcon from '../icons/unity-icon.png';
import vrtkIcon from '../icons/vrtk-icon.png';
import d3Icon from '../icons/d3-icon.png';
import gqlIcon from '../icons/gql-icon.png';
import meteorIcon from '../icons/meteor-icon.png';

class Skills extends PureComponent {
  render() {
    return (
      <SkillsContainer className="Skills">
        <Title>Skills</Title>
        <ScrollAnimation animateIn="fadeIn" duration={0.5} offset={0} afterAnimatedIn={() => this.props.changeSelectedNav('Skills')}>
          <ToolsHeader>My Forte</ToolsHeader>
        </ScrollAnimation>
        <IconsContainer>
          <Icon>
            <ScrollAnimation animateIn="fadeInLeft" duration={0.5} offset={50}>
              <IconImg src={rubyIcon} />
            </ScrollAnimation>
            <IconText>Ruby</IconText>
          </Icon>
          <Icon>
            <ScrollAnimation animateIn="fadeInLeft" duration={0.5} offset={50} delay={100}>
              <IconImg src={railsIcon} />
            </ScrollAnimation>
            <IconText>Rails</IconText>
          </Icon>
          <Icon>
            <ScrollAnimation animateIn="fadeInLeft" duration={0.5} offset={50} delay={200}>
              <IconImg src={angularIcon} />
            </ScrollAnimation>
            <IconText>Angular</IconText>
          </Icon>
          <Icon>
            <ScrollAnimation animateIn="fadeInLeft" duration={0.5} offset={50} delay={300}>
              <IconImg src={reactIcon} />
            </ScrollAnimation>
            <IconText>React</IconText>
          </Icon>
          <Icon>
            <ScrollAnimation animateIn="fadeInLeft" duration={0.5} offset={50} delay={400}>
              <IconImg src={gitIcon} />
            </ScrollAnimation>
            <IconText>Git</IconText>
          </Icon>
        </IconsContainer>

        <ScrollAnimation animateIn="fadeIn" duration={0.5} offset={0} afterAnimatedIn={() => this.props.changeSelectedNav('Skills')}>
          <ToolsHeader>Other Skills</ToolsHeader>
        </ScrollAnimation>
        <IconsContainer>
          <Icon>
            <ScrollAnimation animateIn="fadeInRight" duration={0.5} offset={50} delay={400}>
              <IconImg src={unityIcon} />
            </ScrollAnimation>
            <IconText>Unity</IconText>
          </Icon>
          <Icon>
            <ScrollAnimation animateIn="fadeInRight" duration={0.5} offset={50} delay={300}>
              <IconImg src={vrtkIcon} />
            </ScrollAnimation>
            <IconText>VRTK</IconText>
          </Icon>
          <Icon>
            <ScrollAnimation animateIn="fadeInRight" duration={0.5} offset={50} delay={200}>
              <IconImg src={meteorIcon} />
            </ScrollAnimation>
            <IconText>Meteor</IconText>
          </Icon>
          <Icon>
            <ScrollAnimation animateIn="fadeInRight" duration={0.5} offset={50} delay={100}>
              <IconImg src={gqlIcon} />
            </ScrollAnimation>
            <IconText>GraphQL</IconText>
          </Icon>
          <Icon>
            <ScrollAnimation animateIn="fadeInRight" duration={0.5} offset={50}>
              <IconImg src={d3Icon} />
            </ScrollAnimation>
            <IconText>D3</IconText>
          </Icon>
        </IconsContainer>
      </SkillsContainer>
    );
  }
}

export default Skills;

const SkillsContainer = styled.div`
  background-color: #5d6063;
`;

const Title = styled.h1`
  text-align: center;
  padding-top: 75px;
  font-family: 'jura';
`;

const ToolsHeader = styled.h2`
  text-align: center;
  font-family: 'jura';
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: auto;
  background-color: #1F2833;
  text-align: center;
  border-radius: 30px;
  padding-top: 35px;
  padding-left: 10px;
  padding-right: 10px;
`;

const Icon = styled.div`
  flex: 1;
`;
const IconImg = styled.img`
  max-width: 90%;
  height: 250px;
  background-color: #5d6063;
  border-radius: 70px;
  box-shadow: 0 0 20px #66FCF1;

  @media (max-width: 1400px) {
    height: 200px;
    border-radius: 40px;
  }

  @media (max-width: 1100px) {
    height: 140px;
    border-radius: 20px;
  }

  @media (max-width: 750px) {
    height: 75px;
    border-radius: 10px;
  }

  @media (max-width: 500px) {
    height: 50px;
    border-radius: 7px;
  }
`;

const IconText = styled.h3`
  color: white;
  font-family: 'jura';

  @media (max-width: 750px) {
    font-size: 1em;
  }
`;
