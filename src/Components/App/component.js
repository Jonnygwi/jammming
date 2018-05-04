import React from 'react';
import { Spotify } from '../../utils';

import { App } from './styled-component';
import { Playlist } from '../Playlist';
import { SearchBar } from '../SearchBar';
import { SearchResults } from '../SearchResults';

import './styles.css';

export class Component extends React.Component {
  state = {
    searchResults: [],
    searchTerm: '',
    playlistName: 'New Playlist',
    playlistTracks: [],
  };

  componentDidMount() {
    const storedSearch = localStorage.getItem('searchTerm');
    if (
      storedSearch != null &&
      storedSearch !== '' &&
      storedSearch != this.state.searchTerm
    ) {
      Spotify.search(storedSearch)
        .then(results => {
          this.setState({
            searchResults: results,
            searchTerm: storedSearch,
          });
        })
        .then(localStorage.removeItem('searchTerm'));
    }
  }

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

  updateSearchTerm = newSearchTerm => {
    this.setState({
      searchTerm: newSearchTerm,
    });
  };

  search = () => {
    if (this.state.searchTerm !== '') {
      Spotify.search(this.state.searchTerm).then(results => {
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
      <App.Wrapper>
        <SearchBar
          onUpdateSearchTerm={this.updateSearchTerm}
          onSearch={this.search}
        />
        <App.Playlist>
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
        </App.Playlist>
      </App.Wrapper>
    </div>
  );
}

Component.displayName = 'App';
