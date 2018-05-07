import React from 'react';

import { App } from './styled-component';
import { Playlist } from '../Playlist';
import { Search } from '../Search';
import { SearchResults } from '../SearchResults';

import './styles.css';

export class Component extends React.Component {
  state = {
    searchResults: [],
    playlistTracks: [],
  };

  updateSearchResults = results => {
    this.setState({ searchResults: results });
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

  resetPlaylist = () => {
    console.log(this.state);
    this.setState({
      playlistTracks: [],
    });
  };

  render = () => (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <App.Wrapper>
        <Search updateSpotifySearchResults={this.updateSearchResults} />
        <App.Playlist>
          <SearchResults
            onAdd={this.addTrackToPlaylist}
            searchResults={this.state.searchResults}
          />
          <Playlist
            resetPlaylistTracks={this.resetPlaylist}
            onRemoval={this.removeTrackFromPlaylist}
            tracks={this.state.playlistTracks}
          />
        </App.Playlist>
      </App.Wrapper>
    </div>
  );
}

Component.displayName = 'App';
