import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledCarousel } from './Carousel.styles';
import { CarouselCard } from '../CarouselCard';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const reviews = [{
  info: 'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.',
  name: 'Jaycane'
},
{
  info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  name: 'Flextaxon'
}]

const MyCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const getPrevIdx = () => ((index + -1) % reviews.length + reviews.length) % reviews.length;
  const getNextIdx = () => (index + 1) % reviews.length;

  const handleSelect = (selectedIndex, direction) => {
    setIndex(selectedIndex);
    setDirection(direction);
    console.log(index, direction);
  };

  return (
    <>
      <StyledCarousel controls={true} wrap={true} touch={true} indicators={false} direction={direction} activeIndex={index} interval='500000' onSelect={handleSelect}>
        {reviews.map((review) => (
          <Carousel.Item>
            <CarouselCard textContent={review.info} authorName={'— ' + review.name} onClick={() => setIndex(index - 1)} handleSelect={handleSelect} />
          </Carousel.Item>
        ))}
      </StyledCarousel>
      <span style={{ float: 'right', color: '#8a8a8a', fontSize: '24px', cursor: 'pointer', marginBottom: '-14px' }}>
        <FontAwesomeIcon icon={faChevronLeft} size="xs" onClick={() => handleSelect(getPrevIdx, 'prev')} /> / <FontAwesomeIcon icon={faChevronRight} size="xs" onClick={() => handleSelect(getNextIdx, 'next')} />
      </span>
    </>
  );
};

export { MyCarousel };