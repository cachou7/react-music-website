import React from 'react';
import PropTypes from 'prop-types';
import { PaddingContainer } from '../PaddingContainer';
import { Text } from '../Text';
import { StyledImg } from './AvailableOnInfo.styles';


const AvailableOnInfo = ({
  headerTitle
}) => (
    <PaddingContainer top='50px'>
      <Text type='infoHeader'>
        {headerTitle}
      </Text>
      <a href="https://www.apple.com/itunes/">
        <StyledImg src="https://mixtape.select-themes.com/wp-content/themes/mixtapewp/assets/img/stores/itunes.png" />
      </a>
      <a href="https://play.google.com/store">
        <StyledImg src="https://mixtape.select-themes.com/wp-content/themes/mixtapewp/assets/img/stores/google-play.png" />
      </a>
    </PaddingContainer>
  );

AvailableOnInfo.propTypes = {
  headerTitle: PropTypes.string
}

export { AvailableOnInfo };