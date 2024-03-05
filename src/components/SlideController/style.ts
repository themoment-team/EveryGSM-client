import styled from '@emotion/styled';
import type { Device } from 'utils';

enum Margin {
  PC = '3.125rem',
  TABLET = '1.875rem',
}

export const Controller = styled.button<{ view: Device }>`
  border: none;
  z-index: 1;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.gray[0]};
`;

export const PrevController = styled(Controller)`
  margin-right: ${({ view }) => Margin[view]};
`;

export const NextController = styled(Controller)`
  margin-left: ${({ view }) => Margin[view]};

  svg {
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
`;
