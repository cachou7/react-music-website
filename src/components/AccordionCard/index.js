import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard } from './AccordionCard.styles.js';
import { Accordion, Card } from 'react-bootstrap';
import { Span } from '../Span';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const AccordionCard = ({
  eventKey,
  title,
  info,
  isSelected,
  clickHandler
}) => {
  return (
    <StyledCard>
      <Accordion.Toggle as={Card.Header} eventKey={eventKey} style={{ backgroundColor: 'white', borderBottom: 'none' }} onClick={clickHandler}>
        <Span type={isSelected === eventKey ? 'accordionTitleSelected' : 'accordionTitle'}>
          {title}
          <FontAwesomeIcon icon={isSelected === eventKey ? faCaretUp : faCaretDown} size="lg" style={{ float: 'right' }} />
        </Span>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body>
          <Span type='accordionBody'>
            {info}
          </Span>
        </Card.Body>
      </Accordion.Collapse>
    </StyledCard >
  );
};

AccordionCard.propTypes = {
  eventKey: PropTypes.isRequired
}

export { AccordionCard };