import styled from '@emotion/styled';

export const Controller = styled.button<{ view: 'PC' | 'TABLET' }>`
  border: none;
  z-index: 1;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.gray[0]};
`;

export const PrevController = styled(Controller)`
  margin-right: ${({ view }) => (view === 'PC' ? '3.125rem' : '1.875rem')};
`;

export const NextController = styled(Controller)`
  margin-left: ${({ view }) => (view === 'PC' ? '3.125rem' : '1.875rem')};

  svg {
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
`;
