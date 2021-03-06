import React from 'react';
import PropTypes from 'prop-types';
import { PaddingContainer } from '../PaddingContainer';
import { Text } from '../Text';
import { AlbumDetails } from '../AlbumDetails';

function parseArtists(mainArtist, otherArtists) {
  console.log(otherArtists)
  let i;
  let j;
  let otherArtistsList = new Set();
  let res = "";
  for (i = 0; i < otherArtists.length; ++i) {
    for (j = 0; j < otherArtists[i].artists.length; ++j) {
      if (otherArtists[i].artists[j].name !== mainArtist) {
        otherArtistsList.add(otherArtists[i].artists[j].name);
      }
    }
  }

  let iter = otherArtistsList.values();
  if (otherArtistsList.size >= 1) {
    res += iter.next().value
  }
  for (i = 1; i < otherArtistsList.size; ++i) {
    res += ", " + iter.next().value;
  }
  return res;
}

const AlbumInfo = ({
  headerTitle,
  artistName,
  labelName,
  releaseDate,
  albumGenre,
  otherArtists
}) => {
  
  if (!albumGenre) {
    albumGenre = "N/A"
  }

  return (
    <PaddingContainer top='75px' style={{ margin: 'auto' }}>
      <Text type="infoHeader">
        {headerTitle}
      </Text>
      <Text type="infoContent">
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.
      </Text>
      <AlbumDetails title='Artist' info={ artistName } />
      <AlbumDetails title='Label' info={ labelName } />
      <AlbumDetails title='Release Date' info={ releaseDate } />
      <AlbumDetails title='Genre' info={ albumGenre } />
      <AlbumDetails title='People' info={ parseArtists(artistName, otherArtists) } />
    </PaddingContainer>
  );
}

AlbumInfo.propTypes = {
  headerTitle: PropTypes.string
}

export { AlbumInfo };