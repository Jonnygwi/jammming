import React from 'react';
import PropTypes from 'prop-types';

import { Spotify } from '../../utils';
import { SearchBar } from './styled-component';

export class Component extends React.Component {
  state = {
    searchTerm: '',
  };

  componentDidMount() {
    const storedSearch = localStorage.getItem('searchTerm');
    if (
      storedSearch != null &&
      storedSearch !== '' &&
      storedSearch != this.state.searchTerm
    ) {
      Spotify.search(storedSearch)
        .then(results => {
          this.setState({
            searchTerm: storedSearch,
          });
          this.props.updateSpotifySearchResults(results);
        })
        .then(localStorage.removeItem('searchTerm'));
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
