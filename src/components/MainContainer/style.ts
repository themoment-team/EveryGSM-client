import styled from '@emotion/styled';

export const MainBox = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.25rem;

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
  margin-top: 92px;
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
`;
export const SlideBox = styled.div``;
