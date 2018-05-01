import React from 'react';

import { Spotify } from '../../utils';

import { Playlist } from '../Playlist';
import { SearchBar } from '../SearchBar';
import { SearchResults } from '../SearchResults';

import './styles.css';

export class Component extends React.Component {
  state = {
    searchResults: [],
    playlistName: 'New Playlist',
    playlistTracks: [],
  };

  addTrackToPlaylist = trackToAdd => {
    const { playlistTracks } = this.state;

    const doesTrackIdExistInTrackList = playlistTracks.some(
      track => track.id === trackToAdd.id
    );

    if (doesTrackIdExistInTrackList) {
      console.log('Track already exists in playlist');
    } else {
      this.setState({
        playlistTracks: [...playlistTracks, trackToAdd],
      });
    }
  };

  removeTrackFromPlaylist = trackToRemove => {
    const { playlistTracks } = this.state;

    const newPlaylist = playlistTracks.filter(
      track => track.id !== trackToRemove.id
    );

    this.setState({
      playlistTracks: newPlaylist,
    });
  };

  updatePlaylistName = newPlaylistName => {
    this.setState({
      playlistName: newPlaylistName,
    });
  };

  savePlaylist = () => {
    let tracksURI = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, tracksURI).then(() => {
      this.setState({
        playlistTracks: [],
        playlistName: 'New Playlist',
      });
    });
  };

  search = searchTerm => {
    if (searchTerm != null && searchTerm !== '') {
      Spotify.search(searchTerm).then(results => {
        this.setState({ searchResults: results });
      });
    } else {
      this.setState({ searchResults: [] });
    }
  };

  render = () => (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={this.search} />
        <div className="App-playlist">
          <SearchResults
            onAdd={this.addTrackToPlaylist}
            searchResults={this.state.searchResults}
          />
          <Playlist
            name={this.state.playlistName}
            onNameChange={this.updatePlaylistName}
            onRemoval={this.removeTrackFromPlaylist}
            tracks={this.state.playlistTracks}
            onSave={this.savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

Component.displayName = 'App';
