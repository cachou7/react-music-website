import React from 'react';
import { StyledAudioBar } from './AudioBar.styles';
import { useAudioPlayer } from '../../global/hooks/useAudioPlayer';

const AudioBar = ({ onTimeUpdate }) => {
	const { curTime, duration } = useAudioPlayer();

	const curPercentage = (curTime / duration) * 100;

	function calcClickedTime(e) {
		const clickPositionInPage = e.pageX;
		const bar = document.querySelector(".progress-bar");
		const barStart = bar.getBoundingClientRect().left + window.scrollX;
		const barWidth = bar.offsetWidth;
		const clickPositionInBar = clickPositionInPage - barStart;
		const timePerPixel = duration / barWidth;
		return timePerPixel * clickPositionInBar;
	}

	return (
		<StyledAudioBar className="progress-bar" curPercentage={curPercentage} onClick={e => onTimeUpdate(calcClickedTime(e))} />
	);
};

export { AudioBar };