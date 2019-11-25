import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledFooter = styled.div`
  background-image: url(https://mixtape.select-themes.com/wp-content/uploads/2016/09/footer-background-img-1.jpg);
  width: 100%;
  z-index: 100;
  margin: 0 auto;
  display: block;
  position: relative;
  height: 400px;
  background-position: center; 
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 20px;
  font-size: 21px;
  color: #8a8a8a;
  cursor: pointer;
  :hover {
    color: white;
  }
`;

const StyledWrapper = styled.div`
  text-align: center;
  height: 100%;
`;



export { StyledFooter, StyledIcon, StyledWrapper }