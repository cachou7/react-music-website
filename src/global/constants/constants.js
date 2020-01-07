const trackList = {
  audioPlayer: new Audio(),
  albumName: 'Space Of My Way',
  albumImgSrc: 'https://mixtape.select-themes.com/wp-content/uploads/2016/09/album-cover-image-1.jpg',
  tracks: [
    {
      name: 'Dreaming Of Joy',
      url: 'https://p.scdn.co/mp3-preview/a91b5296dba8cf47d0427a6eb54307f53dc26c64?cid=35cf31261b7d43bc849e1893d0e415f6',
      buyLink: true
    },
    {
      name: 'Broken Song',
      url: '/assets/Broken-Song.mp3',
      buyLink: false
    },
    {
      name: 'Crazy Circus',
      url: '/assets/Ghost-Soul.mp3',
      buyLink: true
    },
    {
      name: 'Give Her Shadow',
      url: '/assets/Broken-Song.mp3',
      buyLink: true
    },
    {
      name: 'Midnight Tales',
      url: '/assets/Ghost-Soul.mp3',
      buyLink: true
    },
    {
      name: 'Stop Story',
      url: '/assets/Broken-Song.mp3',
      buyLink: true
    },
    {
      name: 'Surprise Of My Party',
      url: '/assets/Ghost-Soul.mp3',
      buyLink: true
    },
    {
      name: 'Dream On',
      url: '/assets/Broken-Song.mp3',
      buyLink: true
    },
    {
      name: 'Ghost Soul',
      url: '/assets/Ghost-Soul.mp3',
      buyLink: false
    },
    {
      name: 'Give Back My Bass',
      url: '/assets/Broken-Song.mp3',
      buyLink: true
    }
  ],
  currentTrackIndex: null,
  isPlaying: false,
  initDur: '00:30'
};

const iTunesLink = 'https://www.apple.com/itunes/';

export { trackList, iTunesLink };