import styled from '@emotion/styled';

export const TextContainer = styled.div`
  letter-spacing: 0.08em;
  line-height: 1.5625rem;
  font-weight: 700;
  font-style: normal;
  color: white;
  margin-left: 4.1875rem;
`;

export const SmallText = styled.p`
  font-size: 1.5rem;
  margin-top: 4rem;
`;

export const BigText = styled.p`
  font-size: 5.3125rem;
  margin-top: 3.25rem;
`;

export const BannerContainer = styled.div`
  width: 71rem;
  height: 18.75rem;
  border-radius: 1.25rem;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    275.95deg,
    ${({ theme: { primary } }) =>
      `${primary.pale_yellow} -8.73%, ${primary.magenta} 102.76%`}
  );
`;
