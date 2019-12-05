import React, { useState } from 'react';
import { StyledAccordion } from './Accordion.styles';
import { AccordionCard } from '../AccordionCard';

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const clickHandler = (eventKey) => {
    if (selected === eventKey) {
      setSelected(null);
    }
    else {
      setSelected(eventKey);
    }
  };

  return (
  <StyledAccordion>
    <AccordionCard 
      eventKey='0' 
      title='Dreaming Of Joy' 
      info='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean feugiat dictum lacus, ut 
            hendrerit mi pulvinar vel. Fusce id 
            nibh at neque eleifend tristique at sit
            amet libero. In aliquam in nisl nec 
            sollicitudin. Sed consectetur volutpat sem
            vitae facilisis. Fusce tristique, magna ornare 
            facilisis sagittis, tortor mi auctor libero, 
            non pharetra sem ex eu felis. Aenean 
            egestas ut purus nec vehicula. Morbi eu 
            nisi erat. Nam mattis id lectus sit amet mattis. 
            Suspendisse eget tristique neque. 
            Duis ac vulputate quam.'
      isSelected={selected}
      clickHandler={() => clickHandler('0')}
    />
    <AccordionCard 
      eventKey='1' 
      title='Broken Song' 
      info='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean feugiat dictum lacus, ut 
            hendrerit mi pulvinar vel. Fusce id 
            nibh at neque eleifend tristique at sit
            amet libero. In aliquam in nisl nec 
            sollicitudin. Sed consectetur volutpat sem
            vitae facilisis. Fusce tristique, magna ornare 
            facilisis sagittis, tortor mi auctor libero, 
            non pharetra sem ex eu felis. Aenean 
            egestas ut purus nec vehicula. Morbi eu 
            nisi erat. Nam mattis id lectus sit amet mattis. 
            Suspendisse eget tristique neque. 
            Duis ac vulputate quam.'
      isSelected={selected}
      clickHandler={() => clickHandler('1')}
    />
    <AccordionCard 
      eventKey='2' 
      title='Crazy Circus' 
      info='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean feugiat dictum lacus, ut 
            hendrerit mi pulvinar vel. Fusce id 
            nibh at neque eleifend tristique at sit
            amet libero. In aliquam in nisl nec 
            sollicitudin. Sed consectetur volutpat sem
            vitae facilisis. Fusce tristique, magna ornare 
            facilisis sagittis, tortor mi auctor libero, 
            non pharetra sem ex eu felis. Aenean 
            egestas ut purus nec vehicula. Morbi eu 
            nisi erat. Nam mattis id lectus sit amet mattis. 
            Suspendisse eget tristique neque. 
            Duis ac vulputate quam.'
      isSelected={selected}
      clickHandler={() => clickHandler('2')}
    />
    <AccordionCard 
      eventKey='3' 
      title='Give Her Shadow' 
      info='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean feugiat dictum lacus, ut 
            hendrerit mi pulvinar vel. Fusce id 
            nibh at neque eleifend tristique at sit
            amet libero. In aliquam in nisl nec 
            sollicitudin. Sed consectetur volutpat sem
            vitae facilisis. Fusce tristique, magna ornare 
            facilisis sagittis, tortor mi auctor libero, 
            non pharetra sem ex eu felis. Aenean 
            egestas ut purus nec vehicula. Morbi eu 
            nisi erat. Nam mattis id lectus sit amet mattis. 
            Suspendisse eget tristique neque. 
            Duis ac vulputate quam.'
      isSelected={selected}
      clickHandler={() => clickHandler('3')}
    />
  </StyledAccordion>
  );
};

export { Accordion };