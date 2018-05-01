import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const Component = ({ onSearch }) => {
  const handleSearchTermChange = event => {
    const searchTerm = event.target.value;

    onSearch(searchTerm);
  };
  return (
    <div className="SearchBar">
      <input
        onChange={event => handleSearchTermChange(event)}
        placeholder="Enter A Song, Album, or Artist"
      />
      <a>SEARCH</a>
    </div>
  );
};

Component.displayName = 'SearchBar';

Component.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
