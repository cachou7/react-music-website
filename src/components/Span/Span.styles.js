import styled from '@emotion/styled';

const types = {
  'title': {
    color: '#292929',
    weight: '420',
    lineHeight: '29px'
  },
  'info': {
    color: '#8a8a8a',
    weight: '400',
    lineHeight: '29px'
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
    hover: 'gray',
    verticalAlign: 'middle',
    lineHeight: '25px'
  },
  'reviewAuthor': {
    color: 'black',
    font: '23px',
    weight: '600'
  },
  'reviewControls': {
    color: '#8a8a8a',
    font: '22px',
    cursor: 'pointer',
    display: 'inline-block',
    position: 'absolute',
    bottom: '0',
    right: '0'
  },
  'footerHeader': {
    font: '50px',
    color: 'white',
    weight: '700',
    textAlign: 'center'
  },
  'footerCopyright': {
    font: '16px',
    color: '#c2c2c2',
    weight: '400',
    hover: 'white',
    cursor: 'pointer'
  },
  'footerNumber': {
    font: '16px',
    color: '#c2c2c2',
    weight: '400',
    marginRight: '15px',
  }
};

const StyledText = styled.span`
  font-size: ${props => types[props.type].font};
  color: ${props => types[props.type].color};
  top: ${props => types[props.type].top};
  bottom: ${props => types[props.type].bottom};
  left: ${props => types[props.type].left};
  right: ${props => types[props.type].right};
  position: ${props => types[props.type].position};
  text-align: ${props => types[props.type].textAlign};
  font-weight: ${props => types[props.type].weight};
  line-height: ${props => types[props.type].lineHeight};
  float: ${props => types[props.type].float};
  flex: ${props => types[props.type].flex};
  display: ${props => types[props.type].display};
  :hover {
    color: ${props => types[props.type].hover};
  }
  cursor: ${props => types[props.type].cursor};
  margin-right: ${props => types[props.type].marginRight};
  vertical-align: ${props => types[props.type].verticalAlign};
`;

export { StyledText };