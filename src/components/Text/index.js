import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './Text.styles';

const Text = ({
  type,
  children
}) => (
    <StyledText type={type}>
      {children}
    </StyledText>
  );

Text.propTypes = {
  children: PropTypes.node.isRequired
}

export { Text };