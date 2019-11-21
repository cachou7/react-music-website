import React from 'react';
import { Span } from '../Span';
import { useAudioPlayer } from '../../global/hooks/useAudioPlayer';
import { useWindowSize } from '../../global/hooks/useWindowSize';
import { wrapperDiv, albumTextDiv, audioTimeDiv } from './AudioDetails.styles';
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

function formatDuration(duration) {
  return moment
    .duration(duration, "seconds")
    .format("mm:ss", { trim: false });
}

const AudioDetails = () => {
  const { curTime, duration, initDur, currentTrackName, trackList, albumName } = useAudioPlayer();
  const windowSize = useWindowSize();
  let hideDisplay = windowSize.width < 1200;

  return (
    <div style={wrapperDiv}>
      <div style={albumTextDiv}>
        <Span type='songPlaying'>{currentTrackName ? currentTrackName : trackList[0].name}</Span>
        {hideDisplay ? hideDisplay : <Span type='albumName'>{albumName}</Span>}
      </div>
      <div style={audioTimeDiv}>
        <Span type='audioTime'>{curTime ? formatDuration(curTime) : '00:00'}/{duration ? formatDuration(duration) : initDur}</Span>
      </div>
    </div>
  );
};

export { AudioDetails };