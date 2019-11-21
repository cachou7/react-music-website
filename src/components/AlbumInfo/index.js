import React from 'react';
import PropTypes from 'prop-types';
import { PaddingContainer } from '../PaddingContainer';
import { Text } from '../Text';
import { AlbumDetails } from '../AlbumDetails';

const AlbumInfo = ({
  headerTitle
}) => (
    <PaddingContainer top='75px' style={{ margin: 'auto' }}>
      <Text type="infoHeader">
        {headerTitle}
      </Text>
      <Text type="infoContent">
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.
      </Text>
      <AlbumDetails title='Artist' info='Frau Power' />
      <AlbumDetails title='Label' info='Dommedia' />
      <AlbumDetails title='Release Date' info='October 10, 2017' />
      <AlbumDetails title='Genre' info='Pop' />
      <AlbumDetails title='People' info='Jack Johnes, Routh' />
    </PaddingContainer>
  );

AlbumInfo.propTypes = {
  headerTitle: PropTypes.string
}

export { AlbumInfo };