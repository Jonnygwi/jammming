import styled from 'styled-components';

export const SearchBar = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 6.94rem;
    margin-bottom: 6.33rem;

    @media only screen and (max-width: 1020px) {
      width: 90%;
      margin-bottom: 2rem;
    }

    &::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }

    input {
      width: 287px;
      padding: 0.88rem 0;
      border: 1px solid #fff;
      border-radius: 3px;
      margin-bottom: 2.22rem;
      color: #010c3f;
      text-align: center;
      font-size: 1rem;

      &:focus {
        outline: none;
      }
    }

    a {
      cursor: pointer;
      width: 8.11rem;
      padding: 0.77rem 0;
      border-radius: 54px;
      background-color: #010c3f;
      text-align: center;
      font-size: 0.833rem;
      transition: background-color 0.25s;

      &:hover {
        background-color: rgba(108, 65, 233, 0.7);
      }
    }
  `,
};
