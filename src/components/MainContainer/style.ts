import styled from '@emotion/styled';

export const MainBox = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.25rem 0;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    padding-top: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    padding-top: 0;
  }

  transition: background-color 0.3s ease-in-out;
  background-color: ${({ theme: { gray } }) => gray[0]};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.75rem;
  transition: background-color 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    margin-top: 3.125rem;
    padding-bottom: 3.125rem;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    margin-top: 2.5rem;
  }

  background-color: ${({ theme: { gray } }) => gray[0]};
`;
