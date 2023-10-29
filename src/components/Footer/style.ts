import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 5rem;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    display: none;
  }

  transition: ease-in-out 0.3s;
  background-color: ${({ theme: { gray } }) => gray[1]};

  @media (min-height: 1000px) {
    position: absolute;
    top: calc(
      100vh - 5rem
    ); // 화면 전체에서 맨 아래에 footer가 위치되도록 -> 화면 높이 - footer 높이
  }

  @media (max-height: 1000px) {
    margin-top: 6.25rem;
  }
`;

export const FootText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.3125rem;
  letter-spacing: -0.03em;
  transition: ease-in-out 0.3s;
  color: ${({ theme }) => theme.exception.footText};
`;
