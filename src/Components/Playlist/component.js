import React from 'react';
import PropTypes from 'prop-types';

import { Playlist } from './styled-component';
import { TrackList } from '../TrackList';
import { Spotify } from '../../utils';

export class Component extends React.Component {
  state = {
    playlistName: 'New Playlist',
  };

  resetPlaylist = () => {
    this.setState({
      playlistName: 'New Playlist',
    });
    this.props.resetPlaylistTracks();
  };

  handlePlaylistNameChange = event => {
    const newPlaylistName = event.target.value;
    this.setState({
      playlistName: newPlaylistName,
    });
  };

  savePlaylist = () => {
    let tracksURI = this.props.tracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, tracksURI).then(() => {
      this.resetPlaylist();
    });
  };

  render = () => {
    const { onRemoval, tracks } = this.props;

    return (
      <Playlist.Wrapper>
        <input
          onChange={event => this.handlePlaylistNameChange(event)}
          defaultValue="New Playlist"
        />
        <TrackList isRemoval onTrackClick={onRemoval} tracks={tracks} />
        <Playlist.SaveButton onClick={this.savePlaylist}>
          SAVE TO SPOTIFY
        </Playlist.SaveButton>
      </Playlist.Wrapper>
    );
  };
}

Component.displayName = 'Playlist';

Component.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      /** Name of the track. */
      name: PropTypes.string,
      /** Artist of the track. */
      artist: PropTypes.string,
      /** Album of the track. */
      album: PropTypes.string,
    })
  ).isRequired,
  /* Handler | Removes the song for the playlist */
  onRemoval: PropTypes.func.isRequired,
  /* Resets the playlistTracks state property in App */
  resetPlaylistTracks: PropTypes.func.isRequired,
};
