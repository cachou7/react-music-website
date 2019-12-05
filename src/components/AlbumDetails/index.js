import React from 'react';
import PropTypes from 'prop-types';
import { Span } from '../Span';

const AlbumDetails = ({
  title,
  info
}) => (
    <div>
      <Span type='title'>{title}: </Span>
      <Span type='info'>{info}</Span>
    </div>
  );

AlbumDetails.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string
}

export { AlbumDetails };