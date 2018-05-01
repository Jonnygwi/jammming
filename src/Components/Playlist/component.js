import React from 'react';
import PropTypes from 'prop-types';

import { TrackList } from '../TrackList';

import './styles.css';

export const Component = ({ tracks, onRemoval, onNameChange, onSave }) => (
  <div className="Playlist">
    <input
      onChange={event => onNameChange(event.target.value)}
      defaultValue="New Playlist"
    />
    <TrackList isRemoval onTrackClick={onRemoval} tracks={tracks} />
    <a onClick={onSave} className="Playlist-save">
      SAVE TO SPOTIFY
    </a>
  </div>
);

Component.displayName = 'Playlist';

Component.defaultProps = {
  tracks: [],
};

Component.propTypes = {
  onSave: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onRemoval: PropTypes.func.isRequired,
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      artist: PropTypes.string,
      album: PropTypes.string,
    })
  ),
};
