import styled from '@emotion/styled';

const getColStyles = props => {

  return `css
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    width: ${props.width}%;
  `;
};

const StyledCol = styled.div`
  ${props => getColStyles(props)};
`;

export { StyledCol };