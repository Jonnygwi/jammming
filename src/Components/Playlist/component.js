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
  /* Handler | Saves playlist to Spotify account */
  onSave: PropTypes.func.isRequired,
  /* Handler | Changes the name of the playlist */
  onNameChange: PropTypes.func.isRequired,
  /* Handler | Removes the song for the playlist */
  onRemoval: PropTypes.func.isRequired,
  /* Tracks object returned from Spotify API */
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      artist: PropTypes.string,
      album: PropTypes.string,
    })
  ),
};
