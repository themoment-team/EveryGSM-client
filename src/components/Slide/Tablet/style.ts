import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.25rem;
  transition: ease-in-out 0.3s;
`;

export const VectorWrapper = styled.div<{ isRight?: boolean }>`
  width: 2.5rem;
  height: 3rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  ${({ isRight }) => isRight && 'transform: matrix(-1, 0, 0, 1, 0, 0);'}
`;

export const Cards = styled.div`
  width: 90vw;
  height: 100vh;
  position: relative;
  /* overflow: hidden; */
`;

export const MoveContainer = styled.div<{ slideIndex: number }>`
  display: grid;
  grid-template-rows: repeat(2, 1fr); /* 2개의 행을 생성합니다. */
  /* grid-template-columns: repeat(2, 1fr); /* 2개의 열을 생성합니다. */
  /* grid-template-rows: repeat(2, 1fr);  */
  gap: 1.75rem;
  position: absolute;
  /* left: -${({ slideIndex }) => slideIndex * 72.75}rem; */
  transition: ease-in-out 0.3s;
`;
