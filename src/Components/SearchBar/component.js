import React from 'react';
import PropTypes from 'prop-types';
import { SearchBar } from './styled-component';

export const Component = ({ onSearch, onUpdateSearchTerm }) => {
  const handleSearchTermChange = event => {
    const searchTerm = event.target.value;

    onUpdateSearchTerm(searchTerm);
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <SearchBar.Wrapper>
      <input
        onChange={event => handleSearchTermChange(event)}
        onKeyPress={handleKeyPress}
        placeholder="Enter A Song, Album, or Artist"
      />
      <a onClick={onSearch}>SEARCH</a>
    </SearchBar.Wrapper>
  );
};

Component.displayName = 'SearchBar';

Component.propTypes = {
  /* Handler | Searches Spotify's API with search term */
  onSearch: PropTypes.func.isRequired,
  /* Handler | Updates the search term in App component */
  onUpdateSearchTerm: PropTypes.func.isRequired,
};
