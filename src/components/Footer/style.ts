import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 5rem;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.color.gray[1]};
  transition: ease-in-out 0.3s;
`;

export const FootText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.3125rem;
  letter-spacing: -0.03em;
  color: ${props => props.theme.color.gray[4]};
`;
