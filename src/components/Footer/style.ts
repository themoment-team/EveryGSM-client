import styled from '@emotion/styled';
import P from 'src/assets/palette';

export const FooterContainer = styled.footer`
  width: 100vw;
  height: 80px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${P.gray2};
`;

export const FootText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.03em;
  color: ${P.gray3};
`;
