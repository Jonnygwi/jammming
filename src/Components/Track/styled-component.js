import styled from 'styled-components';

import { Theme } from '../utils';

export const Track = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${Theme.mainColor};
  `,
  Information: styled.div`
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
  `,
  CallToAction: styled.a`
    cursor: pointer;
    padding: 0.5rem;
    font-size: 1.05rem;
    transition: color 0.25s;

    &:hover {
      color: rgba(265, 265, 265, 0.5);
    }
  `,
};
