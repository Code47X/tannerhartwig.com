import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => (
  <FooterContainer>
    <SocialIconsContainer>
      <a href="https://github.com/Code47X">
        <SocialIcon className="fa fa-github-square fa-4x" />
      </a>
      <a href="https://www.linkedin.com/in/tannerhartwig/">
        <SocialIcon className="fa fa-linkedin-square fa-4x" />
      </a>
    </SocialIconsContainer>
    <FooterText>
      Nerd like me?<br />
      <a href="https://github.com/Code47X/tannerhartwig.com" style={{ textDecoration: 'none' }}><Cyan>Check out the source</Cyan></a>
      <PullRight>Made with <i className="fa fa-heart" style={{ color: 'white' }} /> by <Cyan>Tanner</Cyan></PullRight>
    </FooterText>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.div`
  height: 400px;
  width: 100%;
  background-color: black;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
`;

const SocialIcon = styled.i`
  color: white;
  margin: 25px;
`;

const FooterText = styled.p`
  position: relative;
  top: -10px;
  margin-left: 5px;
  margin-right: 5px;
  color: white;
`;

const PullRight = styled.span`
  float: right;
`;

const Cyan = styled.span`
  color: #66FCF1;
`;
