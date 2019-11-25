import React from 'react';
import PropTypes from 'prop-types';
import { StyledCol } from './Col.styles';
import { useWindowSize } from '../../global/hooks/useWindowSize';

const convertSize = (width, sizeInputs) => {
  if (width >= 1200 && sizeInputs[3]) {
    return 'lg'
  } else if (width >= 992 && sizeInputs[2]) {
    return 'md'
  } else if (width >= 768 && sizeInputs[1]) {
    return 'sm'
  } else if (width >= 0 && sizeInputs[0]) {
    return 'xs'
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
    <StyledCol xs={xs} sm={sm} md={md} lg={lg} screenSize={convertSize(windowSize.width, sizeInputs)}>
      {children}
    </StyledCol>
  )
};

Col.propTypes = {
  children: PropTypes.node.isRequired
}

export { Col };