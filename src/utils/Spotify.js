const CLIENT_ID = '0ba310a47e58440a930da7c6617e62fc';
const REDIRECT_URI = 'http://localhost:3000/';

const responseOkOrThrow = response => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('request failed!');
  }
};

const stringifyBody = body => JSON.stringify(body);

const fetchPost = (url, headers, body) => {
  return fetch(url, {
    headers,
    method: 'POST',
    body: stringifyBody(body),
  });
};

export const Spotify = {
  accessToken: null,
  accessTokenExpiration: null,
  userId: null,
  getAuthorizationHeader() {
    return {
      Authorization: `Bearer ${this.getAccessToken()}`,
    };
  },
  getAccessToken() {
    if (this.accessToken != null) {
      return this.accessToken;
    }

    const userAccessTokenIsPresent = window.location.href.match(
      /access_token=([^&]*)/
    );
    const userAccessTokenExpirationIsPresent = window.location.href.match(
      /expires_in=([^&]*)/
    );

    if (userAccessTokenIsPresent && userAccessTokenExpirationIsPresent) {
      this.accessToken = userAccessTokenIsPresent[1];
      this.accessTokenExpiration = userAccessTokenExpirationIsPresent[1];
      window.setTimeout(
        () => (this.accessToken = null),
        this.accessTokenExpiration * 1000
      );
      window.history.pushState('Access Token', null, '/');
      return this.accessToken;
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
    }

    return this.accessToken;
  },
  search(searchTerm) {
    if (this.accessToken == null) {
      localStorage.setItem('searchTerm', searchTerm);
    }
    return fetch(
      `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,
      {
        headers: this.getAuthorizationHeader(),
      }
    )
      .then(responseOkOrThrow)
      .then(jsonResponse => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      });
  },
  savePlaylist(playlistName, trackURIs) {
    if (playlistName != null && trackURIs != null) {
      let userID;
      return fetch('https://api.spotify.com/v1/me', {
        headers: this.getAuthorizationHeader(),
      })
        .then(responseOkOrThrow)
        .then(jsonResponse => {
          userID = jsonResponse.id;
          return fetchPost(
            `https://api.spotify.com/v1/users/${userID}/playlists`,
            this.getAuthorizationHeader(),
            { name: playlistName }
          )
            .then(response => response.json())
            .then(jsonResponse => {
              let playlistID = jsonResponse.id;
              return fetchPost(
                `https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
                this.getAuthorizationHeader(),
                { uris: trackURIs }
              );
            });
        });
    }
    return;
  },
};
