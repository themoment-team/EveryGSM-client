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
  width: 71rem;
  height: 21.5625rem;
  position: relative;
  overflow: hidden;
`;

export const MoveContainer = styled.div<{ slideIndex: number }>`
  display: flex;
  gap: 1.75rem;
  position: absolute;
  left: -${({ slideIndex }) => slideIndex * 72.75}rem;
  transition: ease-in-out 0.3s;
`;
