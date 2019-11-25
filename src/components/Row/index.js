import React from 'react';
import PropTypes from 'prop-types';
import { StyledRow } from './Row.styles';

const Row = ({
  children
}) => (
    <StyledRow>
      {children}
    </StyledRow>
  );

Row.propTypes = {
  children: PropTypes.node.isRequired
}

export { Row };