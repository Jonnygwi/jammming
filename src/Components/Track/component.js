import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Theme } from '../utils';

const TrackWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${Theme.mainColor};
`;

const TrackInformation = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 72px;

  h3 {
    margin-bottom: 0.22rem;
  }

  p {
    font-size: 0.83rem;
    font-weight: 300;
    color: ${Theme.mainColor};
  }
`;

const TrackCallToAction = styled.a`
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.05rem;
  transition: color 0.25s;

  &:hover {
    color: rgba(265, 265, 265, 0.5);
  }
`;

export const Component = ({ track, isRemoval, onTrackClick }) => (
  <TrackWrapper>
    <TrackInformation>
      <h3>{track.name}</h3>
      <p>{`${track.artist} | ${track.album}`}</p>
    </TrackInformation>
    <TrackCallToAction onClick={() => onTrackClick(track)}>
      {isRemoval ? '-' : '+'}
    </TrackCallToAction>
  </TrackWrapper>
);

Component.displayName = 'Track';

Component.defaultProps = {
  isRemoval: false,
};

Component.propTypes = {
  /** Shows the correct action to the user */
  isRemoval: PropTypes.boolean,
  /** Handler adding tracks to a playlist */
  onTrackClick: PropTypes.func.isRequired,
  /** Track object containing information about the track */
  track: PropTypes.shape({
    /** Name of the track. */
    name: PropTypes.string,
    /** Artist of the track. */
    artist: PropTypes.string,
    /** Album of the track. */
    album: PropTypes.string,
  }).isRequired,
};
