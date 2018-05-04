import styled from 'styled-components';

import backgroundImage from '../../assets/background_photo_desktop.jpg';

export const App = {
  Wrapper: styled.div`
    height: 100%;
    padding: 0 17% 10% 17%;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    color: #fff;
  `,
  Playlist: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media only screen and (max-width: 1020px) {
      align-items: center;
      flex-direction: column;
    }
  `,
};
