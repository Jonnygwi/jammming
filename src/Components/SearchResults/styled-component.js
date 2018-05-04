import styled from 'styled-components';

export const SearchResults = {
  Wrapper: styled.div`
    width: 50%;
    height: 950px;
    overflow-y: scroll;
    padding: 0.88rem;
    background-color: rgba(1, 12, 63, 0.7);
    box-shadow: 0 4px 2px 2px #000000;

    @media only screen and (max-width: 1020px) {
      width: 90%;
      margin-bottom: 2rem;
    }

    &::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
  `,
};
