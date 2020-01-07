import React, {useState, useEffect} from 'react';
import './App.css';
import { HeaderContainer } from './components/HeaderContainer';
import { Img } from './components/Img';
import { AlbumInfo } from './components/AlbumInfo';
import { LyricsInfo } from './components/LyricsInfo';
import { AudioControls } from './components/AudioControls';
import { trackList } from './global/constants/constants';
import { AudioPlayerProvider } from "./global/hooks/AudioPlayerContext";
import { TrackList } from './components/TrackList';
import { ReviewsInfo } from './components/ReviewsInfo';
import { ShareInfo } from './components/ShareInfo';
import { Row } from './components/Row';
import { Col } from './components/Col';
import { AvailableOnInfo } from './components/AvailableOnInfo';
import { LatestVideoInfo } from './components/LatestVideoInfo';
import { Footer } from './components/Footer';
import { PageControls } from './components/PageControls';
import axios from 'axios';

// porter artist id = 3dz0NnIZhtKKeXZxLOxCam
// worlds album id = 7AJPV0L05IyIBid97AvwVD

export const authEndpoint = 'https://accounts.spotify.com/authorize';

const clientId = "35cf31261b7d43bc849e1893d0e415f6";
const redirectUri = "http://localhost:3000";
const scopes = [];

// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

function App() {

  const [token, setToken] = useState();
  const [album, setAlbum] = useState({
    tracks: {items: []},
    images: [{ url: "" }], 
    artists: [{ name: "" }],
    genres: ["N/A"]
  });
  const [artist, setArtist] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const artistId = "https://open.spotify.com/follow/1/?uri=spotify:artist:" + "3dz0NnIZhtKKeXZxLOxCam" +"&size=detail&theme=light";

  /*const config = {
    headers: {'Authorization': "Bearer " + token}
  };*/

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    async function loadAlbumData() {
      try {
        await axios.get("https://api.spotify.com/v1/albums/7AJPV0L05IyIBid97AvwVD", {
          headers: {'Authorization': "Bearer " + token}, cancelToken: source.token
        }).then(response => {
          setAlbum(response.data);
          trackList['tracks'] = response.data.tracks.items;
          trackList['albumName'] = response.data.name;
          console.log(response.data);
        });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
      }
    };

    async function loadArtistData() {
      try {
        await axios.get("https://api.spotify.com/v1/artists/3dz0NnIZhtKKeXZxLOxCam", {
          headers: {'Authorization': "Bearer " + token}, cancelToken: source.token
      }).then(response => {
          setArtist(response.data);
          console.log(response.data);
        });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
      }
    };

    // Set token
    (async () => {
      let _token = hash.access_token;
      if (_token) {
        setToken(_token);
        loadAlbumData();
        loadArtistData();
        setIsLoading(false);
      }
    })();

    return () => {
      source.cancel();
    };
  }, [token]);

  console.log(token);

  return (
    <>
    {!token && (
      <div className="login-page">
        <a
          className="btn login-button"
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
        >
        <img className="btn-logo" src="https://i.ibb.co/drkPvst/Spotify-Icon-RGB-White.png" alt="spot" />
        <span className="btn-text">LOG IN</span>
        </a>
    </div>
    )}
    {token && !isLoading && (
      <>
      <HeaderContainer albumName={album.name} />
      <div className="contentContainer">
        <Row>
          <Col xs={12} md={6}>
            <Img srcUrl={album.images[0].url} />
            <AudioPlayerProvider trackList={trackList}>
              <AudioControls />
              <TrackList />
            </AudioPlayerProvider>
          </Col>
          <Col xs={12} md={6}>
            <AlbumInfo headerTitle="About Album" artistName={album.artists[0].name} labelName={album.label} releaseDate={album.release_date} albumGenre={album.genres[0]} otherArtists={album.tracks.items} />
            <LyricsInfo headerTitle="Available Lyrics" />
            <ReviewsInfo headerTitle="Album Reviews" />
            <ShareInfo headerTitle="Share" artistId={artistId}/>
          </Col>
          <AvailableOnInfo headerTitle="Available On" />
          <LatestVideoInfo headerTitle="Latest Video" />
          <PageControls />
        </Row>
      </div>
      <Footer />
      </>
      )}
    </>
  );
}

export default App;
