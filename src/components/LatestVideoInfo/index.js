import React from 'react';
import PropTypes from 'prop-types';
import { PaddingContainer } from '../PaddingContainer';
import { Text } from '../Text';
import { PlayerWrapper, StyledFrame } from './LatestVideo.styles';

const LatestVideoInfo = ({
  headerTitle
}) => {

  return (
    <PaddingContainer top='50px'>
      <Text type='infoHeader'>
        {headerTitle}
      </Text>
      <PlayerWrapper>
        <StyledFrame src="https://www.youtube.com/embed/si81bIoZRJQ" frameborder="0" allow="autoplay;fullscreen" allowfullscreen />
      </PlayerWrapper>
    </PaddingContainer >
  )
};

LatestVideoInfo.propTypes = {
  headerTitle: PropTypes.string
}

export { LatestVideoInfo };