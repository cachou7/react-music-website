import React from 'react';
import PropTypes from 'prop-types';
import { PaddingContainer } from '../PaddingContainer';
import { Text } from '../Text';
import { StyledIcon } from './ShareInfo.styles';
import { faFacebookF, faTwitter, faLinkedin, faTumblr, faPinterest } from '@fortawesome/free-brands-svg-icons';


const ShareInfo = ({
  headerTitle
}) => (
    <PaddingContainer top='75px'>
      <Text type='infoHeader'>
        {headerTitle}
      </Text>
      <a href='https://www.facebook.com/'>
        <StyledIcon icon={faFacebookF} />
      </a>
      <a href='https://www.twitter.com/'>
        <StyledIcon icon={faTwitter} />
      </a>
      <a href='https://www.linkedin.com/'>
        <StyledIcon icon={faLinkedin} />
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