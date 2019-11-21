import React from 'react';
import { PaddingContainer } from '../PaddingContainer';
import { StyledCol, StyledRow, StyledInfoRow } from './AudioControls.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faFastBackward, faFastForward } from '@fortawesome/free-solid-svg-icons';
import { useAudioPlayer } from '../../global/hooks/useAudioPlayer';
import { AudioDetails } from '../AudioDetails';
import { AudioBar } from '../AudioBar';

const AudioControls = () => {
  const { isPlaying, togglePlay, playPrevTrack, playNextTrack, setClickedTime } = useAudioPlayer();

  return (
    <PaddingContainer className='player' top='50px'>
      <StyledRow>
        <StyledCol back xs={4} onClick={playPrevTrack}>
          <FontAwesomeIcon icon={faFastBackward} size="1x" />
        </StyledCol>
        <StyledCol play xs={4} onClick={togglePlay}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="sm" />
        </StyledCol>
        <StyledCol forward xs={4} onClick={playNextTrack}>
          <FontAwesomeIcon icon={faFastForward} size="1x" />
        </StyledCol>
      </StyledRow>
      <AudioBar onTimeUpdate={(time) => setClickedTime(time)} />
      <StyledInfoRow>
        <AudioDetails />
      </StyledInfoRow>
    </PaddingContainer >
  );
};

export { AudioControls };