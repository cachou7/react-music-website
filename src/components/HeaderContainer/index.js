import React from 'react';
import { Text } from '../Text';
import { StyledHeader } from './HeaderContainer.styles';

const HeaderContainer = props => {
  const { albumName } = props;

  return (
    <StyledHeader>
        <Text type="headerTitle">Mixtape / { albumName } </Text>
        <Text type="subHeader">{ albumName }</Text>
    </StyledHeader>
  );
}

export { HeaderContainer };