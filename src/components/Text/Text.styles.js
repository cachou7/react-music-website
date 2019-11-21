import styled from '@emotion/styled';

const types = {
  'headerTitle': {
    font: '16px',
    color: '#8a8a8a',
    top: '30%',
    left: '7%',
    position: 'absolute',
    weight: '500'
  },
  'subHeader': {
    font: '42px',
    color: 'black',
    top: '40%',
    left: '7%',
    position: 'absolute',
    weight: '650'
  },
  'infoHeader': {
    font: '30px',
    color: 'black',
    weight: '700'
  },
  'infoContent': {
    color: '#8a8a8a',
    weight: '400',
    top: '-5px'
  }
};

const StyledText = styled.p`
  font-size: ${props => types[props.type].font};
  color: ${props => types[props.type].color};
  top: ${props => types[props.type].top || 0};
  left: ${props => types[props.type].left || 0};
  position: ${props => types[props.type].position || 'relative'};
  font-weight: ${props => types[props.type].weight};
  line-height: ${props => types[props.type].lineheight};
`;

export { StyledText };