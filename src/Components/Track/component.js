import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export const Component = ({ track, isRemoval, onTrackClick }) => (
  <div className="Track">
    <div className="Track-information">
      <h3>{track.name}</h3>
      <p>{`${track.artist} | ${track.album}`}</p>
    </div>
    <a onClick={() => onTrackClick(track)} className="Track-action">
      {isRemoval ? '-' : '+'}
    </a>
  </div>
);

Component.displayName = 'Track';

Component.defaultProps = {
  isRemoval: false,
};

Component.propTypes = {
  isRemoval: PropTypes.boolean,
  /** Handler adding tracks to a playlist */
  onTrackClick: PropTypes.func.isRequired,
  track: PropTypes.shape({
    /** Name of the track. */
    name: PropTypes.string,
    /** Artist of the track. */
    artist: PropTypes.string,
    /** Album of the track. */
    album: PropTypes.string,
  }).isRequired,
};
