import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './Span.styles';

const Span = ({
  type,
  children
}) => (
    <StyledText type={type}>
      {children}
    </StyledText>
  );

Span.propTypes = {
  children: PropTypes.node.isRequired
}

export { Span };