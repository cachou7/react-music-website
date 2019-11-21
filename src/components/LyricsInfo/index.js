import React from 'react';
import PropTypes from 'prop-types';
import { PaddingContainer } from '../PaddingContainer';
import { Text } from '../Text';
import { Accordion } from '../Accordion';

const LyricsInfo = ({
  headerTitle
}) => (
    <PaddingContainer top='50px'>
      <Text type="infoHeader">
        {headerTitle}
      </Text>
      <Accordion />
    </PaddingContainer>
  );

LyricsInfo.propTypes = {
  headerTitle: PropTypes.string
}

export { LyricsInfo };