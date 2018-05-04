import React from 'react';
import PropTypes from 'prop-types';

import { TrackList } from '../TrackList';

import { SearchResults } from './styled-component';

export const Component = ({ onAdd, searchResults }) => (
  <SearchResults.Wrapper>
    <h2>Results</h2>
    <TrackList onTrackClick={onAdd} tracks={searchResults} />
  </SearchResults.Wrapper>
);

Component.displayName = 'SearchResults';

Component.defaultProps = {
  searchResults: [{}],
};

Component.propTypes = {
  /* Handler | Adds song from search results to playlist */
  onAdd: PropTypes.func.isRequired,
  /* Object returned from Spotify's API */
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      /** Name of the track. */
      name: PropTypes.string,
      /** Artist of the track. */
      artist: PropTypes.string,
      /** Album of the track. */
      album: PropTypes.string,
    })
  ),
};
