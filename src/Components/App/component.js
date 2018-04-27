import React from 'react';

import { Playlist } from '../Playlist';
import { SearchBar } from '../SearchBar';
import { SearchResults } from '../SearchResults';

import './styles.css';

export class Component extends React.Component {
  state = {
    searchResults: [
      {
        name: 'Afraid of us',
        artist: 'Jonwayne',
        album: 'Rap album two',
      },
      {
        name: 'LIVE from the Fuck You',
        artist: 'Jonwayne',
        album: 'Rap album two',
      },
      {
        name: 'Human Condition',
        artist: 'Jonwayne',
        album: 'Rap album two',
      },
    ],
  };

  render = () => (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

Component.displayName = 'App';
