import React from 'react';
import PropTypes from 'prop-types';

import { Track } from './styled-component';

export const Component = ({ track, isRemoval, onTrackClick }) => (
  <Track.Wrapper>
    <Track.Information>
      <h3>{track.name}</h3>
      <p>{`${track.artist} | ${track.album}`}</p>
    </Track.Information>
    <Track.CallToAction onClick={() => onTrackClick(track)}>
      {isRemoval ? '-' : '+'}
    </Track.CallToAction>
  </Track.Wrapper>
);

Component.displayName = 'Track';

Component.defaultProps = {
  isRemoval: false,
};

Component.propTypes = {
  /** Shows the correct action to the user */
  isRemoval: PropTypes.boolean,
  /** Handler adding tracks to a playlist */
  onTrackClick: PropTypes.func.isRequired,
  /** Track object containing information about the track */
  track: PropTypes.shape({
    /** Name of the track. */
    name: PropTypes.string,
    /** Artist of the track. */
    artist: PropTypes.string,
    /** Album of the track. */
    album: PropTypes.string,
  }).isRequired,
};
