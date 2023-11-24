import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const CardWrapper = styled.div`
  height: 21.25rem;
  width: 22.5rem;
  padding: 1.75rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: rgba(112, 144, 176, 0.2);
  background-color: ${({ theme }) => theme.exception.card};
  transition: background-color 0.3s;
  box-shadow: 0.25rem 0.25rem 0.4375rem rgba(112, 144, 176, 0.2);
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 38vw;
    height: 38vw;
  }
`;

export const LogoWrapper = styled.div`
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;

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
  transition: color 0.3s ease-in-out;

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

  path {
    transition: fill 0.3s ease-in-out;
    fill: ${({ theme }) => theme.exception.creater};
  }

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
  transition: color 0.3s ease-in-out;
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

  @media (max-width: 56.0625rem) {
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

export const DetailBtn = styled.div`
  width: 1.375rem;
  height: 1.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  left: 18.125rem;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    left: 31vw;
    width: 6%;
    height: 6%;
  }
`;
