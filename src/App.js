import React from 'react';
import './App.css';
import { HeaderContainer } from './components/HeaderContainer';
import { Text } from './components/Text';
import { Img } from './components/Img';
import { Row, Col } from 'react-bootstrap';
import { AlbumInfo } from './components/AlbumInfo';
import { LyricsInfo } from './components/LyricsInfo';
import { PaddingContainer } from './components/PaddingContainer';
import { AudioControls } from './components/AudioControls';
import { trackList } from './global/constants/constants';
import { AudioPlayerProvider } from "./global/hooks/AudioPlayerContext";
import { TrackList } from './components/TrackList';
import { ReviewsInfo } from './components/ReviewsInfo';

function App() {
  return (
    <>
      <HeaderContainer>
        <Text type="headerTitle">Mixtape / Space Of My Way </Text>
        <Text type="subHeader">Space Of My Way</Text>
      </HeaderContainer>
      <div className="contentContainer">
        <Row>
          <Col xs={12} md={6}>
            <Img srcUrl={trackList.albumImgSrc} />
            <AudioPlayerProvider trackList={trackList}>
              <AudioControls />
              <TrackList />
            </AudioPlayerProvider>
          </Col>
          <Col xs={12} md={6}>
            <AlbumInfo headerTitle="About Album" />
            <LyricsInfo headerTitle="Available Lyrics" />
            <ReviewsInfo headerTitle="Album Reviews" />
          </Col>
        </Row>
      </div>
      <PaddingContainer top='250px' />
    </>
  );
}

export default App;