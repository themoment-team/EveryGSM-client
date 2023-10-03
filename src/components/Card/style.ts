import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const CardWrapper = styled.div`
  height: 21.25rem;
  width: 22.5rem;
  padding: 28px 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: rgba(112, 144, 176, 0.2);
  transition: ease-in-out 0.3s;
  background-color: ${({ theme }) => theme.exception.card};

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 38vw;
    height: 38vw;
  }
`;

export const LogoWrapper = styled.div`
  height: 4.5rem;
  width: 4.5rem;
  position: relative;
  border-radius: 50%;

  img {
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 8vw;
    height: 8vw;
  }
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 1rem;
  color: ${({ theme }) => theme.exception.cardTitle};
  transition: ease-in-out 0.3s;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    font-size: 1.75rem;
  }
`;

export const Create = styled.div`
  display: flex;
  align-items: center;
  width: 9.0625rem;
  height: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 52.125rem) {
    margin-top: 0.5rem;
  }
`;

export const Creater = styled.div`
  color: ${({ theme }) => theme.exception.creater};
  font-size: 1.25rem;
  font-weight: 600;
  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    font-size: 1rem;
  }
  transition: ease-in-out 0.3s;
`;

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }`;

export const Categories = styled.div`
  overflow: scroll;
  margin-top: 3.75rem;
  height: 1.875rem;

  @media (max-width: 897px) {
    width: 30vw;
    margin-top: 2rem;
  }
`;

export const Slide = styled.div`
  width: 25rem;
  height: 1.875rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  white-space: nowrap;
  animation: ${slide} 15s linear infinite;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 79.0625rem;
`;

export const SlideBtn = styled.div`
  display: flex;
  justify-content: space-between;
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
export const Desc = styled.div`
  color: #999999;
  font-size: 1.125rem;
  font-weight: 200;
  font-size: 1.125rem;
  display: flex;
  justify-content: left;
  margin-top: 1.875rem;
  width: 100%;
  margin-left: 2rem;
`;
export const DetailBtn = styled.div`
  width: 1.375rem;
  height: 1.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10000000;
  position: absolute;
  left: 18.125rem;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    left: 31vw;
    width: 6%;
    height: 6%;
  }
`;
export const CardContents = styled.div`
  width: 18.875rem;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 0.625rem;

  @media (max-width: 834px) {
    margin-top: 0;
  }
`;
export const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;
// export const Back = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   position: absolute;
//   backface-visibility: hidden;
//   background: #ffff;
//   border-radius: 1rem;
//   transform: rotateX(-180deg);
//   text-align: center;
// `;

export const Logo = styled.div`
  height: 4.5rem;
  width: 4.5rem;
  position: relative;
  border-radius: 100%;

  img {
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 8vw;
    height: 8vw;
  }
`;

export const Description = styled.div`
  font-size: 1.375rem;
  margin-top: 1.5rem;
`;
