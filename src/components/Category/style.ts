import styled from '@emotion/styled';
export const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 1.875rem;
  flex-shrink: 0;
  margin-right: 0.3125rem;
  border-radius: 3.125rem;
  padding: 0rem 0.625rem;
  transition: ease-in-out 0.3s;
  color: ${({ theme }) => theme.exception.categories};
  background-color: ${({ theme }) => theme.exception.back};
`;
