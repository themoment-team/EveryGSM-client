import styled from '@emotion/styled';

export const BannerContainer = styled.div`
  width: 71rem;
  height: 18.75rem;
  background: linear-gradient(
    275.95deg,
    ${({ theme: { primary } }) =>
      `${primary.pale_yellow} -8.73%, ${primary.magenta} 102.76%`}
  );
  border-radius: 1.25rem;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: calc(
      76vw + 1.75rem
    ); // 한페이지의 카드 width * 카드 개수 + 카드 사이 gap
    height: 13.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 87.6%;
    height: 9.5rem;
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  letter-spacing: 0.08em;
  line-height: 1.5625rem;
  font-weight: 700;
  font-style: normal;
  color: white;
  margin-left: 4.1875rem;
  padding-top: 5%;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    margin-left: 6%;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    position: absolute;
    left: 7%;
    top: 18%;
    margin: 0;
    padding: 0;
  }
`;

export const SmallText = styled.p`
  font-size: 1.5rem;

  @media ((max-width: ${({ theme }) => theme.breakPoint.tablet})) {
    font-size: 1rem;
  }
`;

export const BigText = styled.p`
  margin-top: 3.25rem;
  font-size: 5rem;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    font-size: 3.25rem;
    margin-top: 1.5rem;
  }
`;

export const MobileText = styled.p`
  line-height: 2.1875rem;
  font-size: 1.3125rem;
  font-weight: 700;
  letter-spacing: -0.03em;

  @media (max-height: 750px) {
    line-height: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    font-size: 5vw;
  }

  @media (max-width: 390px) {
    font-size: 5vw;
    line-height: 1rem;
  }
`;

export const BannerImg = styled.div`
  width: 21.875rem;
  height: 100%;
  display: flex;
  position: relative;

  img {
    position: relative !important;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    right: 0rem;
    width: 13.75rem;
    height: 13.75rem;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    position: absolute;
    width: 9.5rem;
    height: 100%;
    right: 0;
  }

  @media (max-width: 390px) {
    position: absolute;
    width: 40.6%;
    height: 74.3%;
    bottom: 0.4688rem;
    right: 0;
  }
`;
