import React, { useState } from 'react';
import { StyledCarousel, StyledWrapper } from './Carousel.styles';
import { Span } from '../Span';
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

  const getPrevIdx = () => ((index - 1) % reviews.length + reviews.length) % reviews.length;
  const getNextIdx = () => (index + 1) % reviews.length;

  const handleSelect = (selectedIndex, direction) => {
    setIndex(selectedIndex);
    setDirection(direction);
  };

  return (
    <StyledWrapper>
      <StyledCarousel controls={false} wrap={true} touch={true} indicators={false} direction={direction} activeIndex={index} interval='3000' onSelect={handleSelect}>
        {reviews.map((review, index) => (
          <Carousel.Item key={index}>
            <CarouselCard textContent={review.info} authorName={'— ' + review.name} />
          </Carousel.Item>
        ))}
      </StyledCarousel>
      <Span type='reviewControls'>
        <FontAwesomeIcon icon={faChevronLeft} size="xs" onClick={() => handleSelect(getPrevIdx, 'prev')} /> / <FontAwesomeIcon icon={faChevronRight} size="xs" onClick={() => handleSelect(getNextIdx, 'next')} />
      </Span>
    </StyledWrapper>
  );
};

export { MyCarousel };