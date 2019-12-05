import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard } from './CarouselCard.styles';
import { Text } from '../Text';
import { Span } from '../Span';

const CarouselCard = ({
  textContent,
  authorName
}) => {
  return (
    <StyledCard>
      <Text type='infoContent'>
        {textContent}
      </Text>
      <Span type='reviewAuthor'>
        {authorName}
      </Span>
    </StyledCard>
  );
}

CarouselCard.propTypes = {
  textContent: PropTypes.string,
  authorName: PropTypes.string
};

export { CarouselCard };