import styled from '@emotion/styled';

export const MainBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.25rem;
  transition: ease-in-out 0.3s;
  background-color: ${({ theme: { gray } }) => gray[0]};
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
