import React from 'react';
import PropTypes from 'prop-types';

import { Track } from '../Track';

export const Component = ({ tracks }) => (
  <div className="TrackList">
    {tracks.map((track, index) => (
      <div key={`${track.name}-${index}`}>
        <Track {...track} />
      </div>
    ))}
  </div>
);

Component.displayName = 'TrackList';

Component.defaultProps = {
  tracks: [
    {
      name: '',
      artist: '',
      album: '',
    },
  ],
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
