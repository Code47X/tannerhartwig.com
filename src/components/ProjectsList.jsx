import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Banner from './Banner';
import 'animate.css/animate.min.css';

// Project Banners
import reactMovieDbBanner from '../banners/react-movie-db-banner.svg';
import txCrimeHeatBaanner from '../banners/tx-crime-heatmap-banner.svg';

const projects = [
  { name: 'React Movie DB', banner: reactMovieDbBanner },
  { name: 'Texas Crime Heatmap', banner: txCrimeHeatBaanner },
];

class ProjectsList extends PureComponent {
  render() {
    return (
      <ProjectsListContainer className="Projects">
        <ProjectsContainer>
          <Title>My Projects</Title>
          {projects.map(project => (
            <Project key={project.name}>
              <ScrollAnimation animateIn="fadeInUp" duration={0.5} offset={50} afterAnimatedIn={() => this.props.changeSelectedNav('Projects')}>
                <Banner banner={project.banner} />
              </ScrollAnimation>
            </Project>
          ))}
        </ProjectsContainer>
      </ProjectsListContainer>
    );
  }
}

export default ProjectsList;

const ProjectsListContainer = styled.div`

`;

const Title = styled.h1`
  margin: auto;
  padding-top: 75px;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #5d6063;
`;

const Project = styled.div`
  flex: 1;
  margin: 35px;
`;

