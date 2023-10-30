import styled from '@emotion/styled';

export const CardContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.25rem;

  @media (max-width: 900px) {
    gap: 0;
  }
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
  width: calc(
    76vw + 1.75rem
  ); // 한페이지의 카드 width * 카드 개수 + 카드 사이 gap
  height: calc(76vw + 1.75rem);
  position: relative;
  overflow: hidden;
`;

export const Slider = styled.div<{ slideIndex: number }>`
  position: absolute;
  left: ${({ slideIndex }) =>
    `calc(${slideIndex * -76}vw + ${
      slideIndex * -3.5
    }rem)`}; // 한페이지의 카드 width * 카드 개수 + 카드 사이 gap * 2
  transition: ease-in-out 0.3s;
`;

export const MoveContainer = styled.div<{ maxIndex: number }>`
  display: grid;
  grid-template-columns: repeat(${({ maxIndex }) => (maxIndex + 1) * 2}, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.75rem;
`;
