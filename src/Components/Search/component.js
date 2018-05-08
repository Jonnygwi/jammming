import React from 'react';
import PropTypes from 'prop-types';

import { Spotify } from '../../utils';
import { getStoredSearchTerm } from './utils/getStoredSearchTerm';
import { removeStoredSearchTerm } from './utils/removeStoredSearchTerm';
import { SearchBar } from './styled-component';

export class Component extends React.Component {
  state = {
    searchTerm: '',
  };

  componentDidMount() {
    const storedSearchTerm = getStoredSearchTerm();
    if (
      storedSearchTerm != null &&
      storedSearchTerm !== '' &&
      storedSearchTerm != this.state.searchTerm
    ) {
      Spotify.search(storedSearchTerm)
        .then(results => {
          this.setState({
            searchTerm: storedSearchTerm,
          });
          this.props.updateSpotifySearchResults(results);
        })
        .then(removeStoredSearchTerm());
    }
  }

  handleSearchTermChange = event => {
    const searchTerm = event.target.value;
    this.setState({
      searchTerm: searchTerm,
    });
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleSpotifySearch();
    }
  };

  handleSpotifySearch = () => {
    const { searchTerm } = this.state;
    return Spotify.search(searchTerm).then(results => {
      this.props.updateSpotifySearchResults(results);
    });
  };

  render = () => (
    <SearchBar.Wrapper>
      <input
        onChange={event => this.handleSearchTermChange(event)}
        onKeyPress={this.handleKeyPress}
        placeholder="Enter A Song, Album, or Artist"
      />
      <a onClick={this.handleSpotifySearch}>SEARCH</a>
    </SearchBar.Wrapper>
  );
}

Component.displayName = 'SearchBar';

Component.propTypes = {
  /* Handler | Searches Spotify's API with search term */
  updateSpotifySearchResults: PropTypes.func.isRequired,
};
