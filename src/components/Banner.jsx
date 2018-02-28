import React, { PureComponent } from 'react';
import styled from 'styled-components';

class Banner extends PureComponent {
  render() {
    return (
      <BannerImg alt="banner" src={this.props.banner} />
    );
  }
}

export default Banner;

const BannerImg = styled.img`
  width: 820px;
  max-width: 100%;
  border-radius: 25px;
  box-shadow: 0 0 35px #66FCF1;

  &:hover {
    box-shadow: 0 0 50px #66FCF1;
  }
`;
