import React from 'react';
import { PaddingContainer } from '../PaddingContainer';
import { StyledArrows, StyledSquare, Left, Right, Center } from './PageControls';
import { faThLarge, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const PageControls = () => (
  <>
    <PaddingContainer top='100px'>
      <Left>
        <StyledArrows icon={faChevronLeft} size="2x" />
      </Left>
      <Right>
        <StyledArrows icon={faChevronRight} size="2x" />
      </Right>
      <Center>
        <StyledSquare icon={faThLarge} size="2x" />
      </Center>
    </PaddingContainer>
    <PaddingContainer top='100px' />
  </>
);

export { PageControls };