import React from 'react';
import PropTypes from 'prop-types';
import { StyledCol } from './Col.styles';
import { useWindowSize } from '../../global/hooks/useWindowSize';

const convertSize = (width, sizeInputs) => {
  if (width >= 1200 && sizeInputs[3]) {
    return sizeInputs[3] / 12 * 100
  } else if (width >= 992 && sizeInputs[2]) {
    return sizeInputs[2] / 12 * 100
  } else if (width >= 768 && sizeInputs[1]) {
    return sizeInputs[1] / 12 * 100
  } else if (width >= 0 && sizeInputs[0]) {
    return sizeInputs[0] / 12 * 100
  }
}

const Col = ({
  xs,
  sm,
  md,
  lg,
  children
}) => {

  let windowSize = useWindowSize();
  const sizeInputs = [xs, sm, md, lg];

  return (
    <StyledCol width={convertSize(windowSize.width, sizeInputs)}>
      {children}
    </StyledCol>
  )
};

Col.propTypes = {
  children: PropTypes.node.isRequired
}

export { Col };