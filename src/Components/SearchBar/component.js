import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

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
    <div className="SearchBar">
      <input
        onChange={event => handleSearchTermChange(event)}
        onKeyPress={handleKeyPress}
        placeholder="Enter A Song, Album, or Artist"
      />
      <a onClick={onSearch}>SEARCH</a>
    </div>
  );
};

Component.displayName = 'SearchBar';

Component.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onUpdateSearchTerm: PropTypes.func.isRequired,
};
