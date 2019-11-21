import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledCard } from './CarouselCard.styles';
import { Text } from '../Text';
import { Span } from '../Span';

const CarouselCard = ({
  textContent,
  authorName
}) => {
  return (
    <>
      <Text type='infoContent'>
        {textContent}
      </Text>
      <Span type='reviewAuthor'>
        {authorName}
      </Span>
    </>
  );
}

export { CarouselCard };