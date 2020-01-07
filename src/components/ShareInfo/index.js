import React from 'react';
import PropTypes from 'prop-types';
import { PaddingContainer } from '../PaddingContainer';
import { Text } from '../Text';
import { StyledIcon } from './ShareInfo.styles';
import { faFacebookF, faTwitter, faLinkedinIn, faTumblr, faPinterest } from '@fortawesome/free-brands-svg-icons';


const ShareInfo = ({
  headerTitle,
  artistId
}) => (
    <PaddingContainer top='75px'>
      <Text type='infoHeader'>
        {headerTitle}
      </Text>
      <iframe src={artistId} width="300" height="56" scrolling="no" frameBorder="0" style={{border:'none', overflow:'hidden'}} allowtransparency="true"></iframe>
      <br /><br />
      <a href='https://www.facebook.com/'>
        <StyledIcon icon={faFacebookF} />
      </a>
      <a href='https://www.twitter.com/'>
        <StyledIcon icon={faTwitter} />
      </a>
      <a href='https://www.linkedin.com/'>
        <StyledIcon icon={faLinkedinIn} />
      </a>
      <a href='https://www.tumblr.com/'>
        <StyledIcon icon={faTumblr} />
      </a>
      <a href='https://www.pinterest.com/'>
        <StyledIcon icon={faPinterest} />
      </a>
    </PaddingContainer>
  );

ShareInfo.propTypes = {
  headerTitle: PropTypes.string
}

export { ShareInfo };