import styled from '@emotion/styled';

const types = {
  'title': {
    color: '#292929',
    weight: '420',
    lineheight: '29px'
  },
  'info': {
    color: '#8a8a8a',
    weight: '400',
    lineheight: '29px'
  },
  'accordionTitle': {
    color: '#8a8a8a',
    weight: '650',
    font: '14px',
    top: '-3px',
    cursor: 'pointer'
  },
  'accordionTitleSelected': {
    color: 'black',
    weight: '650',
    font: '14px',
    top: '-3px',
    cursor: 'pointer'
  },
  'accordionBody': {
    color: '#8a8a8a',
    weight: '400'
  },
  'songPlaying': {
    font: '18px',
    color: '#8a8a8a',
    weight: '600'
  },
  'albumName': {
    font: '15px',
    color: '#acacac',
    weight: '400',
    top: '-5px',
  },
  'audioTime': {
    font: '16px',
    color: '#6b6b6b',
    textAlign: 'right',
    weight: '400',
    flex: '1'
  },
  'buyTrack': {
    font: '14px',
    color: 'black',
    float: 'right',
    weight: '700',
    hover: 'gray'
  },
  'reviewAuthor': {
    color: 'black',
    font: '23px',
    weight: '600'
  }
};

const StyledText = styled.span`
  font-size: ${props => types[props.type].font};
  color: ${props => types[props.type].color};
  top: ${props => types[props.type].top || 0};
  left: ${props => types[props.type].left || 0};
  right: ${props => types[props.type].right || 0};
  position: ${props => types[props.type].position || 'relative'};
  text-align: ${props => types[props.type].textAlign};
  font-weight: ${props => types[props.type].weight};
  line-height: ${props => types[props.type].lineheight};
  float: ${props => types[props.type].float};
  flex: ${props => types[props.type].flex};
  display: ${props => types[props.type].display};
  :hover {
    color: ${props => types[props.type].hover};
  }
  cursor: ${props => types[props.type].cursor};
`;

export { StyledText };