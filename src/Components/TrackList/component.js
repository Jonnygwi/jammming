import React from 'react';
import PropTypes from 'prop-types';

import { Track } from '../Track';

import { TrackList } from './styled-component';

export const Component = ({ tracks, ...otherProps }) => (
  <TrackList.Wrapper>
    {tracks.map((track, index) => (
      <Track key={`${track.name}-${index}`} track={track} {...otherProps} />
    ))}
    {tracks.length === 0 && 'No results'}
  </TrackList.Wrapper>
);

Component.displayName = 'TrackList';

Component.defaultProps = {
  tracks: [{}],
};

Component.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      artist: PropTypes.string,
      album: PropTypes.string,
    })
  ),
};
