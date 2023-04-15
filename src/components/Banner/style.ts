import styled from '@emotion/styled';
import Image from 'next/image';

export const BannerContainer = styled.div`
  width: 71rem;
  height: 18.75rem;
  background: linear-gradient(275.95deg, #ffe870 -8.73%, #e23c96 102.76%);
  border-radius: 1.25rem;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    position: relative;
    width: 81vw;
    height: 30vw;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    position: relative;
    width: 87.6%;
    height: 9.5rem !important;
  }
`;

export const TextContainer = styled.div`
  /* letter-spacing: 0.08em; */
  /* line-height: 1.5625rem; */
  font-weight: 700;
  font-style: normal;
  color: white;
  margin-left: 4.1875rem;
  padding-top: 5%;
  /* margin-top: 4rem; */

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    position: absolute;
    margin: 0;
    left: 7%;
    top: 18%;
    padding: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
  } ;
`;

export const SmallText = styled.p`
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    font-size: 2vw !important;
  } ;
`;

export const BigText = styled.p`
  margin-top: 3.25rem;
  font-size: 5.3125rem;
  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    font-size: 8vw;
    margin: 0;
  }
`;

export const MobileText = styled.p`
  line-height: 35px;
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.03em;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    font-size: 6vw;
  }
`;

export const BannerImg = styled.div`
  width: 21.875rem;
  img {
    position: relative !important;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    position: absolute;
    right: 6.18px;
    bottom: 11.8px;
    width: 32%;
    height: 84%;
    object-fit: cover;
  }
  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 40.6%;
    height: 74.3%;
    position: absolute;
    right: 0;
    bottom: 7.5px !important;
  }
`;
