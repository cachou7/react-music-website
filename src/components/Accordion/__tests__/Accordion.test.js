import React from 'react';
import { shallow } from 'enzyme';
import { matchers } from 'jest-emotion';
import { Accordion } from '..';

expect.extend(matchers);

describe('Accordion Component', () => {
    it('smoke test', () => {
      const component = shallow(<Accordion />);
      expect(component);
    });
});