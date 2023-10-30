import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.25rem;
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

export const Controller = styled.button`
  border: none;
  z-index: 1000000000;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.exception.nav};
`;

export const PrevController = styled(Controller)`
  margin-right: 3.125rem;

  @media (max-width: 1360px) {
    margin: 0;
  }
`;

export const NextController = styled(Controller)`
  margin-left: 3.125rem;

  svg {
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  @media (max-width: 1360px) {
    margin: 0;
  }
`;
