import React from 'react';

import { TrackList } from '../TrackList';

import './styles.css';

export const Component = () => (
  <div className="Playlist">
    <input defaultValue="New Playlist" />
    <TrackList />
    <a className="Playlist-save">SAVE TO SPOTIFY</a>
  </div>
);

Component.displayName = 'Playlist';
