import React from 'react';
import PropTypes from 'prop-types';

export const Component = ({ name, artist, album }) => (
  <div className="Track">
    {console.log(name, artist, album)}
    <div className="Track-information">
      <h3>{name}</h3>
      <p>{`${artist} | ${album}`}</p>
    </div>
    {/* <a class="Track-action"><!-- + or - will go here --></a> */}
  </div>
);

Component.displayName = 'Track';

Component.propTypes = {
  /** Name of the track. */
  name: PropTypes.string.isRequired,
  /** Artist of the track. */
  artist: PropTypes.string.isRequired,
  /** Album of the track. */
  album: PropTypes.string.isRequired,
};
