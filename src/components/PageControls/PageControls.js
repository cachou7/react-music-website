import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledArrows = styled(FontAwesomeIcon)`
  color: #8a8a8a;
  cursor: pointer;
  :hover {
    color: black;
  }
`;

const StyledSquare = styled(FontAwesomeIcon)`
  color: black;
  cursor: pointer;
  :hover {
    color: #8a8a8a;
  }
`;

const Left = styled.span`
  float: left;
`;

const Right = styled.span`
  float: right;
`;

const Center = styled.span`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export { StyledArrows, StyledSquare, Left, Right, Center }