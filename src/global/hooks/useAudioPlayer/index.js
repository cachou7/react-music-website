import { useState, useEffect, useContext } from "react";
import { AudioPlayerContext } from '../AudioPlayerContext';

const useAudioPlayer = () => {
  const [state, setState] = useContext(AudioPlayerContext);
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [clickedTime, setClickedTime] = useState();

  const playTrack = (index) => {
    state.audioPlayer.pause();
    state.audioPlayer.src = state.tracks[index].url;
    state.audioPlayer.load();
    state.audioPlayer.play();
    setState(state => ({ ...state, currentTrackIndex: index, isPlaying: true }));
  }

  const togglePlay = () => {
    if (state.audioPlayer.readyState === 0) {
      state.audioPlayer = new Audio(state.tracks[0].url);
      setState(state => ({ ...state, currentTrackIndex: 0 }));
    }

    state.isPlaying ? state.audioPlayer.pause() : state.audioPlayer.play();
    setState(state => ({ ...state, isPlaying: !state.isPlaying }));
  }

  const playPrevTrack = () => {
    if (state.currentTrackIndex !== 0 && state.currentTrackIndex !== null) {
      const newIndex = Math.max(0, state.currentTrackIndex - 1);
      playTrack(newIndex);
    }
  }

  const playNextTrack = () => {
    const newIndex = Math.min(state.currentTrackIndex + 1, state.tracks.length);
    if (newIndex !== state.tracks.length) {
      playTrack(newIndex);
    }
  }

  useEffect(() => {

    const setAudioData = () => {
      setDuration(state.audioPlayer.duration);
      setCurTime(state.audioPlayer.currentTime);
    }

    const setAudioTime = () => setCurTime(state.audioPlayer.currentTime);

    state.audioPlayer.addEventListener("loadeddata", setAudioData);
    state.audioPlayer.addEventListener("timeupdate", setAudioTime);
    state.audioPlayer.addEventListener("ended", playNextTrack);

    if (clickedTime && clickedTime !== curTime) {
      state.audioPlayer.currentTime = clickedTime;
      setClickedTime(null);
    }

    return () => {
      state.audioPlayer.removeEventListener("loadeddata", setAudioData);
      state.audioPlayer.removeEventListener("timeupdate", setAudioTime);
      state.audioPlayer.removeEventListener("ended", playNextTrack);
    }
  });

  return {
    curTime,
    duration,
    setDuration,
    initDur: state.initDur,
    albumName: state.albumName,
    playTrack,
    togglePlay,
    currentTrackName: state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    playPrevTrack,
    playNextTrack,
    setClickedTime
  }
}

export { useAudioPlayer };