import React, { useState } from 'react';

const AudioPlayerContext = React.createContext([{}, () => { }]);

const AudioPlayerProvider = ({ trackList, children }) => {
  const [state, setState] = useState(trackList);
  return (
    <AudioPlayerContext.Provider value={[state, setState]}>
      {children}
    </AudioPlayerContext.Provider>
  );
}

export { AudioPlayerContext, AudioPlayerProvider };