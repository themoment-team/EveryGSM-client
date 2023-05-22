import styled from '@emotion/styled';

export const MainBox = styled.div`
  width: 100vw;
  height: calc(100vh - 7.25rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.25rem;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    padding-top: 2rem;
    height: 100vh;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    padding-top: 0;
    height: 100vh;
  }

  transition: ease-in-out 0.3s;
  background-color: ${({ theme: { gray } }) => gray[0]};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.75rem;
  transition: ease-in-out 0.3s;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    margin-top: 3.125rem;
    padding-bottom: 3.125rem;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    margin-top: 2.5rem;
  }
  transition: ease-in-out 0.3s;

  background-color: ${({ theme: { gray } }) => gray[0]};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 79.0625rem;
  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Cards = styled.div`
  width: 71.25rem;
  height: 21.5625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 81vw;
    height: 81vw;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 87.6vw;
    height: 75vh;
    overflow: scroll;
  }
`;

export const SlideBox = styled.div``;

export const MobileCardTitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 4vw;
  line-height: 1.5625rem;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.exception.cardTitle};
  margin-bottom: 0.75rem;
  width: 71.25rem;
  width: 87.6vw;
`;

export const MobileCardWrap = styled.div`
  width: 87.6vw;
  height: 10vh;

`;
