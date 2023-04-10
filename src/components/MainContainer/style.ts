import styled from '@emotion/styled';
import P from 'src/assets/palette';

export const MainBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.25rem;
  background-color: ${P.gray4};
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  height: 340px;
`;

export const Cards = styled.div`
  width: 1136px;
  display: flex;
  align-items: center;
`;
