import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from './Icon.styles.js';

const Icon = ({
  align,
  type
}) => (
    <StyledIcon icon={type} align={align} />
  );

Icon.propTypes = {
  type: PropTypes.isRequired
}

export { Icon };