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
    height: 95vh !important;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    padding-top: 0;
  }

  transition: ease-in-out 0.3s;
  background-color: ${({ theme: { gray } }) => gray[0]};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.75rem;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    margin-top: 3.125rem;
    padding-bottom: 50px;
  }
  background-color: ${({ theme: { gray } }) => gray[0]};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 79.0625rem;
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
`;

export const SlideBox = styled.div`
  display: flex;
  position: absolute;
  left: ${({ slideIndex }: { slideIndex: number }) => -(slideIndex * 100)}%;
  top: 0;
  transition: left 0.3s ease-in-out;
`;
