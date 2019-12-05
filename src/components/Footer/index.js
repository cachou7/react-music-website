import React from 'react';
import { Span } from '../Span';
import { StyledFooter, StyledIcon, StyledWrapper } from './Footer.styles';
import { PaddingContainer } from '../PaddingContainer';
import { faFacebookF, faTwitter, faTumblr, faVimeoV, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => (
  <StyledFooter>
    <StyledWrapper>
      <PaddingContainer top='75px'>
        <Span type="footerHeader">mixtape.</Span>
      </PaddingContainer>
      <PaddingContainer top='10px'>
        <Span type="footerCopyright">Copyright @ Select Records</Span>
      </PaddingContainer>
      <PaddingContainer top='10px'>
        <Span type="footerNumber">+387 64 8459 254 68</Span>
        <Span type="footerCopyright">info.manager@mixtape.com</Span>
      </PaddingContainer>
      <PaddingContainer top='25px'>
        <a href='https://www.vimeo.com/'>
          <StyledIcon icon={faVimeoV} />
        </a>
        <a href='https://www.instagram.com/'>
          <StyledIcon icon={faInstagram} />
        </a>
        <a href='https://www.twitter.com/'>
          <StyledIcon icon={faTwitter} />
        </a>
        <a href='https://www.facebook.com/'>
          <StyledIcon icon={faFacebookF} />
        </a>
        <a href='https://www.tumblr.com/'>
          <StyledIcon icon={faTumblr} />
        </a>
      </PaddingContainer>
    </StyledWrapper>
  </StyledFooter>
);

export { Footer };