import React from 'react';
import PropTypes from 'prop-types';

import { Playlist } from './styled-component';
import { TrackList } from '../TrackList';

export const Component = ({ tracks, onRemoval, onNameChange, onSave }) => (
  <Playlist.Wrapper>
    <input
      onChange={event => onNameChange(event.target.value)}
      defaultValue="New Playlist"
    />
    <TrackList isRemoval onTrackClick={onRemoval} tracks={tracks} />
    <Playlist.SaveButton onClick={onSave}>SAVE TO SPOTIFY</Playlist.SaveButton>
  </Playlist.Wrapper>
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
