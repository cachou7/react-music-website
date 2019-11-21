import styled from '@emotion/styled';
import { Row, Col } from 'react-bootstrap'

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-top: none;
  border-bottom: none;
  border-left: ${props => props.back || props.play ? 'none' : ''};
  border-right: ${props => props.forward || props.play ? 'none' : ''};
  border-color: rgba(204,204,204,.5);
  :hover {
    color: #545454;
  }
`;

const StyledRow = styled(Row)`
  background-color: #f5f5f5;
  height: 87px; 
  cursor: pointer;
  width: 100%;
  margin: auto;
`;

const StyledInfoRow = styled(Row)`
  background-color: #f5f5f5;
  height: 85px; 
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
`;

export { StyledCol, StyledRow, StyledInfoRow };