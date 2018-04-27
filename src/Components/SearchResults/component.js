import React from 'react';
import PropTypes from 'prop-types';

import { TrackList } from '../TrackList';

import './styles.css';

export const Component = ({ searchResults }) => (
  <div className="SearchResults">
    <h2>Results</h2>
    <TrackList tracks={searchResults} />
  </div>
);

Component.displayName = 'SearchResults';

Component.defaultProps = {
  searchResults: [{}],
};

Component.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      artist: PropTypes.string,
      album: PropTypes.string,
    })
  ),
};
