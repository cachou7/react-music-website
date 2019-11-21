const trackList = {
  audioPlayer: new Audio(),
  albumName: 'Space Of My Way',
  albumImgSrc: 'https://mixtape.select-themes.com/wp-content/uploads/2016/09/album-cover-image-1.jpg',
  tracks: [
    {
      name: 'Dreaming Of Joy',
      url: '/assets/Shelter.mp3',
      buyLink: true
    },
    {
      name: 'Broken Song',
      url: '/assets/Sad Machine.mp3',
      buyLink: false
    },
    {
      name: 'Crazy Circus',
      url: '/assets/Broken-Song.mp3',
      buyLink: true
    },
    {
      name: 'Give Her Shadow',
      url: '/assets/Ghost-Soul.mp3',
      buyLink: true
    },
    {
      name: 'Midnight Tales',
      url: '/assets/Shelter.mp3',
      buyLink: true
    },
    {
      name: 'Stop Story',
      url: '/assets/Sad Machine.mp3',
      buyLink: true
    },
    {
      name: 'Surprise Of My Party',
      url: '/assets/Shelter.mp3',
      buyLink: true
    },
    {
      name: 'Dream On',
      url: '/assets/Sad Machine.mp3',
      buyLink: true
    },
    {
      name: 'Ghost Soul',
      url: '/assets/Shelter.mp3',
      buyLink: false
    },
    {
      name: 'Give Back My Bass',
      url: '/assets/Sad Machine.mp3',
      buyLink: true
    }
  ],
  currentTrackIndex: null,
  isPlaying: false,
  initDur: '03:38'
};

const iTunesLink = 'https://www.apple.com/itunes/';

export { trackList, iTunesLink };