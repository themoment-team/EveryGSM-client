import styled from '@emotion/styled';

export const MobileContainer = styled.div``;

export const MobileCardWrap = styled.div`
  width: 87.6vw;
  height: 80vh;
  position: relative;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 5rem;
`;

export const MobileCardTitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 4vw;
  line-height: 1.5625rem;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.exception.cardTitle};
  margin-bottom: 0.75rem;
  width: 87.6vw;
`;
