import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeader } from './HeaderContainer.styles';

const HeaderContainer = props => {
  const { children } = props;

  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  );
}

HeaderContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export { HeaderContainer };