import React from 'react';

import { Playlist } from '../Playlist';
import { SearchBar } from '../SearchBar';
import { SearchResults } from '../SearchResults';

export class Component extends React.Component {
  render = () => (
    <div>
      <h1>
        Ja<span class="highlight">mmm</span>ing
      </h1>
      <div class="App">
        <SearchBar />
        <div class="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  );
}
