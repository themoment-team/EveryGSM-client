import styled from '@emotion/styled';

export const Controller = styled.button`
  border: none;
  z-index: 1;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.gray[0]};
`;

export const PrevController = styled(Controller)`
  margin-right: 1.875rem;
`;

export const NextController = styled(Controller)`
  margin-left: 1.875rem;

  svg {
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
`;
