import React from 'react';
import PropTypes from 'prop-types';

import { Track } from '../Track';

import { TrackList } from './styled-component';

export const Component = ({ tracks, ...otherProps }) => (
  <TrackList.Wrapper>
    {tracks.map((track, index) => (
      <Track key={`${track.name}-${index}`} track={track} {...otherProps} />
    ))}
  </TrackList.Wrapper>
);

Component.displayName = 'TrackList';

Component.defaultProps = {
  tracks: [{}],
};

Component.propTypes = {
  /* Object returned from Spotify's API */
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      /** Name of the track. */
      name: PropTypes.string,
      /** Artist of the track. */
      artist: PropTypes.string,
      /** Album of the track. */
      album: PropTypes.string,
    })
  ),
};
