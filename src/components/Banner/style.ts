import styled from '@emotion/styled';
import Image from 'next/image';
import theme from 'assets/palette';

export const BannerContainer = styled.div`
  width: 71rem;
  height: 18.75rem;
  background: linear-gradient(275.95deg, #ffe870 -8.73%, #e23c96 102.76%);
  border-radius: 1.25rem;
  display: flex;
  justify-content: space-between;

  @media screen and ((max-width: 1300px)) {
    width: 90vw;
    height: 25vw;
  }

  @media screen and ((max-width: 610px)) {
    height: 9.5rem;
  }

  @media screen and ((max-width: 470px)) {
  }
`;

export const TextContainer = styled.div`
  /* letter-spacing: 0.08em; */
  /* line-height: 1.5625rem; */
  font-weight: 700;
  font-style: normal;
  color: white;
  margin-left: 4.1875rem;
  /* margin-top: 4rem; */

  @media screen and ((max-width: 1300px)) {
    /* margin-top: 4vw; */
  }

  @media screen and ((max-width: 650px)) {
    margin-left: 2rem;
    /* margin-top: 2rem; */
  }

  @media screen and ((max-width: 430px)) {
  }
`;

export const SmallText = styled.p`
  font-size: 1.5rem;

  @media screen and ((max-width: 900px)) {
    font-size: 1.125rem;
  }

  @media screen and ((max-width: 720px)) {
    font-size: 1.875rem;
  }

  @media screen and ((max-width: 650px)) {
    font-size: 4vw;
  }
`;

export const BigText = styled.p`
  margin-top: 3.25rem;
  font-size: 5.3125rem;

  @media screen and ((max-width: 900px)) {
    font-size: 4rem;
    margin-top: 2rem;
  }

  @media screen and ((max-width: 720px)) {
    font-size: 1.875rem;
    margin-top: 2.5rem;
  }

  @media screen and ((max-width: 650px)) {
    margin-top: 10%;
    font-size: 4vw;
  }
`;

export const BannerImg = styled.div`
  width: 21.875rem;
  img {
    position: relative !important;
    object-fit: cover;
  }
  @media screen and (max-width: 1300px) {
    width: 35%;
    /* height: 100%; */
  }
`;
