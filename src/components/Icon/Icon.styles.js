import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledIcon = styled(FontAwesomeIcon)`
  float: ${props => props.align};
`;

export { StyledIcon };