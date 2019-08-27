import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Banner from './Banner';
import 'typeface-jura';
import 'animate.css/animate.min.css';

// Project Banners
import pwpBanner from '../banners/pwp-banner.svg';
import reactMovieDbBanner from '../banners/react-movie-db-banner.svg';
import txCrimeHeatBanner from '../banners/tx-crime-heatmap-banner.svg';
import hotsInfoBanner from '../banners/hots-info-banner.svg';
import rchBanner from '../banners/rch-banner.svg';

const projects = [
  { name: 'Proceed with Protocol', banner: pwpBanner, url: 'https://www.youtube.com/watch?v=ZkceC1eFtbs&list=PLVUwa2nMf4IHiDuzCsR7v8aQFwT52hDn1&index=2' },
  { name: 'React Movie DB', banner: reactMovieDbBanner, url: 'https://github.com/Code47X/react-movie-db' },
  { name: 'Texas Crime Heatmap', banner: txCrimeHeatBanner, url: 'https://github.com/Code47X/TX-Data-Project' },
  { name: 'HotS Info', banner: hotsInfoBanner, url: 'https://github.com/Code47X/react-hots-site' },
  { name: 'Reddit Comment Highlighter', banner: rchBanner, url: 'https://chrome.google.com/webstore/detail/reddit-top-level-comment/bmikcahnmnmpcppedcdngcmfongjcloo?hl=en' },
];

class ProjectsList extends PureComponent {
  render() {
    return (
      <ProjectsListContainer className="Projects">
        <ProjectsContainer>
          <Title>Projects</Title>
          {projects.map(project => (
            <Project key={project.name}>
              <ScrollAnimation animateIn="fadeInUp" duration={0.5} offset={50} afterAnimatedIn={() => this.props.changeSelectedNav('Projects')}>
                <a href={project.url}>
                  <Banner banner={project.banner} />
                </a>
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
  font-family: 'jura';
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

