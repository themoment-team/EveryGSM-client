import styled from '@emotion/styled';
import theme from 'assets/palette';

export const MainBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.25rem;
  background-color: ${theme.color.gray[0]};
  @media screen and (max-width: 720px) {
    padding-top: 0;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  height: 21.25rem;
`;

export const Cards = styled.div`
  width: 71rem;
  display: flex;
  align-items: center;
`;
