import React from 'react';
import PropTypes from 'prop-types';

import { TrackList } from '../TrackList';

import './styles.css';

export const Component = ({ onAdd, searchResults }) => (
  <div className="SearchResults">
    <h2>Results</h2>
    <TrackList onTrackClick={onAdd} tracks={searchResults} />
  </div>
);

Component.displayName = 'SearchResults';

Component.defaultProps = {
  searchResults: [{}],
};

Component.propTypes = {
  onAdd: PropTypes.func.isRequired,
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      artist: PropTypes.string,
      album: PropTypes.string,
    })
  ),
};
