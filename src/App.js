import React from 'react';
import './App.css';
import { HeaderContainer } from './components/HeaderContainer';
import { Text } from './components/Text';
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
            <ShareInfo headerTitle="Share" />
          </Col>
          <AvailableOnInfo headerTitle="Available On" />
          <LatestVideoInfo headerTitle="Latest Video" />
          <PageControls />
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default App;
