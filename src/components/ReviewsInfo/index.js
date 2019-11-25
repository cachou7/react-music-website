import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './ReviewsInfo.styles';
import { PaddingContainer } from '../PaddingContainer';
import { Text } from '../Text';
import { MyCarousel } from '../Carousel';

const ReviewsInfo = ({
  headerTitle
}) => (
    <PaddingContainer top='75px'>
      <StyledWrapper>
        <Text type='infoHeader'>
          {headerTitle}
        </Text>
        <MyCarousel />
      </StyledWrapper>
    </PaddingContainer>
  );

ReviewsInfo.propTypes = {
  headerTitle: PropTypes.string
}

export { ReviewsInfo };