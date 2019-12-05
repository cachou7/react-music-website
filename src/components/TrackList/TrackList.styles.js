import styled from '@emotion/styled';

const PaddedDiv = styled.div`
  padding: 15px 20px;
`;

const standardSpan = {
  fontSize: '18px',
  color: '#8a8a8a',
  fontWeight: '500',
  cursor: 'pointer'
}

const selectedSpan = {
  fontSize: '18px',
  color: 'black',
  fontWeight: '500',
  cursor: 'pointer'
}

const styledIcon = {
  fontSize: '12px',
  marginRight: '12px',
  verticalAlign: 'baseline'
}

export { standardSpan, selectedSpan, PaddedDiv, styledIcon }