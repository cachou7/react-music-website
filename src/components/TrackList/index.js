import React from "react";
import { PaddingContainer } from '../PaddingContainer';
import { Text } from '../Text';
import { Span } from '../Span';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useAudioPlayer } from "../../global/hooks/useAudioPlayer";
import { iTunesLink } from '../../global/constants/constants';
import { standardSpan, selectedSpan, PaddedDiv, styledIcon } from './TrackList.styles';

const TrackList = () => {
  const { trackList, currentTrackName, playTrack } = useAudioPlayer();
  return (
    <PaddingContainer top='75px'>
      <Text type="infoHeader">
        Tracklist
      </Text>
      {trackList.map((track, index) => (
        <PaddedDiv>
          <span style={currentTrackName === track.name ? selectedSpan : standardSpan} onClick={() => playTrack(index)}>
            {currentTrackName === track.name ? <FontAwesomeIcon icon={faPlay} style={styledIcon} /> : <span>{index + 1}. </span>}
            {track.name}
          </span>
          <a href={track.buyLink ? iTunesLink : track.url} download>
            <Span type='buyTrack'>{track.buyLink ? 'buy track' : 'download'}</Span>
          </a>
        </PaddedDiv>
      ))
      }
    </PaddingContainer >
  )
}

export { TrackList }