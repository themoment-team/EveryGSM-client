import styled from '@emotion/styled';

export const SearchBarWrapper = styled.div`
  width: 22.5rem;
  height: 2.25rem;
  border-radius: 3.125rem;
  background: ${({ theme }) => theme.exception.searchBar};
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0 1rem;
`;

export const Input = styled.input<{ isDark: boolean }>`
  color: ${({ theme }) => theme.exception.footText};
  background: ${({ theme }) => theme.exception.searchBar};
  width: 100%;
  outline: none;
  border: ${({ isDark }) => (isDark ? 'border: 1px solid #4F4F4F' : '0')};

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 2.1875rem;
  letter-spacing: -0.035rem;

  ::placeholder {
    color: #9a9a9a;
  }
`;
