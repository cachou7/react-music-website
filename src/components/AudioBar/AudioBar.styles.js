import styled from '@emotion/styled';
import { Row } from 'react-bootstrap';

const StyledAudioBar = styled(Row)`
  background: linear-gradient(to right, black ${props => props.curpercentage}%, rgba(204,204,204,.5) 0);
  height: 3px; 
  width: 100%;
  margin: auto;
  display: flex;
  position: relative;
  cursor: pointer;
`;

export { StyledAudioBar };