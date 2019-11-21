import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './PaddingContainer.styles';

const PaddingContainer = ({
  children,
  top,
  left
}) => {

  return (
    <StyledContainer top={top} left={left}>
      {children}
    </StyledContainer>
  );
}

PaddingContainer.propTypes = {
  top: PropTypes.string
}

export { PaddingContainer };