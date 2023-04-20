import styled from '@emotion/styled';

export const MainBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.25rem;
  transition: ease-in-out 0.3s;
  background-color: ${({ theme: { mode } }) => mode.body};
`;

export const CardContainer = styled.div`
  display: flex;
  width: 1238px;
  height: 345px;
  align-items: center;
  height: 21.25rem;
  margin-top: 92px;
`;

export const Cards = styled.div``;
