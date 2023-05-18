import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }`;

export const MobileCard = styled.div<{ isDark: boolean }>`
  width: 100%;
  height: 10vh;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 0.75rem;
  background-color: ${({ theme }) => theme.exception.card};
`;

export const ContentWrap = styled.div`
  position: absolute;
  left: 5.6%;
  width: 73vw;
  height: 15vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 390px) {
    height: 15vw;
  }
`;

export const Logo = styled.div`
  width: 13vw;
  height: 13vw;
  position: relative;

  img {
    object-fit: cover;
  }
`;

export const CardContents = styled.div`
  width: 50vw;
  height: 12vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 340px) {
    height: 100%;
  }
`;

export const Title = styled.h2`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 4vw;
  line-height: 1.5625rem;

  @media (max-width: 390px) {
    font-size: 5.13vw;
  }
`;

export const Slide = styled.div`
  width: 25rem;
  height: 5vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  white-space: nowrap;
  animation: ${slide} 15s linear infinite;
`;

export const Categories = styled.div`
  overflow: scroll;
  height: 1.875rem;

  @media (max-width: 897px) {
    width: 100%;
  }
`;

export const DetailBtn = styled.h2`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  position: absolute;
  font-size: 2.5vw;
  top: 7%;
  right: 3.5%;
  z-index: 99999;
  line-height: 1.125rem;
  color: #999999;
`;
