import React from 'react';
import PropTypes from 'prop-types';
import { StyledImage } from './Img.styles';
import { PaddingContainer } from '../PaddingContainer';

const Img = props => {
  const { srcUrl } = props;

  return (
  <PaddingContainer top='75px' >
    <StyledImage src={srcUrl} fluid />
  </PaddingContainer >
  );
}

Img.propTypes = {
  imgSrc: PropTypes.string
}

export { Img };