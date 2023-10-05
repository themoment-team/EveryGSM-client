import styled from '@emotion/styled';

export const Categories = styled.div<{ isDark: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 1.875rem;
  margin-right: 0.3125rem;
  border-radius: 3.125rem;
  padding: 0rem 0.625rem;
  transition: ease-in-out 0.3s;
  color: ${({ theme }) => theme.exception.categories};
  background-color: ${({ theme }) => theme.exception.back};

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    border-radius: 2.8vw;
    font-size: 2.5vw;
    height: 2.5vh;
  }
`;
