import React from 'react';
import PropTypes from 'prop-types';
import { PaddingContainer } from '../PaddingContainer';
import { Text } from '../Text';
import { MyCarousel } from '../Carousel';

//background: '#f9f9f9'
const ReviewsInfo = ({
  headerTitle
}) => (
    <PaddingContainer top='75px'>
      <div style={{ background: '#f9f9f9', padding: '50px', marginBottom: '82px' }}>
        <Text type='infoHeader'>
          {headerTitle}
        </Text>
        <MyCarousel />
      </div>
    </PaddingContainer>
  );

ReviewsInfo.propTypes = {
  headerTitle: PropTypes.string
}

export { ReviewsInfo };