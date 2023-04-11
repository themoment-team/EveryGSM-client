import styled from '@emotion/styled';
import Image from 'next/image';
import theme from 'assets/palette';

export const TextContainer = styled.div`
  letter-spacing: 0.08em;
  line-height: 1.5625rem;
  font-weight: 700;
  font-style: normal;
  color: white;
  margin-left: 4.1875rem;
`;

export const SmallText = styled.p`
  margin-top: 4rem;
  font-size: 1.5rem;
`;

export const BigText = styled.p`
  margin-top: 3.25rem;
  font-size: 5.3125rem;
`;

export const BannerContainer = styled.div`
  width: 71rem;
  height: 18.75rem;
  background: linear-gradient(275.95deg, #ffe870 -8.73%, #e23c96 102.76%);
  border-radius: 1.25rem;
  display: flex;
  justify-content: space-between;

  @media screen and ((max-width: ${theme.breakPoint.width[1]})) {
    width: 95vw;
  }
`;
