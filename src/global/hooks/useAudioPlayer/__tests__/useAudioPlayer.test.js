import React from 'react';
import { shallow } from 'enzyme';
import { renderHook } from '@testing-library/react-hooks';
import { useAudioPlayer } from '..';
import { trackList } from '../../../constants/constants';

//const setState = jest.fn();
//const useStateSpy = jest.spyOn(React, 'useState');
//useStateSpy.mockImplementation(init => [init, setState]);

const renderAudioPlayer = (...args) => renderHook(() => useAudioPlayer(...args));

describe('useAudioPlayer', () => {
  it('should be defined', () => {
    expect(useAudioPlayer).toBeDefined();
  });
  it('called with no ref', () => {
    console.log(renderAudioPlayer(trackList));
    //console.log(albumName);
    //
  });
});