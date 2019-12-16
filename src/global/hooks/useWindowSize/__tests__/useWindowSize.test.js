import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useWindowSize } from '..';

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState');
useStateSpy.mockImplementation(init => [init, setState]);

const renderWindowSize = (...args) => renderHook(() => useWindowSize(...args));

/*beforeEach(() => {
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb());
});

afterEach(() => {
  window.requestAnimationFrame.mockRestore();
  jest.clearAllMocks();
});*/

describe('useWindowSize', () => {
  it('should be defined', () => {
    expect(useWindowSize).toBeDefined();
  });
  it('called with no ref', () => {
    const { result } = renderWindowSize();
    expect(result.current.width).toBe(undefined);
    expect(result.current.height).toBe(undefined);
  });
  it('testing with resize event', () => {
    //global.innerWidth = 500;
    const { result } = renderWindowSize();
    global.dispatchEvent(new Event('resize'));
    console.log(result.current.width);
    expect(result.current.width).toBeDefined();
  });
});