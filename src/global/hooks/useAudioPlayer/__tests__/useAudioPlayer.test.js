import React from 'react';
import { shallow } from 'enzyme';
import { renderHook } from '@testing-library/react-hooks';
import { useAudioPlayer } from '..';

//const setState = jest.fn();
//const useStateSpy = jest.spyOn(React, 'useState');
//useStateSpy.mockImplementation(init => [init, setState]);

const renderAudioPlayer = (...args) => renderHook(() => useAudioPlayer(...args));

describe('useAudioPlayer', () => {
  it('should be defined', () => {
    expect(useAudioPlayer).toBeDefined();
  });
  it('called with no ref', () => {
    console.log(renderAudioPlayer().result);
    //console.log(albumName);
  });
});