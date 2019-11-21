import styled from '@emotion/styled';

const StyledContainer = styled.div`
  padding-top: ${props => props.top};
  padding-left: ${props => props.left};
  padding-bottom: ${props => props.bottom};
  padding-right: ${props => props.right};
  margin: auto;
  width: 95%;
`;

export { StyledContainer };