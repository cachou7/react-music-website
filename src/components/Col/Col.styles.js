import styled from '@emotion/styled';

const getColStyles = props => {

  const sizes = {
    'xs': {
      width: props.xs / 12 * 100
    },
    'sm': {
      width: props.sm / 12 * 100
    },
    'md': {
      width: props.md / 12 * 100
    },
    'lg': {
      width: props.lg / 12 * 100
    }
  }

  const width = sizes[props.screenSize].width;
  console.log(width);

  return `css
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: ${width}%;
  `;
};

const StyledCol = styled.div`
  ${props => getColStyles(props)};
`;

export { StyledCol };